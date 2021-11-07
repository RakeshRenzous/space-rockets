
const favouriteReducer = (state, action) => {
  switch (action.type) {
    case 'addFavourite': {
      let { payload } = action;
      let categoryKey = payload.type;

      if(!(categoryKey in state)) {
        state[categoryKey] = {};
      }

      let favouritesCategory = state[categoryKey];
      let payloadId = payload.data[payload.id];

      favouritesCategory[payloadId] = payload.data;
      return state;
    }

    case 'removeFavourite': {
      let { payload } = action;
      let categoryKey = payload.type;
      let favouritesCategory = state[categoryKey];
  
      delete favouritesCategory[payload.data];
  
      if(Object.keys(favouritesCategory).length === 0) {
        delete state[categoryKey];
      }
  
      return state;
    }

    default:
      break;
  }
}

export default favouriteReducer;