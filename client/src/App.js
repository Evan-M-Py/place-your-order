import React, { useState } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './components/LandingPage';
import EditPage from './components/EditPage';
import OrderPage from './components/OrderPage';
import ViewPage from './components/ViewPage';
import './App.css';

function App() {
  
  return (
    <div className="App">

      <Switch>

        <Route exact path='/'>

          <LandingPage/>

        </Route>

        <Route path='/editPage'>

          <EditPage/>

        </Route>

        <Route path='/placeOrder'>

          <OrderPage/>

        </Route>

        <Route path='/viewPage'>

          <ViewPage/>

        </Route>

      </Switch>

    </div>
  );
}

export default App;
