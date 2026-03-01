"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const hoverProvider_1 = require("./providers/hoverProvider");
function activate(context) {
    console.log('SPED Fiscal Tools ativada ');
    (0, hoverProvider_1.registerHoverProvider)(context);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map