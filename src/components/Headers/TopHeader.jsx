import React from "react";
import Button from "../../UI/Button";
import HeaderIcon from "./HeaderIcon";
import HeaderInfo from "./HeaderInfo";
const infos = [
  {
    icon: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      color: "bg-blue-700 text-white",
      fill: "currentColor",
      className: "bi bi-telephone-outbound",
      viewBox: "0 0 16 16",
      d: "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5",
    },
    title: "Free call",
    content: "+123145354",
  },
  {
    icon: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      color: "bg-green-600",
      fill: "currentColor",
      className: "bi bi-envelope",
      viewBox: "0 0 16 16",
      d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z",
    },
    title: "Online Support",
    content: "satya@gmail.com",
  },
  {
    icon: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      color: "bg-orange-600",
      fill: "currentColor",
      className: "bi bi-geo-alt-fill",
      viewBox: "0 0 16 16",
      d: "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6",
    },
    title: "Online Location",
    content: "Delhi, India",
  },
];
const TopHeader = () => {
  return (
    <div className="flex m-2 p-2 justify-between">
      <span className="flex">
        <HeaderIcon />
        <button>
          <span className="text-blue-600 text-2xl">PLACE</span>
          <span className="text-orange-600 text-2xl">WISE</span>
        </button>
      </span>
      {infos.map((info) => (
        <HeaderInfo
          key={info.title}
          title={info.title}
          icon={{ ...info.icon }}
          content={info.content}
        />
      ))}
      <Button>Submit Property</Button>
    </div>
  );
};

export default TopHeader;
