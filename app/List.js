const React = require('react');

module.exports = React.createClass({
  render(){

    let listItems =  this.props.items.map((item, index) => {
      return (
        <li key = {index+"str"}  className = "list-group-item" style = {this.styles.listGroup}>
          <span style={this.styles.todoItem}>
          {item}
          </span>
          <span style = {this.styles.removeItem} onClick = {this.props.remove.bind(null, index)}>
            X
          </span>
        </li>
      )
    })//*/;

    return (
      <ul style = {this.styles.uList}>
        {listItems}
      </ul>
    )
  },
  styles: {
    uList:{
      paddingLeft:0,
      listStyleType:"none"
    },
    listGroup:{
      margin:'5px 0',
      borderRadius:5,
      position:'relative'
    },
    removeItem:{
      fontSize:20,
      float:'left',
      position:'absolute',
      top:-1,
      left:0,
      cursor:"pointer",
      color:"rgb(222,79,79)"
    },
    todoItem:{
      paddingLeft:20,
      fontSize:17
    }
  }
})
