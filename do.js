console.log();
console.log("Initial array was: %o", require('./init_arr'));

var functions = require('./arr_func');
var new_arr = new functions.arr_func(require('./init_arr'));

new_arr.add(require('./add_arr'));
new_arr.del(require('./rm_arr'));

console.log("We add: %o", require('./add_arr'));
console.log("We removed: %o", require('./rm_arr'));
console.log("After applying %o", new_arr);
console.log();
console.log("Kindly change *_arr.js files if you want try your own array");
console.log();
