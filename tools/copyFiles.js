/* eslint-disable */
var ncp = require('ncp').ncp;
var path = require('path');

ncp.limit = 16;

const source = path.resolve(__dirname, '..', 'src', 'lib', 'styles');

const destination = path.resolve(__dirname, '..', 'dist', `styles`);

ncp(source, destination, function(err) {
  if (err) {
    console.error(err);
  }
});
