"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeFromArray_1 = require("../removeFromArray");
test('removeFromArray', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const val1 = 2;
    const val2 = 3;
    const result = removeFromArray_1.default(arr1, val1, val2);
    expect(result).not.toBe(arr1);
    expect(result).toHaveLength(3);
    expect(result).toEqual([1, 4, 5]);
});
//# sourceMappingURL=removeFromArray.js.map