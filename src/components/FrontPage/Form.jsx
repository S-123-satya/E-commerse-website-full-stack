import React from "react";
import SelectInput from "../../UI/SelectInput";
import Range from "../../UI/Range";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const Form = () => {
  return (
    <Card className="m-4 relative z-20 p-4 mx-10 shadow bg-white px-8">
      <form className="flex justify-center">
        <SelectInput />
        <SelectInput />
        <SelectInput />
        <Range />
        <Button>Search</Button>
      </form>
    </Card>
  );
};

export default Form;
