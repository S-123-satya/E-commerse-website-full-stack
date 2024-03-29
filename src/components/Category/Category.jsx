import React from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import CategoryItem from "./CategoryItem";
import CustomHeader from "../../UI/CustomHeader";
const categoryItems = [
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
const Category = () => {
  return (
    <div className="w-full text-center ">
      <CustomHeader buttonTitle={"Category"} title={"Choose Our Category"} content={`Real estate can be bought, sold, leased, or rented, and can be a
          valuable investment opportunity. The value of real estate can be...`}/>
      <div className="flex justify-center flex-wrap">
        {categoryItems.map((item) => (
          <CategoryItem
            key={item.title}
            content={item.content}
            title={item.title}
            icon={item.icon}
          />
        ))}
        <button className="w-64 group bg-green-400 hover:bg-green-800 hover:text-white h-64 rounded-full">
          <h2 className="text-2xl font-semibold">25+</h2>
          <p className=" font-medium p-2">
            Explore properties and Invest width Confidence
          </p>
          <div className="w-14 mx-auto text-center py-3 group-hover:bg-orange-500 justify-center h-14 rounded-full bg-white">
            hi
          </div>
        </button>
      </div>
    </div>
  );
};

export default Category;
