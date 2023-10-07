import React from "react";
import "./Toys.css";
import fx from "./PipelineImg/fx.png";
import sif from "./PipelineImg/sif.png";
import zom from "./PipelineImg/zom.png";
import at from "./PipelineImg/asset.png";

function Toys() {
  return (
    <div className="imgcontainer">
      <div className="imgcard">
        <img src={at} alt="Asset Tracking" />
      </div>
      <div className="imgcard">
        <img src={sif} alt="Sign-in Fraud" />
      </div>
      <div className="imgcard">
        <img src={zom} alt="Restaurant Hyperpersonalization" />
      </div>
      <div className="imgcard">
        <img src={fx} alt="RT Stock Prices" />
      </div>
    </div>
  );
}

export default Toys;
