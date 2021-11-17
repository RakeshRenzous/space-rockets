import React, { useReducer } from 'react';

import FavouritesReducer from './reducers/favourites';
import { fetchFromLocal } from 'utils/sync-localstorage';

const INITAL_STATE = {
  favourites: {}
}

const AppState = fetchFromLocal('appState', INITAL_STATE);

export const AppStateContext = React.createContext();
export const DispatchContext = React.createContext();

export default function Store({ children }) {
  const [state, dispatch] = useReducer(FavouritesReducer, AppState);

  return (
    <AppStateContext.Provider value={state}> 
      <DispatchContext.Provider value={dispatch}>
        {children} 
      </DispatchContext.Provider>
    </AppStateContext.Provider>
  )
}