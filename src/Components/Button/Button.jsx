import React from 'react';
import "./Button.css";

const Button = ({ text, onClick, className}) => {
  return (
    <div>
      <button onClick={onClick} className={`button ${className}`} style={{ color: 'white' , fontSize: '20px' }}>
        {text}
      </button>
    </div>
  );
};

export default Button;
