export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return {
        bands: [...state.bands, action.payload]
      }
    case 'DELETE_BAND':
      return {
        bands: state.bands.filter(band => {
          return band.id !== action.payload
        })
      }
    default:
      return state;
  }
};
