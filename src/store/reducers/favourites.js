import { syncToLocal } from "utils/sync-localstorage";
import { STORE_KEYS } from "constants/uiConstants";

const favouriteReducer = (state, action) => {
  let { payload } = action;
  let categoryKey = payload.type;

  switch (action.type) {
    case "addFavourite": {
      if (!(categoryKey in state)) {
        state[categoryKey] = {};
      }

      let favouritesCategory = state[categoryKey];
      let payloadKey = STORE_KEYS[categoryKey];

      let payloadId = payload.data[payloadKey];

      favouritesCategory[payloadId] = payload.data;
      syncToLocal("appState", state);

      return Object.assign({}, state);
    }

    case "removeFavourite": {
      let favouritesCategory = state[categoryKey];

      if (favouritesCategory === undefined) {
        return Object.assign({}, state);
      }

      let payloadKey = STORE_KEYS[categoryKey];
      let payloadId = payload.data[payloadKey];

      delete favouritesCategory[payloadId];

      if (Object.keys(favouritesCategory).length === 0) {
        delete state[categoryKey];
      }

      syncToLocal("appState", state);
      return Object.assign({}, state);
    }

    default:
      return state;
  }
};

export default favouriteReducer;
