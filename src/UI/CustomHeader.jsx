import React from "react";
import Button from "./Button";
import Card from "./Card";

const CustomHeader = ({ buttonTitle, title, content }) => {
  return (
    <div className="flex flex-col justify-center bg-slate-200">
      <Button className="mt-24 self-center flex w-36 bg-white p-8">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            className="bi bi-arrow-right bg-blue-800 rounded-full p-2 flex"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </span>
        <span className="text-blue-800 p-1">{buttonTitle}</span>
      </Button>
      <Card className="mt-5 mb-8 text-center  ">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className=" font-medium mx-64 my-4 text-center">{content}</p>
      </Card>
    </div>
  );
};

export default CustomHeader;
