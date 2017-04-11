'use strict';

module.exports.hello = function (input, context, callback) {
    const output = {
        messages: ['Thank you for the coffee!'],
        input: input
    };

    callback(null, output);
};