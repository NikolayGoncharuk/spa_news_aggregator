import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// Map
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
// Styled Components
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  containerElement: {
    minHeight: 400,
    height: '100%',
  },
  mapElement: {
    height: '100%',
  },
  loadingElement: {
    height: '100%',
  },
}));

const mapStateToProps = (state) => ({
  googleMap: state.googleMap
});

export default connect(mapStateToProps, {})(
  function Map(props) {
    const { googleMap: { center, zoom, url } } = props;
    const classes = useStyles();

    const GoogleMapComponent = withScriptjs(withGoogleMap(props => {
      return (
        <GoogleMap defaultZoom={zoom} defaultCenter={center}>
          {props.isMarkerShown && <Marker position={center} />}
        </GoogleMap>
      );
    }));

    return (
      <GoogleMapComponent
        isMarkerShown
        googleMapURL={url}
        loadingElement={<div />}
        containerElement={<div className={classes.containerElement} />}
        mapElement={<Paper className={classes.mapElement} />}
      />
    );
  }
);