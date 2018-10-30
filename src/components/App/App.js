import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MainPage } from '../pages/MainPage/MainPage';
import { PlannerPage } from '../pages/PlannerPage/PlannerPage';
import { RecipePage } from '../pages/RecipePage/RecipePage';
import { RecipesPage } from '../pages/RecipesPage/RecipesPage';
import AddRecipe from '../AddRecipe/AddRecipe';
import { NotFound } from '../pages/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/planner' component={PlannerPage} />
          <Route exact path='/recipes' component={RecipesPage} />
          <Route path='/recipes/add' component={AddRecipe} />
          <Route path='/recipes/:recipe' component={RecipePage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
