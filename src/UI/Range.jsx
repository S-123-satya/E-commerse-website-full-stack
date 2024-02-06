import React, { useState } from "react";

const Range = () => {
  const [price, setPrice] = useState(500);
  return (
    <div class="flex m-2 text-xl rounded-full  bg-slate-200 p-2 gap-2 px-6">
      <span class="">Price</span>
      <input
        type="range"
        max={10000}
        defaultValue={500}
        min={100}
        onChange={(e) => setPrice(e.target.value)}
      />
      <span className="relative -top-5 text-blue-700 bg-slate-50 p-1 text-sm rounded-full">
        ${price}
      </span>
    </div>
  );
};

export default Range;
