'use strict';

var visibility = false;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    refresh();
};

var refresh = function refresh() {
    var visibilityToggle = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        React.createElement(
            'p',
            null,
            visibility ? "hello I am showing up!" : ""
        )
    );

    ReactDOM.render(visibilityToggle, document.getElementById("app"));
};

refresh();
