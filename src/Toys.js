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
        <div className="imgcard-top">
          <p>Description for Asset Tracking</p>
          <button>Button for Asset Tracking</button>
        </div>
        <div className="imgcard-bottom">
          <img src={at} alt="Asset Tracking" />
        </div>
      </div>
      <div className="imgcard">
        <div className="imgcard-top">
          <p>Description for Sign-in Fraud</p>
          <button>Button for Sign-in Fraud</button>
        </div>
        <div className="imgcard-bottom">
          <img src={sif} alt="Sign-in Fraud" />
        </div>
      </div>
      <div className="imgcard">
        <div className="imgcard-top">
          <p>Description for Restaurant Hyperpersonalization</p>
          <button>Button for Restaurant Hyperpersonalization</button>
        </div>
        <div className="imgcard-bottom">
          <img src={zom} alt="Restaurant Hyperpersonalization" />
        </div>
      </div>
      <div className="imgcard">
        <div className="imgcard-top">
          <p>Description for RT Stock Prices</p>
          <button>Button for RT Stock Prices</button>
        </div>
        <div className="imgcard-bottom">
          <img src={fx} alt="RT Stock Prices" />
        </div>
      </div>
    </div>
  );
}

export default Toys;
