'use strict';

module.exports.hello = function (input, context, callback) {
  input.messages = ['A capuccino please!'];

  callback(null, input);

};
