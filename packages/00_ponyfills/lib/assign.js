"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assignPolyfill(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        for (var _b = 0, _c = Object.getOwnPropertyNames(source); _b < _c.length; _b++) {
            var key = _c[_b];
            target[key] = source[key];
        }
    }
    return target;
}
exports.assignPolyfill = assignPolyfill;
var assign = (Object.hasOwnProperty('assign') ? Object['assign'] : assignPolyfill);
exports.default = assign;
//# sourceMappingURL=assign.js.map