import React from "react";
import Button from "../../UI/Button";
import logo from "../../assets/images/logo-light.png";
const Footer = () => {
  return (
    <>
      <div className="bg-[#0c146c] py-5 text-white flex justify-evenly h-[50vh]">
        <div className="w-44">
          <img className="h-16 my-5 w-64 mb-2" src={logo} alt="" />
          <p>
            Real estate can be bought, sold, leased, or rented, and can be a
            valuable investment opportunity. The value of real estate can be...
          </p>
        </div>
        <ul>
          <h2 className="text-xl mb-2">Quick Links</h2>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Properties </a>
          </li>
          <li>
            <a href="#">Agents </a>
          </li>
          <li>
            <a href="#">FAQs </a>
          </li>
          <li>
            <a href="#">Blog </a>
          </li>
        </ul>
        <ul>
          <h2 className="text-xl mb-2">Contact</h2>
          <li>{"(316)"} 555-0116</li>
          <li>example@mail.com</li>
          <li>31 Brandy Way, Sutton, SM2 6SE</li>
        </ul>
        <div className="w-64">
          <h2 className="text-xl mb-2">News Letters</h2>
          <p>Subscribe our newsletter to get our latest update & news</p>
          <span className="border flex rounded-full my-2 p-3">
            <input
              type="text"
              className="bg-inherit"
              placeholder="Email address"
            />
            <Button className="bg-green-500 font-medium -mx-14">Submit</Button>
          </span>
        </div>
      </div>
      <p className="bg-[#0c146c] text-white px-24">
        Copyright © 2024 Satya. Designed By Satya
      </p>
    </>
  );
};

export default Footer;
