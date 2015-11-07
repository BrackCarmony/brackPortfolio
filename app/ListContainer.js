const React = require('react');
const AddItem = require("./AddItem");
const List = require("./List");

module.exports = React.createClass({
  getInitialState (){
    return {
      list:["1","2","3"]
    }
  },
  handleAddItem(newItem){
    this.setState({
      list:this.state.list.concat([newItem])
    });
  },
  handleRemoveItem (index){
    var newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list:newList
    })
  },
  render(){
    return (
      <div>
        <AddItem add = {this.handleAddItem}></AddItem>
        <List items = {this.state.list} remove = {this.handleRemoveItem}></List>
      </div>
    )
  }
})
