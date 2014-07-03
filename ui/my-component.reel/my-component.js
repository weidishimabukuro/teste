/**
 * @module ui/my-component.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class MyComponent
 * @extends Component
 */
exports.MyComponent = Component.specialize(/** @lends MyComponent# */ {
    constructor: {
        value: function MyComponent() {
            this.super();
        }
    }
});
