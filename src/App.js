import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import MainApp from './components/MainApp';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <ScrollToTop />
      <Switch> 
        <Route component={ Home } path='/' exact >
          <Header />
          <Home />
        </Route>
        <Route component={  MainApp } path='/app' />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
