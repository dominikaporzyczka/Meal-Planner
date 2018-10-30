export const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [
        ...state,
        Object.assign({}, action.recipe)
      ];

    default:
      return state;
  }
};
