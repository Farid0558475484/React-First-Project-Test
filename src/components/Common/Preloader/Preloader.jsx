import React from "react";
import preloader from "./../../../img/preloader.gif";

const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt="some img" />
    </div>
  );
};

export default Preloader;
