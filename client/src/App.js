import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import { MenuProvider } from './MenuInfoContext';
import LandingPage from './components/LandingPage';
import EditPage from './components/EditPage';
import OrderPage from './components/OrderPage';
import PrepPage from './components/PrepPage';
import './App.css';

function App() {
  
  return (
    <MenuProvider>
      
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

          <Route path='/prepPage'>

            <PrepPage/>

          </Route>

        </Switch>

      </div>

    </MenuProvider>
  );
}

export default App;
