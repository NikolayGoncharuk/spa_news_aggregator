const initialState = {
  center: {
    lat: 48.449918,
    lng: 135.105908
  },
  zoom: 14,
  url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDfY2sI2Mkoq9nHnySmZngapYMBNSJUAGI&v=3.exp&libraries=geometry,drawing,places',
};

export default function googleMapReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  };
};