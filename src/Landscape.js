import React, { useState } from "react";
import "./Landscape.css";
import CardPopup from "./CardPopup";

const Landscape = () => {
  const [popupContent, setPopupContent] = useState(null);

  const handleCardClick = (title, iframeSrc) => {
    setPopupContent({ title, iframeSrc });
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="card"
          onClick={() =>
            handleCardClick(
              "Event Stream Processing Platform",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shr2nVbh3gskKd8Cn?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">Event Stream Processing Platform</div>
            <p className="card-description">
              This is the description for Card 1.
            </p>
          </div>
        </div>
        <div
          className="card"
          onClick={() =>
            handleCardClick(
              "Streaming System (MQs)",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shr2nVbh3gskKd8Cn?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">Streaming System (MQs)</div>
            <p className="card-description">
              This is the description for Card 2.
            </p>
          </div>
        </div>
        <div
          className="card"
          onClick={() =>
            handleCardClick(
              "Stream Processor",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shr2nVbh3gskKd8Cn?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">Stream Processor</div>
            <p className="card-description">
              This is the description for Card 3.
            </p>
          </div>
        </div>
        <div
          className="card"
          onClick={() =>
            handleCardClick(
              "Streaming DB",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shr2nVbh3gskKd8Cn?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">Streaming DB</div>
            <p className="card-description">
              This is the description for Card 4.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="card"
          onClick={() =>
            handleCardClick(
              "Streaming Data Integration",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shr2nVbh3gskKd8Cn?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">Streaming Data Integration</div>
            <p className="card-description">
              This is the description for Card 5.
            </p>
          </div>
        </div>
        <div
          className="card"
          onClick={() =>
            handleCardClick(
              "Real-time Infrastructure",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shr2nVbh3gskKd8Cn?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">Real-time Infrastructure</div>
            <p className="card-description">
              This is the description for Card 6.
            </p>
          </div>
        </div>
        <div
          className="card"
          onClick={() =>
            handleCardClick(
              "Real-time ML",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shr2nVbh3gskKd8Cn?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">Real-time ML</div>
            <p className="card-description">
              This is the description for Card 7.
            </p>
          </div>
        </div>
        <div
          className="card"
          onClick={() =>
            handleCardClick(
              "Serving Layer / OLAP",
              "https://airtable.com/embed/appo9GPmQgEfICvPL/shr2nVbh3gskKd8Cn?backgroundColor=blue"
            )
          }
        >
          <div className="card-content">
            <div className="card-heading">Serving Layer / OLAP</div>
            <p className="card-description">
              This is the description for Card 8.
            </p>
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
