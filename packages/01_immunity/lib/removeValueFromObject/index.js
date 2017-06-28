"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function removeValueFromObject(instance, ...values) {
    return Object.keys(instance).reduce((obj, itemKey) => {
        if (values.indexOf(instance[itemKey]) === -1) {
            return assign_1.assign({}, obj, {
                [itemKey]: instance[itemKey]
            });
        }
        return obj;
    }, {});
}
exports.removeValueFromObject = removeValueFromObject;
exports.default = removeValueFromObject;
//# sourceMappingURL=index.js.map