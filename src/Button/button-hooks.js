// 未完成
import React, { useState } from "react";
import './Button.css';

function Button(props) {
  const { active, setActive } = useState(false)
  const { position, setPosition } = useState({ deltaX: 0, deltaY: 0, })
  const button = React.createRef();
  const clickButton = (event) => {
    let { x, y } = button.current.getBoundingClientRect();
    let { clientX, clientY } = event;
    setActive(true)
    setPosition({
      deltaX: clientX - x,
      deltaY: clientY - y
    })
  }
  const animationEnd = () => {
    setActive(false)
  }
  const showCircle = (state) => {
    
  }
  return (
    <button
      ref={button}
      className="emt-button"
      onClick={clickButton}
    >{props.children + showCircle(active)}</button>
  );
}

export default Button;
