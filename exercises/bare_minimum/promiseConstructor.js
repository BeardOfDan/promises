/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

// var fs = require('fs');
// var request = require('request');
var Promise = require('bluebird');

var fs = Promise.promisifyAll(require('fs'));
var request = Promise.promisifyAll(require('request'));

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return fs.readFileAsync(filePath, 'utf8')
    .then(function(file) {
      return (file.slice(0, file.indexOf('\n')));
    });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return request.getAsync(url)
    .then(function(response, body) {
      return response.statusCode;
    }); 
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
