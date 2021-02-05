import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa'
import './style.css'
 
const IconMarker = () => {
  return (
    <div>
      <FaMapMarkerAlt size={40} color='red' />
    </div>
  )
}
 
function SimpleMap() {
 
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC0J3XYuvy399Puxnwxizilp0ZgzvfjIU4' }}
          defaultCenter={{
            lat: -22.286175,
            lng: -42.5442775
          }}
          defaultZoom={16}
        >
          <IconMarker
            lat={-22.286175}
            lng={-42.5442775}
          />
        </GoogleMapReact>
      </div>
    )
}
 
export default SimpleMap;