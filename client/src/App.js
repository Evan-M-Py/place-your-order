import React, { useState } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './components/LandingPage';
import EditPage from './components/EditPage';
import OrderPage from './components/OrderPage';
import ViewPage from './components/viewPage';
import './App.css';

function App() {
  
  return (
    <div className="App">

      <Switch>

        <Route exact path='/'>

          <LandingPage/>

        </Route>

        <Route path='/edit'>

          <EditPage/>

        </Route>

        <Route path='/placeOrder'>

          <OrderPage/>

        </Route>

        <Route path='/viewTickets'>

          <ViewPage/>

        </Route>

      </Switch>

    </div>
  );
}

export default App;
