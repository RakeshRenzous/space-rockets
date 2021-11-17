import { syncToLocal } from "utils/sync-localstorage";
import { STORE_KEYS } from "constants/uiConstants";

const favouriteReducer = (state, action) => {
  let { favourites } = state;
  let { payload } = action;
  let categoryKey = payload.type;

  switch (action.type) {
    case "addFavourite": {
      if (!(categoryKey in favourites)) {
        favourites[categoryKey] = {};
      }

      let favouritesCategory = favourites[categoryKey];
      let payloadKey = STORE_KEYS[categoryKey];

      let payloadId = payload.data[payloadKey];

      favouritesCategory[payloadId] = payload.data;
      syncToLocal("appState", state);

      return Object.assign({}, state, { favourites });
    }

    case "removeFavourite": {
      let favouritesCategory = favourites[categoryKey];

      if (favouritesCategory === undefined) {
        return Object.assign({}, state);
      }

      let payloadKey = STORE_KEYS[categoryKey];
      let payloadId = payload.data[payloadKey];

      delete favouritesCategory[payloadId];

      if (Object.keys(favouritesCategory).length === 0) {
        delete favourites[categoryKey];
      }

      syncToLocal("appState", state);
      return Object.assign({}, state, { favourites });
    }

    default:
      break;
  }
};

export default favouriteReducer;
