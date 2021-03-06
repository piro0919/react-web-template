"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var debounce = require("lodash.debounce");
var React = require("react");
var styles_1 = require("./styles");
require("./styles/global");
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
var ReactWebTemplate = /** @class */ (function (_super) {
    __extends(ReactWebTemplate, _super);
    function ReactWebTemplate(props) {
        var _this = _super.call(this, props) || this;
        var innerHeight = window.innerHeight;
        _this.footerRef = React.createRef();
        _this.onResizeWindow = _this.onResizeWindow.bind(_this);
        _this.state = {
            footerHeight: 0,
            windowHeight: innerHeight
        };
        return _this;
    }
    ReactWebTemplate.prototype.componentDidMount = function () {
        window.addEventListener('resize', debounce(this.onResizeWindow, 100));
        var current = this.footerRef.current;
        if (current && 'clientHeight' in current) {
            var clientHeight = current.clientHeight;
            this.setState({
                footerHeight: clientHeight
            });
        }
    };
    ReactWebTemplate.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.onResizeWindow);
    };
    ReactWebTemplate.prototype.onResizeWindow = function () {
        var innerHeight = window.innerHeight;
        this.setState({
            windowHeight: innerHeight
        });
    };
    ReactWebTemplate.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, contentClassName = _a.contentClassName, footer = _a.footer, footerClassName = _a.footerClassName, header = _a.header, headerClassName = _a.headerClassName, leftNav = _a.leftNav, leftNavClassName = _a.leftNavClassName, mainClassName = _a.mainClassName, rightNav = _a.rightNav, rightNavClassName = _a.rightNavClassName, wrapperClassName = _a.wrapperClassName;
        var _b = this.state, footerHeight = _b.footerHeight, windowHeight = _b.windowHeight;
        return (React.createElement(styles_1.default, { className: "react-web-template " + className, style: { height: windowHeight + "px" } },
            leftNav && (React.createElement("nav", { className: "nav-left " + leftNavClassName }, leftNav)),
            rightNav && (React.createElement("nav", { className: "nav-right " + rightNavClassName }, rightNav)),
            React.createElement("div", { className: "content " + contentClassName },
                React.createElement("div", { className: "wrapper " + wrapperClassName, style: { minHeight: windowHeight - footerHeight + "px" } },
                    header && React.createElement("header", { className: headerClassName }, header),
                    React.createElement("main", { className: mainClassName, role: "main" }, children)),
                footer && (React.createElement("footer", { className: footerClassName, ref: this.footerRef }, footer)))));
    };
    ReactWebTemplate.defaultProps = exports.reactWebTemplateDefaultProps;
    return ReactWebTemplate;
}(React.Component));
exports.default = ReactWebTemplate;
