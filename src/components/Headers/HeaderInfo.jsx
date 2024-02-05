import React from "react";

const HeaderInfo = ({ icon, title, content }) => {
  return (
    <div className="flex ">
      <span className={`text-center my-3 p-3 ${icon.color} rounded-full mr-5`}>
        <svg className="text-center" {...icon}>
          <path d={icon.d} />
        </svg>
      </span>
      <div className="m-2">
        <h5 className="text-sm">{title}</h5>
        <h2>{content}</h2>
      </div>
    </div>
  );
};

export default HeaderInfo;
