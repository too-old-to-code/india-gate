import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

let location = {
  lat: 51.51374,
  lng: -3.22092,
  addressLine1: '17 Penlline Rd,',
  city: 'Cardiff',
  postCode: 'CF14 2AA',
  number: '(029) 20 611178 / 615347'
}
const AnyReactComponent = (props) => {
  return <div src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png" style={{
    position: 'absolute',
    transform: 'translate(-50%, -100%)'

  }}
    animation={4}
  >
    <div style={{
      width: '30px',
      height: '30px',
      backgroundColor: 'white',
      border: 'solid 1px black',
      borderRadius: '50%'
    }}>
      <p>H</p>
    </div>

    <div
      style={{
        width: '2px',
        height: '40px',
        backgroundColor: 'black',
        transform: 'translateX(14px)'
      }}
    ></div>
  </div>;
}


class ContactUs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      opacity: 0,
      animation: null
    }
  }

  createOptions (maps) {
    return {
      animation: true,
      animationControlOptions: {
        style: maps.Animation.DROP
      },
      zoomControl: false,
      zoomControlOptions: {
        style: maps.ZoomControlStyle.SMALL
      },
      fullscreenControl: false,
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT,
        style: maps.ControlPosition.SMALL
      },
      mapTypeControl: true
    }
  }


  static defaultProps = {
    zoom: 18
  };


  render() {
    if (!location) return
    const { lat, lng } = location

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%', opacity: 1, transition: 'opacity 1s' }} key={lat}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD7u4-qeH76DCRCGqlWBu5O9OuK_e45Ij0' }}
          defaultCenter={{ lat, lng }}
          defaultZoom={this.props.zoom}
          options={this.createOptions}
        >
          <AnyReactComponent
            lat={lat}
            lng={lng}
            animation={2}
            other={this.props}
          />
        </GoogleMapReact>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
          padding: '20px'
        }}>
          <div>
          <p>India Gate</p>
          <p>{location.addressLine1}</p>
          <p>{location.city}</p>
          <p>{location.postCode}</p>
          <p>{location.number}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;