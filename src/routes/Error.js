import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  const { status, statusText } = error;
  return (
    <>
      <h1 className="font-bold text-5xl text-center font-mono pt-60">Error!</h1>
      <p className="text-3xl text-center font-semibold pt-10">
        Error: {status}
      </p>
      <p className="text-3xl text-center font-semibold pt-5">
        Error Status: {statusText}
      </p>
    </>
  );
};

export default Error;
