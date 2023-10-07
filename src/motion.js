import React from "react";
import Particles from "react-tsparticles";

const MotionBackground = () => {
  const particleOptions = {
    background: {
      color: {
        value: "", // Leave this empty to use the default background color
      },
    },
    particles: {
      number: {
        value: 50, // Number of particles (shooting stars)
      },
      color: {
        value: "#888888", // Color of the shooting stars (gray)
      },
      opacity: {
        value: 0.1, // Transparency (10%)
      },
      shape: {
        type: "star", // You can change the shape to your preference
      },
      size: {
        value: 2, // Size of the shooting stars
      },
      move: {
        direction: "bottom-left", // Movement direction (from top right to bottom left)
        speed: 5, // Speed of the shooting stars
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true,
      },
    },
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Particles
        options={particleOptions}
        style={{ background: "transparent" }} // Set the canvas background to transparent
      />
    </div>
  );
};

export default MotionBackground;
