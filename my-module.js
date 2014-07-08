/**
 * @module //my-module
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class MyModule
 * @extends Montage
 */
exports.MyModule = Montage.specialize(/** @lends MyModule# */ {
    constructor: {
        value: function MyModule() {
            this.super();
        }
    }
});
