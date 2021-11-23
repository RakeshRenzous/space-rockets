export default function combinedReducer(combinedReducers) {
  const appKeys = Object.keys(combinedReducers);

  const state = appKeys.reduce((acc, key) => {
    return {
      ...acc,
      [key]: combinedReducers[key][0],
    };
  }, {});

  const dispatch = (action) => {
    appKeys.forEach((key) => {
      let [, /*state*/ dispatchAction] = combinedReducers[key];
      dispatchAction(action);
    });
  };

  return [state, dispatch];
}
