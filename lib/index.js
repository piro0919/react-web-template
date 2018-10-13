"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_helmet_1 = require("react-helmet");
var styles_1 = require("./styles");
exports.reactWebTemplateDefaultProps = {
    children: null,
    className: '',
    contentClassName: '',
    footer: null,
    footerClassName: '',
    header: null,
    headerClassName: '',
    leftNav: null,
    leftNavClassName: '',
    mainClassName: '',
    rightNav: null,
    rightNavClassName: '',
    wrapperClassName: ''
};
var ReactWebTemplate = function (_a) {
    var children = _a.children, className = _a.className, contentClassName = _a.contentClassName, footer = _a.footer, footerClassName = _a.footerClassName, header = _a.header, headerClassName = _a.headerClassName, leftNav = _a.leftNav, leftNavClassName = _a.leftNavClassName, mainClassName = _a.mainClassName, rightNav = _a.rightNav, rightNavClassName = _a.rightNavClassName, wrapperClassName = _a.wrapperClassName;
    return (React.createElement(styles_1.default, { className: "react-web-template " + className },
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("style", { type: "text/css" }, "\nhtml {\n  overflow: hidden;\n}\n\nbody {\n  margin: 0;\n}\n            ")),
        leftNav && React.createElement("nav", { className: "nav-left " + leftNavClassName }, leftNav),
        rightNav && (React.createElement("nav", { className: "nav-right " + rightNavClassName }, rightNav)),
        React.createElement("div", { className: "content " + contentClassName },
            React.createElement("div", { className: "wrapper " + wrapperClassName },
                header && React.createElement("header", { className: headerClassName }, header),
                React.createElement("main", { className: mainClassName, role: "main" }, children)),
            footer && React.createElement("footer", { className: footerClassName }, footer))));
};
ReactWebTemplate.defaultProps = exports.reactWebTemplateDefaultProps;
exports.default = ReactWebTemplate;
