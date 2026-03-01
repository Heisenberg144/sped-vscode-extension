"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveField = resolveField;
const spedDictionary_1 = require("../data/spedDictionary");
function resolveField(registro, fieldIndex) {
    const register = spedDictionary_1.spedDictionary[registro];
    if (!register)
        return null;
    const field = Object.values(register.fields)[fieldIndex];
    if (!field)
        return null;
    return {
        registerDescription: register.description,
        fieldName: field.name,
        fieldDescription: field.description
    };
}
//# sourceMappingURL=fieldResolver.js.map