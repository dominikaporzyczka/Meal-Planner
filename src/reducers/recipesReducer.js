export const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case 'DISPLAY_RECIPES':
      return [
        ...state,
        {
          ...action.recipes
        }
      ];
    default:
      return state;
  }
};
