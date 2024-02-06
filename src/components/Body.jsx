import React from "react";
import FrontBody from "./FrontPage/Body";
import Category from "./Category/Category";
import FeaturedListProperty from "./FeatureListProperty/FeaturedListProperty";
import FAQuestions from "./FAOuestions/FAQuestions";
import Testimonials from "./Testimonials/Testimonials";
import Benifit from "./Benifits/Benifit";
import CalculateCost from "./CalculateCost/CalculateCost";
import Services from "./Services/Services";
const Body = () => {
  return (
    <>
      <FrontBody />
      <Category />
      <FeaturedListProperty />
      <Services />
      <CalculateCost />
      <Benifit />
      <Testimonials />
      <FAQuestions />
    </>
  );
};

export default Body;
