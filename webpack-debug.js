const webpack = require("webpack");

const envSetup = getEnv({
  env: 'dev',
  // env: 'prod',

  aot: true,
  // aot: false,

  // sim: true
});

const isDev = envSetup.env.indexOf('dev') === 0;

process.env.npm_lifecycle_event = envSetup.flags.join(':');
process.env.NODE_ENV = envSetup.env;

const webpackConfig = require(`./config/webpack.${isDev ? 'dev' : 'prod'}`)({env: envSetup.env, sim: envSetup.sim});

if (isDev) {
  webpackConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin());
}

function compilerCallback(err, stats) {
  console.log('Total Memory:');
  console.log(JSON.stringify(process.memoryUsage(), null, 2));
  if (stats && stats.endTime && stats.startTime) {
    console.log(`Took ${stats.endTime - stats.startTime} ms [${Math.ceil((stats.endTime - stats.startTime) / 1000)} secs]`);
  }
  if (err) throw err;
  if (stats.compilation && stats.compilation.errors && stats.compilation.errors.length > 0) {
    for (let e of stats.compilation.errors) {
      console.error(e);
    }
    throw new Error('Compilation errors found');
  }
}

const compiler = webpack(webpackConfig); // load webpack

if (isDev) {
  compiler.watch({}, compilerCallback);
} else {
  compiler.run(compilerCallback)
}


function getEnv(opt) {
  let result;
  if (opt.env === 'prod' || opt.env === 'production') {
    result = {
      env: 'prod',
      flags: [
        'build',
        'prod'
      ]
    }
  }

  if (opt.env === 'dev' || opt.env === 'development') {
    result = {
      env: 'dev',
      flags: []
    }
  }

  if (!result) {
    throw new Error('unsupported environment.');
  }

  if (opt.aot && result.flags) {
    result.flags.push('aot');
  }

  if (opt.sim) {
    result.sim = opt.sim;
  }

  return result;
}
