/** @format */

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const GoogleMap = ({ data }: any) => {
  const defaultProps = {
    center: {
      lat: parseFloat(data.lat),
      lng: parseFloat(data.lng),
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "40vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyATY4Rxc8jNvDpsK8ZetC7JyN4PFVYGCGM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={parseFloat(data.lat)}
          lng={parseFloat(data.lng)}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
