'use strict';

function NoMoneyError(message) {
    this.name = "NoMoneyError";
    this.message = message;
}
NoMoneyError.prototype = new Error();

module.exports.hello = function (input, context, callback) {
    if(input.money < 3) callback(new NoMoneyError("Arg!!!! Not enough money!"));
    else {
        input.messages.push('Here are your ' + input.money + '€!');
        callback(null, input);
    }
};