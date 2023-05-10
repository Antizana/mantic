import React from "react";
import { GoogleMap, withGoogleMap } from "react-google-maps";

const Map = ({ latitude, longitude }) => (
  <div>
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: latitude, lng: longitude }}
    />
  </div>
);

export default withGoogleMap(Map);
