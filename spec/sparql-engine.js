const newEngine = require(__dirname + '/../').newEngine;
module.exports = require('./sparql-engine-base.js')(newEngine());
