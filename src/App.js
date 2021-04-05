import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Search from './Components/Search';

function App() {
  return(
    
    <div className="app">
      <Router>
        <Header/>
          <Switch>
            <Route path="/search/:searchTerm">
              <Search/>
            </Route>
            <Route path="/">
              <Home/> 
            </Route>
          </Switch>
          <Footer/>
      </Router>
    </div>
   
  );
}

export default App;
