const sortReducer = (state, action) => {
  switch (action.type) {
    case "setSort": {
      let { payload } = action;
      let categoryKey = payload.type;

      state[categoryKey] = payload.data ?? "";

      return Object.assign({}, state);
    }

    default:
      return state;
  }
};

export default sortReducer;
