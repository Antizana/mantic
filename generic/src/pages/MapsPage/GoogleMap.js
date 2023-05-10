import React, { useMemo } from "react";
import Map from "./Map";

const GoogleMap = () => {
  const location = useMemo(
    () => ({ latitude: 40.712776, longitude: -74.005974 }),
    []
  );

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="header">
            <h4>Google Map</h4>
          </div>
          <div className="content">
            <div
              style={{
                width: "100%",
                height: "500px",
                boxSizing: "border-box",
              }}
            >
              {useMemo(
                () => (
                  <Map
                    location={location}
                    containerElement={
                      <div style={{ width: "100%", height: "100%" }} />
                    }
                    mapElement={<div style={{ height: "100%" }} />}
                  />
                ),
                [location]
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
