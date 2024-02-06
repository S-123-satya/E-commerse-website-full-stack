import React from "react";
import Card from "../../UI/Card";
import png from "./../../assets/images/emoji-transportation.256x230.png";
import Button from "../../UI/Button";

const CategoryItem = ({ title, content }) => {
  return (
    <Card className="m-2 w-64 group bg-slate-100 border-1 rounded-2xl  border-slate-300  hover:bg-blue-700">
      <div className="p-4 group-hover:text-white group-hover:rounded-2xl group-hover:bg-blue-700">
        <span class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="60"
            viewBox="0 0 24 24"
            width="60"
          >
            <path d="m0 0h24v24h-24z" fill="none" />
            <path d="m20.57 10.66c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66l-1.43 4.11.01 5.51c0 .38.31.72.69.72h.62c.38 0 .68-.38.68-.76v-1.24h8v1.24c0 .38.31.76.69.76h.61c.38 0 .69-.34.69-.72l.01-1.37v-4.14zm-8.16.34h7.19l1.03 3h-9.25zm-.41 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
            <path d="m14 9h1v-6h-8v5h-5v13h1v-12h5v-5h6z" />
            <path d="m5 11h2v2h-2z" />
            <path d="m10 5h2v2h-2z" />
            <path d="m5 15h2v2h-2z" />
            <path d="m5 19h2v2h-2z" />
          </svg>
        </span>
        <h5 class="mt-5 text-2xl font-semibold"> {title} </h5>
        <p class="mt-3"> {content} </p>
      </div>
      <div className="bg-slate-200 group-hover:rounded-b-2xl rounded-b-2xl group-hover:text-white group-hover:bg-blue-900 h-16">
        <button className="w-full bg-none rounded-t-sm mx-auto py-5">
          Read More
        </button>
      </div>
    </Card>
  );
};

export default CategoryItem;
