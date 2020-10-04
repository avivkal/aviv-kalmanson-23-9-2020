import React, { Component } from 'react';
import './App.scss';
import Home from './Components/Home/Home'
import Favorites from './Components/Favorites/Favorites'
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './Components/Navigation Bar/NavigationBar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavigationBar />
          <Route path="/aviv-kalmanson-23-9-2020" exact component={Home} />
          <Route path="/aviv-kalmanson-23-9-2020/favorites" exact component={Favorites} />
        </BrowserRouter>
      </div>
    );
  }

}





export default App;