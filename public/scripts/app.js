"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const obj = {
//     name: 'Jojo',
//     getName() {
//         return this.name;
//     }
// };

// const func = function() {
//     console.log(this);
// }
// func(); //returns undefined, because functions have no 'this' property

// const getName = obj.getName.bind({ name: "newName??" });

// console.log("obj.getName():", getName());

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: [],
            selectedOption: ''
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            //localStorage: fetch data
            try {
                var json = localStorage.getItem("options");
                var options = JSON.parse(json); //if error occurs here
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                //do nothing -> keep this.state.options as null
            }
            console.log("fetching data: componentDidMount");
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            //localStorage: save data
            console.log("this.state.options: ", this.state.options);
            if (prevState.options.length !== this.state.options.length) {
                console.log("prevState.options: ", prevState.options);
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);

                console.log("saving data: componentDidUpdate");
            };
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log('componentWillUnmount');
        }
    }, {
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: [],
                    selectedOption: ''
                };
            });
        }
    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(option) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (item) {
                        return item !== option;
                    })
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var optionNum = Math.floor(Math.random() * this.state.options.length);
            var selectedOption = this.state.options[optionNum];
            this.setState(function () {
                return { selectedOption: selectedOption };
            });
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return 'You have not entered a valid option';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option has already been entered, please try again';
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option),
                    selectedOption: ''
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var subtitle = "Have your computer make decisions for you";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption,
                    selectedOption: this.state.selectedOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

;

// IndecisionApp.defaultProps = { //no longer needed because using localStorage
//     options: []
// };

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            "What should I do?"
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleDeleteOptions },
            "Remove All"
        ),
        React.createElement(
            "p",
            null,
            "The number of options is ",
            props.options.length
        ),
        props.options.length === 0 ? React.createElement(
            "p",
            null,
            "Please add an option to get started"
        ) : React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "Your options are:"
            ),
            React.createElement(
                "ol",
                null,
                props.options.map(function (option) {
                    return React.createElement(Option, {
                        key: option,
                        optionText: option,
                        handleDeleteOption: props.handleDeleteOption
                    });
                })
            )
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "li",
            null,
            props.optionText,
            React.createElement(
                "button",
                {
                    onClick: function onClick(e) {
                        props.handleDeleteOption(props.optionText);
                    }
                },
                "Delete Option"
            )
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();

            var input = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(input);
            this.setState(function () {
                return { error: error };
            });
            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    { style: { color: 'red' } },
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Submit Option"
                    )
                ),
                this.props.selectedOption && React.createElement(
                    "p",
                    { style: { color: 'blue', fontWeight: 'bold' } },
                    "You should do ",
                    this.props.selectedOption
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

;

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(React.createElement(IndecisionApp, { options: ['Devils den', 'Second district'] }), document.getElementById("app"));
