import React, { Fragment } from "react";
import spinner from "./spinner.gif";
const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="spinner" style={{ width: "200px" }} className="responsive-img" />
    </Fragment>
  );
};

export default Spinner;
