import React from 'react';
import './AuthInput.css';

const AuthInput = ({ type, placeholder, value }) => {
  return (
    <input
      className="auth-input"
      type={type}
      placeholder={placeholder}
      value={value}
    />
  )
};

export default AuthInput
