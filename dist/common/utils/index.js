"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateUUID = GenerateUUID;
const uuid_1 = require("uuid");
function GenerateUUID() {
    const uuid = (0, uuid_1.v4)();
    return uuid.replaceAll('-', '');
}
//# sourceMappingURL=index.js.map