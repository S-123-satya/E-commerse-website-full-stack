import React from "react";
import img1 from "./../../assets/images/primary-hero-img-1.jpg";
import img2 from "./../../assets/images/primary-hero-img-2.jpg";
import png1 from "./../../assets/images/primary-hero-el-4.png";
import png2 from "./../../assets/images/primary-hero-el-3.png";
import Form from "./Form";
import Card from "../../UI/Card";

const Body = () => {
  return (
    <div className="bg-slate-100 h-[97vh]">
      <div className="flex justify-between">
        <div className="flex flex-col h-96 mt-24">
          <img className="text-center w-24" src={png2} alt="png2"></img>
          <img className="h-full" src={img2} alt="img2"></img>
        </div>
        <div className="flex  h-96">
          <img className="w-24 h-24 mt-10" src={png1} alt="png1"></img>
          <img src={img1} alt="img1"></img>
        </div>
      </div>
      <Card className=" text-center -mt-72 z-10 ">
        <h2 className="text-4xl font-semibold">
          Easy Way to Find a Perfect Property
        </h2>
        <p className="text-xl font-medium mx-96 my-4 w-[450px]">
          Explore vast property listings by category with our user-friendly
          search. Find your perfect match!
        </p>
        <Form />
      </Card>
    </div>
  );
};

export default Body;
