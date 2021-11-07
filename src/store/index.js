import React, { useReducer } from 'react';

import FavouritesReducer from './reducers/favourites';

const AppInitalState = {
  favourites: new Map()
}

const AppStateContext = React.createContext();
const DispatchContext = React.createContext();

export default function Store({ children }) {
  const [AppState, dispatch] = useReducer(FavouritesReducer, AppInitalState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={AppState}> {children} </AppStateContext.Provider>
    </DispatchContext.Provider>
  )
}