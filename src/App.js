import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import Shoppage from './pages/shops/shops.component';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/shop' component={Shoppage} />
    </Switch>
    
    </div>
  );
}

export default App;
