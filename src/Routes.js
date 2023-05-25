import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './views/main/Home/Home';
import HomePage from './pages/HomePage';

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
    </Switch>
  )
}

export default Routes;