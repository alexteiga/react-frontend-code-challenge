import React from "react";

const Input = props => {
  const { name, title, inputtype, value, handlechange, placeholder } = props;
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {title}
      </label>
      <input
        className="form-control"
        id={name}
        name={name}
        type={inputtype}
        value={value}
        onChange={handlechange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
