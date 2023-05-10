import React, { useEffect, useRef, useState } from "react";
import ReactMapGL from "react-map-gl";

const VectorMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 51.5074,
    longitude: -0.1278,
    zoom: 8,
    bearing: 0,
    pitch: 0,
    width: 500,
    height: 500,
  });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const size = containerRef.current.getBoundingClientRect();
      setViewport((prevState) => ({
        ...prevState,
        width: size.width - 30,
        height: size.height,
      }));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleViewportChange = (newViewport) => setViewport(newViewport);

  return (
    <div
      className="card"
      style={{ width: "100%", height: "100%", boxSizing: "border-box" }}
    >
      <div className="header">
        <h4>Vector Map</h4>
      </div>
      <div className="content" ref={containerRef}>
        <ReactMapGL {...viewport} onViewportChange={handleViewportChange} />
      </div>
    </div>
  );
};

export default VectorMap;
