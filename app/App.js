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
          <About />
          <ListContainer />
          <Projects />
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div> I be a bunch of text </div>
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
