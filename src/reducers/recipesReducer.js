export const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [
        ...state,
        {
          ...action.recipe
        }
      ];
    default:
      return state;
  }
};
