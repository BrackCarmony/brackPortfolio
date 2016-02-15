var React = require("react");
var ReactDOM = require("react-dom");
var AddItem = require('./AddItem');
var List = require('./List');
var ListContainer = require('./ListContainer');
var DCube = require('./components/DCube');
var About = require('./components/About');
var Projects = require('./components/Projects');
var side = 0;
var App = React.createClass({
    getInitialState: function () {
        return {
            selectedFace: 0
        };
    },
    render: function () {
        return style = { this: .styles.linkCollection } >
            style;
        {
            this.styles.link;
        }
        onClick = { this: .gotoFace.bind(null, 0) } > About < /a>
            < a;
        style = { this: .styles.link };
        onClick = { this: .gotoFace.bind(null, 1) } > Charts < /a>
            < a;
        style = { this: .styles.link };
        onClick = { this: .gotoFace.bind(null, 2) } > Projects < /a>
            < a;
        style = { this: .styles.link };
        onClick = { this: .gotoFace.bind(null, 3) } > React;
        Components < /a>
            < a;
        style = { this: .styles.link };
        onClick = { this: .gotoFace.bind(null, 4) } > Interest < /a>
            < a;
        style = { this: .styles.link };
        onClick = { this: .gotoFace.bind(null, 5) } > Social < /a>
            < /ul>
            < div >
            selected;
        {
            this.state.selectedFace;
        }
         >
            /div>
            < div > /div>
            < div > /div>
            < div > /div>
            < div > /div>
            < div > /div>
            < img;
        selected = { this: .state.selectedFace == 1 };
        style = {};
        {
            'maxWidth';
            '60px', 'maxHeight';
            '60px';
        }
    }, src: src }, {}, { 'maxWidth': '60px', 'maxHeight': '60px' });
src = "images/ember-tomster.svg" /  >
    style;
{
    {
        'maxWidth';
        '60px', 'maxHeight';
        '60px';
    }
}
src = "images/firebase.svg" /  >
    style;
{
    {
        'maxWidth';
        '60px', 'maxHeight';
        '60px';
    }
}
src = "images/nodejs-icon.svg" /  >
    style;
{
    {
        'maxWidth';
        '60px', 'maxHeight';
        '60px';
    }
}
src = "images/Logo_D3.svg.png" /  >
    style;
{
    {
        'maxWidth';
        '60px', 'maxHeight';
        '60px';
    }
}
src = "images/square.jpg" /  >
    style;
{
    {
        'maxWidth';
        '60px', 'maxHeight';
        '60px';
    }
}
src = "images/react.svg" /  >
    style;
{
    {
        'maxWidth';
        '60px', 'maxHeight';
        '60px';
    }
}
src = "images/javascript.svg" /  >
    style;
{
    {
        'maxWidth';
        '60px', 'maxHeight';
        '60px';
    }
}
src = "images/visual-basic.svg" /  >
    style;
{
    {
        'maxWidth';
        '60px', 'maxHeight';
        '60px';
    }
}
src = "images/java-4.svg" /  >
    src;
"http://lorempixel.com/51/52" /  >
    src;
"http://lorempixel.com/51/53" /  >
    src;
"http://lorempixel.com/51/54" /  >
    src;
"http://lorempixel.com/52/50" /  >
    src;
"http://lorempixel.com/52/51" /  >
    src;
"http://lorempixel.com/52/52" /  >
    src;
"http://lorempixel.com/52/53" /  >
    src;
"http://lorempixel.com/52/54" /  >
    src;
"http://lorempixel.com/53/55" /  >
    AngularJS < /div>
    < div > Brack < /div>
    < div > Carmony < /div>
    < div > D3 < /div>
    < div > Firebase < /div>
    < div > React < /div>
    < div > EmberJS < /div>
    < div > NodeJS < /div>
    < div > C++ < /div>
    < div > VBA < /div>
    < div > Java < /div>
    < div > Javascript < /div>
    < /DCube>
    < /div>
    < /div>);
gotoFace(face);
{
    this.setState({ selectedFace: face });
}
styles: {
    linkCollection: {
        display: 'flex';
    }
    link: {
        flex: 1,
            display;
        "inline",
            cursor;
        "pointer";
    }
}
randomSide();
{
    this.setState({ selectedFace: Math.floor(Math.random() * 6) });
}
;
ReactDOM.render(/>,document.getElementById('app'));
