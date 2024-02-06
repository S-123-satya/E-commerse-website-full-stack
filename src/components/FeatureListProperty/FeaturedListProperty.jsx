import React from "react";
import FeaturedList from "./FeatureList";
import CustomHeader from "../../UI/CustomHeader";
import Button from "../../UI/Button";
const FeaturedListPropertyItems = [
  {
    icon: {},
    title: "Industrial",
    content: `There is no such thing as an "industrial home". Industrial`,
  },
  {
    icon: {},
    title: "House",
    content: "A house is a standalone building that is designed for",
  },
  {
    icon: {},
    title: "Family",
    content: "A family house is a type of residential building that is",
  },
  {
    icon: {},
    title: "Residential",
    content: "Residential refers to buildings or areas that are designed",
  },
  {
    icon: {},
    title: "Industial",
    content: `There is no such thing as an "industrial home". Industrial`,
  },
  {
    icon: {},
    title: "Commercial",
    content: "Commercial refers to activities, buildings, or areas",
  },
  {
    icon: {},
    title: "Villas",
    content: "A villa is a type of large, luxurious house that is typically",
  },
];
const buttonList = ["New York", "Mumbai", "Paris", "London"];
const FeaturedListProperty = () => {
  return (
    <div className="w-full text-center ">
      <CustomHeader
        buttonTitle={"Properties"}
        title={"Featured Listed Property"}
        content={
          "Real estate can be bought, sold, leased, or rented, and can be a valuable investment opportunity. The value of real estate can be..."
        }
      />
      <div className="flex justify-between text-blue-600 my-4 mx-24">
        <div className="">
          {buttonList.map((title) => (
            <Button className="m-2 bg-slate-200  hover:text-white hover:bg-blue-600">
              {title}
            </Button>
          ))}
        </div>
        <Button className="m-2 bg-slate-200  hover:text-white hover:bg-blue-600">
            View All</Button>
      </div>
      <div className="flex justify-center flex-wrap">
        {FeaturedListPropertyItems.map((item) => (
          <FeaturedList
            key={item.title}
            content={item.content}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedListProperty;
