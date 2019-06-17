import React from "react";

const Select = props => {
  const { name, title, value, handlechange, placeholder, options } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}> {title} </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handlechange}
        className="form-control"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(option => {
          return (
            <option key={option.name} value={option.id} label={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
