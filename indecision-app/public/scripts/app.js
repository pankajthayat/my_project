"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle() {
        _classCallCheck(this, VisibilityToggle);

        return _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).apply(this, arguments));
    }

    _createClass(VisibilityToggle, [{
        key: "showDetails",
        value: function showDetails() {
            console.log("showDetails");

            return React.createElement(
                "h1",
                { key: "x" },
                "hey here is the details: i am a computer"
            );
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Visibility Toggle"
                ),
                React.createElement(
                    "button",
                    { onClick: this.showDetails },
                    "showDetail"
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

var vt = React.createElement(VisibilityToggle, null);
ReactDOM.render(vt, document.getElementById("app"));

// console.log("app is running")

// const showDetail=()=>
// {
//     console.log("details");
//     return <p>here is the Details</p>
// }

// const template=(
//     <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={showDetail}>Show Details</button>
//     </div>
// )


// const appRoot=document.getElementById("app");
// ReactDOM.render(template,appRoot);
