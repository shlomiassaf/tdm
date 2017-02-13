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
function runMeta() {
  const meta = metadata.shift();

  if (meta) {
    const tsConfig = meta.tsConfigUpdate( jsonfile.readFileSync(root(`tsconfig.package.json`)) );
    jsonfile.writeFileSync(root('.tsconfig.tmp.json'), tsConfig, {spaces: 2});

    Object.assign(meta, {tsConfig: './.tsconfig.tmp.json'});
    const config = resolveConfig(root('config/webpack.package.js'), meta);

    runWebpack(config)
      .done
      .catch( err => {
        console.error(err);
        process.exit(1);
      })
      .then(runMeta);
  }
}

runMeta();


