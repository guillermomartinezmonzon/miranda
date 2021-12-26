import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 40.41095,
      lng: -3.692933
    },
    zoom: 6
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '80vh' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={40.41095}
          lng={-3.692933}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}


