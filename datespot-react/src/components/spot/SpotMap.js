import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
    width: '500px',
    height: '500px',
  };

const SpotMap = (props) => {
    console.log(props);
    return(
        <Map
          google={props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: props.lat, lng: props.lon}}
        >
        <Marker position={{ lat: props.lat, lng: props.lon}} />
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: ''
  })(SpotMap);