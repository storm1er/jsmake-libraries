"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const cp_1 = require("./cp");
const glob_1 = require("./glob");
const globParentOf_1 = require("./globParentOf");
const mkdirP_1 = require("./mkdirP");
async function cpP(str, dest) {
    const list = await glob_1.default(str);
    let createdDirectories = [];
    for (const item of list) {
        const globParent = globParentOf_1.default(str, item), relativePath = (globParent !== null) ? item.substring(globParent.length) : item, relativeBasePath = path.dirname(relativePath);
        if (createdDirectories.indexOf(relativeBasePath) === -1) {
            await mkdirP_1.default(path.join(dest, relativeBasePath));
            createdDirectories = [...createdDirectories, relativeBasePath];
        }
        const destFile = path.join(dest, relativePath);
        cp_1.default(item, destFile);
    }
}
exports.default = cpP;
//# sourceMappingURL=cpP.js.map