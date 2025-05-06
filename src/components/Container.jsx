import React from "react";
import DateForm from "./DateForm";
import Button from "./Button";
import Result from "./Result";

const Container = () => {
  return (
    <div className="bg-white rounded-3xl rounded-br-[100px] md:rounded-br-[150px] w-[92%] md:w-full max-w-[750px] min-h-[480px] md:min-h-[550px] p-5 md:p-12 shadow-lg">
      <DateForm />
      <Button />
      <Result />
    </div>
  );
};

export default Container;
