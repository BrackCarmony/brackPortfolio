const React = require("react");
const ReactDOM = require("react-dom");
const AddItem = require('./AddItem');
const List = require('./List');
const ListContainer = require('./ListContainer');
const BubbleChart = require('./components/BubbleChart');
const D3VerticleDotDistribution = require('./components/D3VerticleDotDistribution');
const DCube = require('./components/DCube');
const About = require('./components/About');
const Projects = require('./components/Projects');

var side = 0;

const App = React.createClass({
  getInitialState(){
    return {
      selectedFace:0
    }
  },
  render (){
    return (<div>
      <ul style = {this.styles.linkCollection}>
        <a style = {this.styles.link} onClick={this.gotoFace.bind(null, 0)}>About</a>
        <a style = {this.styles.link} onClick={this.gotoFace.bind(null, 1)}>Charts</a>
        <a style = {this.styles.link} onClick={this.gotoFace.bind(null, 2)}>Projects</a>
        <a style = {this.styles.link} onClick={this.gotoFace.bind(null, 3)}>React Components</a>
        <a style = {this.styles.link} onClick={this.gotoFace.bind(null, 4)}>Interest</a>
        <a style = {this.styles.link} onClick={this.gotoFace.bind(null, 5)}>Social</a>
      </ul>
      <div>
        <DCube selected = {this.state.selectedFace}>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <img src = "http://lorempixel.com/50/50"/>
          <img src = "http://lorempixel.com/50/51"/>
          <img src = "http://lorempixel.com/50/52"/>
          <img src = "http://lorempixel.com/50/53"/>
          <img src = "http://lorempixel.com/50/54"/>
          <img src = "http://lorempixel.com/50/55"/>
          <img src = "http://lorempixel.com/51/50"/>
          <img src = "http://lorempixel.com/51/51"/>
          <img src = "http://lorempixel.com/51/52"/>
          <img src = "http://lorempixel.com/51/53"/>
          <img src = "http://lorempixel.com/51/54"/>
          <img src = "http://lorempixel.com/52/50"/>
          <img src = "http://lorempixel.com/52/51"/>
          <img src = "http://lorempixel.com/52/52"/>
          <img src = "http://lorempixel.com/52/53"/>
          <img src = "http://lorempixel.com/52/54"/>
          <img src = "http://lorempixel.com/53/55"/>
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>E</div>
          <div>F</div>
          <div>G</div>
          <div>H</div>
          <div>I</div>
          <div>J</div>
          <div>K</div>
          <div>L</div>
          <div>M</div>
          <div>N</div>
          <div>O</div>
          <div>P</div>
          <div>Q</div>

          <img style = {{width:100}}  src = "http://wdl.tmimgcdn.com/img_articles/17101/step2.gif" / >
        </DCube>
      </div>
       </div>)
  },
  gotoFace(face){
    this.setState({selectedFace:face});
  },
  styles:{
    linkCollection:{
      display:'flex'
    },
    link:{
      flex:1,
      display:"inline",
      cursor:"pointer"
    }
  },
  randomSide(){
    this.setState({selectedFace: Math.floor(Math.random()*6)})
  }
});

ReactDOM.render(
  <App />,document.getElementById('app')
);
/*<About />
<ListContainer />
<Projects />*/
