import React, { Component } from 'react';
import './App.scss';
import Home from './Components/Home/Home'
import Favorites from './Components/Favorites/Favorites'
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import { HOME_PATH, FAVORITES_PATH } from './Constants/const'

// const Home = React.lazy(()=> import('./Components/Home/Home'));
// const Favorites = React.lazy(()=> import('./Components/Favorites/Favorites'));

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          {/* <Suspense fallback={<p>Loading...</p>}> */}
              <NavigationBar />
              <Route path={HOME_PATH} exact component={Home} />
              <Route path={FAVORITES_PATH} exact component={Favorites} />
            {/* </Suspense> */}
        </BrowserRouter>
      </div>
    );
  }

}





export default App;
