const React = require("react");
const ReactDOM = require("react-dom");
const AddItem = require('./AddItem');
const List = require('./List');
const ListContainer = require('./ListContainer');
const BubbleChart = require('./components/BubbleChart');

const App = React.createClass({
  render (){
    return (<div>
      Hello World
      <ListContainer></ListContainer>
      <BubbleChart></BubbleChart>
       </div>)
  }
});

ReactDOM.render(
  <App />,document.getElementById('app')
);
