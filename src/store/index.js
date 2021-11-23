import React, { useReducer } from "react";

import FavouritesReducer from "./reducers/favourites";
import SortReducer from "./reducers/sort";
import { fetchFromLocal } from "utils/sync-localstorage";
import combinedReducers from "utils/combinedReducers";

const FavouritesState = fetchFromLocal("appState", {});

export const AppStateContext = React.createContext();
export const DispatchContext = React.createContext();

export default function Store({ children }) {
  const [state, dispatch] = combinedReducers({
    favourites: useReducer(FavouritesReducer, FavouritesState),
    sort: useReducer(SortReducer, {}),
  });

  return (
    <AppStateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </AppStateContext.Provider>
  );
}
