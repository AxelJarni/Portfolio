import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
let googleapi = process.env.REACT_APP_API_KEY;
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 49.442402,
      lng: 1.098460
    },
    zoom: 11
  };

  render() {
    return (
      // Returning the map element, important to set height and width or else it default to 0
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleapi}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={49.442402}
            lng={1.098460}
            text=""
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;