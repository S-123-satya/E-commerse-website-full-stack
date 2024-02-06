import React from "react";

const SelectInput = () => {
  return (
    <div class="flex m-2 text-xl rounded-full bg-slate-200 p-2 gap-2 px-6">
      <span className="pt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-house-heart"
          viewBox="0 0 16 16"
        >
          <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982" />
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
        </svg>{" "}
      </span>
      <select
        class="after:border-none bg-inherit text-sm"
        aria-label="Default select example"
      >
        <option selected="">For Rent</option>
        <option value="1">For Sale</option>
      </select>
    </div>
  );
};

export default SelectInput;
