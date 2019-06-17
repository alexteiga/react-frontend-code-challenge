import React from "react";

const Button = props => {
  const { style, type, action, title } = props;
  return (
    <button
      style={style}
      className={
        type === "primary" ? "btn btn-primary" : "btn btn-secondary"
      }
      onClick={action}
    >
      {title}
    </button>
  );
};

export default Button;
