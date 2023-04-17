import React from 'react';
import "./Button.css";

const Button = ({ text, onClick, className }) => {
  return (
    <div>
      <button onClick={onClick} className={`button ${className}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
