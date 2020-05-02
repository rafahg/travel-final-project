import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '300px',
  };

const SpotMap = (props) => {
    console.log(props);
    return(
        <Map
          google={props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: props.latitude, lng: props.longitude}}
        >
        <Marker position={{ lat: props.latitude, lng: props.longitude}} />
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: ''
  })(SpotMap);