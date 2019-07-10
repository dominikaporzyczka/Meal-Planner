import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MainPage } from '../pages/MainPage/MainPage';
import { MyActivitiesPage } from '../pages/MyActivitiesPage/MyActivitiesPage';
import { ProgressReportPage } from '../pages/ProgressReportPage/ProgressReportPage';
import { MyGoalsPage } from '../pages/MyGoalsPage/MyGoalsPage';
import { NotFound } from '../pages/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/activities' component={MyActivitiesPage} />
          <Route exact path='/reports' component={ProgressReportPage} />
          <Route exact path='/goals' component={MyGoalsPage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
