import React, { useState } from "react";
import { SolidButtons } from "./btn";
import "./style.css";

const BGchanger = () => {
   const [color , setColor ]= useState("rgb(68 64 60)");
   
  return (
    <div className="  w-screen h-screen"  style={{backgroundColor : color}}>
      <div className="bg-neutral-300" >
        <div className="  flex justify-evenly items-center">
          <SolidButtons  btncolour={"orange"} />
          <SolidButtons btncolour={"red"} />
          <SolidButtons btncolour={"green"} />
          <SolidButtons btncolour={"purple"} />
          <SolidButtons btncolour={"blue"} />
          <SolidButtons btncolour={"violet"} />
          <SolidButtons btncolour={"indigo"} />
          <SolidButtons btncolour={"rgb(68 64 60)"} />
        </div>
      </div>
    </div>
  );
};

export default BGchanger;
