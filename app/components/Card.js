const React = require('react');

module.exports = React.createClass({
  getInitialState(){
     let tempState = {
      xTranslate:Math.random()*400-200,
      yTranslate:Math.random()*400-200,
      zTranslate:Math.random()*400-200,
      xRotate:Math.floor(Math.random()*360) + 'deg',
      yRotate:Math.floor(Math.random()*360) + 'deg',
      zRotate:Math.floor(Math.random()*360) + 'deg'
    }
    //tempState.transform = "translate3d(" + 12 +"," + 13 + "," + 14+ ")"
    return tempState;
  },
  render(){
    return (
      <div style = { {
        display: 'block',
        position: 'absolute',
        backfaceVisibility:'visible'//,
        //transform:this.state.transform
      }}>
        {this.props.children}
      </div>
    )
  }
})
