import React from "react";

const Button = (props) => {
  return (
    <button
      className={`  px-5 py-2 ${props.className}  text-blue-700 rounded-full`}
    >
      {props.children}
    </button>
  );
};

export default Button;
