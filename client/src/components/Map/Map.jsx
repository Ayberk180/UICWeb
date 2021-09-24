import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const AnyReactComponent = ({text}) => <div>{text}</div>;

const MapSection = () => {
    const [center, setCenter] = useState({lat: 40.892492, lng: -74.142274 });
    const [zoom, setZoom] = useState(15);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDC29tOHpnZQGW0Xa4zN5M-W4AlCAYHHqE' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={40.892492}
            lng={-74.142274}
            name="United Islamic Center"
            color="red"
          />
        </GoogleMapReact>
      </div>
    );
}

export default MapSection;