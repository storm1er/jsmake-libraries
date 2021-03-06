"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function iterate(iterable, func) {
    for (const value of await iterable) {
        await func(value);
    }
}
exports.default = iterate;
;
//# sourceMappingURL=iterate.js.map