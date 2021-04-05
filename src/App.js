import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Home />
      <Switch>       
        {/* <Route component={ Login } path='/login' /> */}
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
