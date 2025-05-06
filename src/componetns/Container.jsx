import React from "react";
import DateForm from "./DateForm";
import Button from "./Button";
import Result from "./Result";

const Container = () => {
  return (
    <div className="bg-white rounded-3xl rounded-br-[150px] w-full max-w-[660px] min-h-[500px] p-12 shadow-lg">
      <DateForm />
      <Button />
      <Result />
    </div>
  );
};

export default Container;
