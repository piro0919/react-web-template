"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Div = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  > .nav-left,\n  > .nav-right {\n    height: 100vh;\n    overflow-y: auto;\n    position: fixed;\n    top: 0;\n  }\n\n  > .nav-left {\n    right: 100%;\n  }\n\n  > .nav-right {\n    left: 100%;\n  }\n\n  > .content {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow-y: scroll;\n    width: 100%;\n\n    > .wrapper {\n      display: flex;\n      flex-direction: column;\n      flex-grow: 1;\n\n      > main {\n        flex-grow: 1;\n      }\n    }\n  }\n"], ["\n  > .nav-left,\n  > .nav-right {\n    height: 100vh;\n    overflow-y: auto;\n    position: fixed;\n    top: 0;\n  }\n\n  > .nav-left {\n    right: 100%;\n  }\n\n  > .nav-right {\n    left: 100%;\n  }\n\n  > .content {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow-y: scroll;\n    width: 100%;\n\n    > .wrapper {\n      display: flex;\n      flex-direction: column;\n      flex-grow: 1;\n\n      > main {\n        flex-grow: 1;\n      }\n    }\n  }\n"])));
exports.default = Div;
var templateObject_1;
