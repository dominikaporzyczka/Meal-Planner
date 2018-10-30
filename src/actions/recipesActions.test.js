import * as actions from './recipesActions';

describe('Recipes actions', () => {
  it('addRecipe should create ADD_RECIPE action', () => {
    expect(actions.addRecipe('test recipe')).toEqual({
      type: 'ADD_RECIPE',
      recipe: 'test recipe'
    });
  });
});
