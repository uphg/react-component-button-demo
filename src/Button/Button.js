import React, { Component } from "react";
import './Button.css';

class Button extends Component {

  constructor() {
    super()
    this.state = {
      active: false,
      deltaX: 0,
      deltaY: 0
    }
    this.button = React.createRef()
  }
  
  render() {
    return (
      <button
        ref={this.button}
        className="emt-button"
        onClick={this.clickButton.bind(this)}
      >
        <span className="emt-button-slot">{this.props.children ? this.props.children : ''}</span>
        {this.showCircle()}</button>
    );
  }

  clickButton(event) {
    let { x, y } = this.button.current.getBoundingClientRect();
    let { clientX, clientY } = event;
    this.setState({
      active: true,
      deltaX: clientX - x - 5,
      deltaY: clientY - y - 5
    })
  }

  animationEnd() {
    this.setState({ active: false })
  }

  showCircle() {
    return this.state.active ? (
      <span
        className="emt-button-circle"
        onAnimationEnd={this.animationEnd.bind(this)}
        style={{ left: this.state.deltaX, top: this.state.deltaY }}  
      ></span>
    ) : ''
  }
}

export default Button;
