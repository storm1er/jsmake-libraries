"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function splitObject(instance, n) {
    const keys = Object.keys(instance), offset = (n >= 0) ? n : keys.length + n;
    let index = 0;
    return keys.reduce((obj, itemKey) => {
        if (index < offset) {
            index += 1;
            return {
                items: assign_1.assign({}, obj.items, { [itemKey]: instance[itemKey] }),
                remainder: obj.remainder
            };
        }
        return {
            items: obj.items,
            remainder: assign_1.assign({}, obj.remainder, { [itemKey]: instance[itemKey] })
        };
    }, {
        items: {},
        remainder: {}
    });
}
exports.splitObject = splitObject;
exports.default = splitObject;
//# sourceMappingURL=index.js.map