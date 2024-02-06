import React from "react";
import CustomHeader from "../../UI/CustomHeader";

const CalculateCost = () => {
  return (
    <div>
      <CustomHeader
        buttonTitle={"Calculate"}
        title={"Calculate the cost of your property"}
        content={
          "Are you curious about the current market value of your property? Our innovative online tool can help! With just a few clicks, you can get an instant"
        }
      />
    </div>
  );
};

export default CalculateCost;
