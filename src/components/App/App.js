import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MainPage } from '../MainPage/MainPage';
import { PlannerPage } from '../PlannerPage/PlannerPage';
import { RecipePage } from '../RecipePage/RecipePage';
import { RecipesPage } from '../RecipesPage/RecipesPage';
import { NotFound } from '../NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/planner' component={PlannerPage} />
          <Route exact path='/recipes' component={RecipesPage} />
          <Route path='/recipes/:recipe' component={RecipePage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
