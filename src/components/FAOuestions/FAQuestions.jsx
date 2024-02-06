import React from "react";
import CustomHeader from "../../UI/CustomHeader";
import FAQAccordian from "./FAQAccordian";

const FAQuestions = () => {
  return (
    <div>
      <CustomHeader
        buttonTitle={"FAQs"}
        title={"If you have any questions, we have the answers"}
        content={
          "Real estate can be bought, sold, leased, or rented, and can be a valuable investment opportunity. The value of real estate can be"
        }
      />
      <div className=" w-3/5 mx-auto flex flex-col justify-center">
        <FAQAccordian />
      </div>
    </div>
  );
};

export default FAQuestions;
