import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MainPage } from '../MainPage/MainPage';
import { Planner } from '../Planner/Planner';
import { MealPage } from '../MealPage/MealPage';
import { NotFound } from '../NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/planner' component={Planner} />
          <Route exact path='/meals/:meal' component={MealPage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
