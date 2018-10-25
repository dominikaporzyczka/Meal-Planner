import * as actions from './recipesActions';

describe('Recipes actions', () => {
  it('displayRecipes should create DISPLAY_RECIPES action', () => {
    expect(actions.displayRecipes('test recipe')).toEqual({
      type: 'DISPLAY_RECIPES',
      recipes: 'test recipe'
    });
  });
});
