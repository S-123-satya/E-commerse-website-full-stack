import React from "react";

const Card = (props) => {
  return (
    <div className={`rounded-lg bg-slate-50 ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
