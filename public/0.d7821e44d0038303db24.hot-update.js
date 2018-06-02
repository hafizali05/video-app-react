webpackHotUpdate(0,{

/***/ "./js/ClientApp.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ce = _react2.default.createElement;

var MyTitle = function MyTitle(props) {
    return ce('div', null, ce('h4', {
        id: props.id,
        style: { color: props.color }
    }, props.title));
};
var MyFirstComponent = function MyFirstComponent() {
    return ce('div', null, [ce('h1', { id: "hello-world-ccomponent" }, "hello world"), ce(MyTitle, { title: 'testing-title', id: 'title-component', color: 'red' }), ce(MyTitle, { title: 'testing-green', id: 'title-green', color: 'green' }), ce(MyTitle, { title: 'testing-YellowGreen', id: 'title-YellowGreen', color: 'YellowGreen' }), ce(MyTitle, { title: 'testing-GreenYellow', id: 'title-GreenYellow', color: 'GreenYellow' }), ce(MyTitle, { title: 'testing-title', id: 'title-component', color: 'red' }), ce(MyTitle, { title: 'testing-title', id: 'title-component', color: 'red' }), ce(MyTitle, { title: 'testing-title', id: 'title-component', color: 'red' }), ce(MyTitle, { title: 'testing-title', id: 'title-component', color: 'red' }), ce(MyTitle, { title: 'testing-title', id: 'title-component', color: 'red' })]);
};

(0, _reactDom.render)(ce(MyFirstComponent), document.getElementById('app'));
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ce, 'ce', '/Users/practice/WebstormProjects/dm-frontend/js/ClientApp.jsx');

    __REACT_HOT_LOADER__.register(MyTitle, 'MyTitle', '/Users/practice/WebstormProjects/dm-frontend/js/ClientApp.jsx');

    __REACT_HOT_LOADER__.register(MyFirstComponent, 'MyFirstComponent', '/Users/practice/WebstormProjects/dm-frontend/js/ClientApp.jsx');
}();

;

/***/ })

})