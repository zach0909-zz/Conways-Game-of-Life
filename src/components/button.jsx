import React from 'react';

const Button = props => {
    const btn_classes = props.status === "off" ? "btn btn-lg btn-primary" : "btn btn-lg btn-danger";
    const btn_text = props.status === "off" ? "STARTy" : "STOP";
    return ( 
        <button onClick={props.onClick} className={btn_classes}>{btn_text}</button>
     );
}
 
export default Button;