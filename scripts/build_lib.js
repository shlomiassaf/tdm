const fs = require('fs-extra');
const spawn = require('child_process').execSync;
const webpack = require('webpack');
const jsonfile = require('jsonfile');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}


function resolveConfig(config, ...args) {
  if(typeof config === 'string') {
    return resolveConfig(require(config), ...args);
  } else if (typeof config === 'function') {
    return config(...args);
  } else if (config.__esModule === true && !!config.default) {
    return resolveConfig(config.default, ...args);
  } else {
    return config;
  }
}

function runWebpack(config, ...args) {
  const compiler = webpack(resolveConfig(config, ...args));
  return {
    compiler,
    done: new Promise( (RSV, RJT) => compiler.run((err, stats) => err ? RJT(err) : RSV(stats)) )
  }
}



const metadata = require('./lib_build_config');
const move = [];
function runMeta() {
  const meta = metadata.shift();

  if (meta) {
    const tsConfig = meta.tsConfigUpdate( jsonfile.readFileSync(root(`tsconfig.package.json`)) );
    jsonfile.writeFileSync(root('.tsconfig.tmp.json'), tsConfig, {spaces: 2});

    Object.assign(meta, {tsConfig: './.tsconfig.tmp.json'});
    const config = resolveConfig(root('config/webpack.package.js'), meta);

    return runWebpack(config)
      .done
      .then( () => {
        let p = root(tsConfig.compilerOptions.outDir);
        if (!p.endsWith(`/${meta.dir}`)) {
          p = path.join(p, meta.dir);
        }
        move.push({
          from: path.join(p, 'src'),
          to:  path.join(p),
        });
      })
      .then(() => {
        return runMeta();
      });
  }
  else {
    return Promise.resolve(move);
  }
}

function moveDir(from, to) {

  try {
    if (fs.existsSync(from)) {
      spawn(`mv ${from}/* ${to}`);
      spawn(`rm -rf ${from}`);
    }
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
}

runMeta()
  .then( moves => Promise.all(moves.map( m => moveDir(m.from, m.to) )) )
  .catch( err => {
    console.error(err);
    process.exit(1);
  });


