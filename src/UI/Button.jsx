import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-blue-800 text-white px-5 py-2 ${props.className}  rounded-full`}
    >
      {props.children}
    </button>
  );
};

export default Button;
