function toCamelCase(key) {
  return key.split('-').map( (k, i) => i === 0 ? k : k[0].toUpperCase() + k.substr(1).toLowerCase() ).join('');
}

const mocks = require.context(__dirname + '/tables', false, /\.json$/);

export const DB = mocks.keys().reduce( (db, key) => {
  const name = toCamelCase(key).match(/(\w+)\.json$/)[1];

  db[name] = mocks(key);
  return db;
}, {});
