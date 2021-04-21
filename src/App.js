import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import MainApp from './components/MainApp';
import MainHeader from './components/MainHeader';
import Messages from './components/Messages';
import MessageScreen from './components/MessageScreen';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path='/chat/:tinderUser'>
          <MainHeader chatScreen='/app' backButton='/chat' />
          <MessageScreen />
        </Route> 
        <Route path='/chat'>
          <MainHeader backButton='/app' />
          <Messages />
        </Route>
        <Route path='/app'> 
          <MainHeader homeButton='/'/> 
          <MainApp />
        </Route>
        <Route path='/' >
          <Header />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
