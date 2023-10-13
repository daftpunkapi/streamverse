import React, { useState } from "react";
import "./Landscape.css";
import CardPopup from "./CardPopup";

import esp1 from "./Logos/ESP1.webp";
import esp2 from "./Logos/ESP2.jpeg";
import esp3 from "./Logos/ESP3.png";
import MQ1 from "./Logos/MQ1.jpeg";
import MQ2 from "./Logos/MQ2.png";
import MQ3 from "./Logos/MQ3.png";
import SP1 from "./Logos/SP1.png";
import SP2 from "./Logos/SP2.png";
import SP3 from "./Logos/SP3.png";
import DB1 from "./Logos/DB1.png";
import DB2 from "./Logos/DB2.png";
import DB3 from "./Logos/DB3.png";
import SDI1 from "./Logos/SDI1.png";
import SDI2 from "./Logos/SDI2.png";
import SDI3 from "./Logos/SDI3.png";
import SL1 from "./Logos/SL1.png";
import SL2 from "./Logos/SL2.png";
import SL3 from "./Logos/SL3.png";
import RML1 from "./Logos/RML1.png";
import RML2 from "./Logos/RML2.png";
import RML3 from "./Logos/RML3.png";
import RTI1 from "./Logos/RTI1.png";
import RTI2 from "./Logos/RTI2.png";
import RTI3 from "./Logos/RTI3.png";

const Landscape = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = (title, iframeSrc) => {
    setPopupContent({ title, iframeSrc });
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setPopupContent(null);
    setIsPopupOpen(false);
  };

  return (
    <div className="lcontainer">
      <div className={`lrow ${isPopupOpen ? "blur" : ""}`}>
        <div
          className="lcard"
          onClick={() =>
            handleCardClick(
              "Streaming Systems (MQs)",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shrPf9lEGSONOf40O?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">Streaming Systems (MQs)</div>
            <p className="card-description">
              Implemented as Event Logs, Message Queue platforms have become the
              central nervous system i.e. broker platform for publish and
              subscribe capabilities in the real time realm.
            </p>
            <p className="expand">
              <u>VIEW</u>
            </p>
          </div>
          <div className="logo-frame">
            <img src={MQ1} alt="logo" class="logo" />
            <img src={MQ2} alt="logo" class="logo" />
            <img src={MQ3} alt="logo" class="logo" />
          </div>
        </div>
        <div
          className="lcard"
          onClick={() =>
            handleCardClick(
              "Stream Processors",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shrZQKefSDQ5pLLft?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">Stream Processors</div>
            <p className="card-description">
              SPs can process and analyze event streams sourced from streaming
              ESP or MQs on-the-fly. SPs can hold state for complex logic,
              transformations, join and customs UDFs.{" "}
            </p>
            <p className="expand">
              <u>VIEW</u>
            </p>
          </div>
          <div className="logo-frame">
            <img src={SP1} alt="logo" class="logo" />
            <img src={SP2} alt="logo" class="logo" />
            <img src={SP3} alt="logo" class="logo" />
          </div>
        </div>
      </div>
      <div className={`lrow ${isPopupOpen ? "blur" : ""}`}>
        <div
          className="lcard"
          onClick={() =>
            handleCardClick(
              "Streaming DBs",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shrv35v5D694vKhAw?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">Streaming DBs</div>
            <p className="card-description">
              Vendors combine stream processing engines and repurpose them
              inside databases. They build materialized views to power
              dashboards and applications. SQL is a core selling point.
            </p>
            <p className="expand">
              <u>VIEW</u>
            </p>
          </div>
          <div className="logo-frame">
            <img src={DB1} alt="logo" class="logo" />
            <img src={DB2} alt="logo" class="logo" />
            <img src={DB3} alt="logo" class="logo" />
          </div>
        </div>
        <div
          className="lcard"
          onClick={() =>
            handleCardClick(
              "Streaming Data Integration",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shrGryRD30I2HtJ23?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">Streaming Data Integration</div>
            <p className="card-description">
              SDI applications are continuous ETL or ELT that ingest, filter,
              process and then store data in data lakes, data warehouses, or
              other databases or files primarily via CDCs.
            </p>
            <p className="expand">
              <u>VIEW</u>
            </p>
          </div>
          <div className="logo-frame">
            <img src={SDI1} alt="logo" class="logo" />
            <img src={SDI2} alt="logo" class="logo" />
            <img src={SDI3} alt="logo" class="logo" />
          </div>
        </div>
      </div>
      <div className={`lrow ${isPopupOpen ? "blur" : ""}`}>
        <div
          className="lcard"
          onClick={() =>
            handleCardClick(
              "Serving Layer / OLAP",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shrDohZ8qlvYR79s1?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">Serving Layer / OLAP</div>
            <p className="card-description">
              The function of serving layer is to persist the results of stream
              processing & make them easily available. It must have 2 features:
              high throughput & complex querying.
            </p>
            <p className="expand">
              <u>VIEW</u>
            </p>
          </div>
          <div className="logo-frame">
            <img src={SL1} alt="logo" class="logo" />
            <img src={SL2} alt="logo" class="logo" />
            <img src={SL3} alt="logo" class="logo" />
          </div>
        </div>
        <div
          className="lcard"
          onClick={() =>
            handleCardClick(
              "Event Stream Processing Platforms",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shr2nVbh3gskKd8Cn?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">
              Event Stream Processing Platforms
            </div>
            <p className="card-description">
              ESPs have evolved from being mere message queue brokers to full
              fledged end-to-end solutions often encompassing solutions from
              other categories in this landscape.
            </p>
            <p className="expand">
              <u>VIEW</u>
            </p>
          </div>
          <div className="logo-frame">
            <img src={esp1} alt="logo" class="logo" />
            <img src={esp2} alt="logo" class="logo" />
            <img src={esp3} alt="logo" class="logo" />
          </div>
        </div>
      </div>
      <div className={`lrow ${isPopupOpen ? "blur" : ""}`}>
        <div
          className="lcard"
          onClick={() =>
            handleCardClick(
              "Real-time ML",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shrBcCpMb0hr118YV?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">Real-time ML</div>
            <p className="card-description">
              These companies help their customers to unlock real-time ML use
              cases enabled by robust streaming infrastructure at it's core.
            </p>
            <p className="expand">
              <u>VIEW</u>
            </p>
          </div>
          <div className="logo-frame">
            <img src={RML1} alt="logo" class="logo" />
            <img src={RML2} alt="logo" class="logo" />
            <img src={RML3} alt="logo" class="logo" />
          </div>
        </div>
        <div
          className="lcard"
          onClick={() =>
            handleCardClick(
              "Real-time Infrastructure",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shrInABlzeC91xI4R?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">Real-time Infrastructure</div>
            <p className="card-description">
              Companies provide broader event driven architecture solutions that
              solve for real-time use cases, edge latencies, pub/sub
              infrastructures.
            </p>
            <p className="expand">
              <u>VIEW</u>
            </p>
          </div>
          <div className="logo-frame">
            <img src={RTI1} alt="logo" class="logo" />
            <img src={RTI2} alt="logo" class="logo" />
            <img src={RTI3} alt="logo" class="logo" />
          </div>
        </div>
      </div>
      {popupContent && (
        <CardPopup
          title={popupContent.title}
          iframeSrc={popupContent.iframeSrc}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default Landscape;
