import React from "react";
import "./Toys.css";
import fx from "./PipelineImg/fx.png";
import sif from "./PipelineImg/sif.png";
import zom from "./PipelineImg/zom.png";
import at from "./PipelineImg/asset.png";
import gh from "./gh.webp";

function Toys() {
  return (
    <div className="imgcontainer">
      <div className="imgcard">
        <div className="imgcard-top">
          <div class="content-container">
            Last Mile real-time IoT Asset Tracking i.e. driver data visibility &
            ETA to destination
            <a
              href="https://example.com"
              target="_blank"
              class="button-link"
              rel="noreferrer"
            >
              <img src={gh} alt="repo link" class="button-image" />
            </a>
          </div>
        </div>
        <div className="imgcard-bottom">
          <img src={at} alt="Asset Tracking" />
        </div>
      </div>
      <div className="imgcard">
        <div className="imgcard-top">
          <p>
            Real-time Sign-In Fraud Detection based on Network & Digital Body
            Language of User
          </p>
          <button>Button</button>
        </div>
        <div className="imgcard-bottom">
          <img src={sif} alt="Sign-in Fraud" />
        </div>
      </div>
      <div className="imgcard">
        <div className="imgcard-top">
          <p>
            Recsys pipeline to recommend Restaurants based on live location,
            order traffic & order history
          </p>
          <button>Button</button>
        </div>
        <div className="imgcard-bottom">
          <img src={zom} alt="Restaurant Hyperpersonalization" />
        </div>
      </div>
      <div className="imgcard">
        <div className="imgcard-top">
          <p>
            Converts live Stock Price of any Company from USD to INR using
            real-time FX rates
          </p>
          <button>Button</button>
        </div>
        <div className="imgcard-bottom">
          <img src={fx} alt="RT Stock Prices" />
        </div>
      </div>
    </div>
  );
}

export default Toys;
