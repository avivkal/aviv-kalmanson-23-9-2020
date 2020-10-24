import React, { Component, Suspense } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import { HOME_PATH, FAVORITES_PATH } from './Constants/const'
import { Spinner } from 'react-bootstrap';

const Home = React.lazy(()=> import('./Components/Home/Home'));
const Favorites = React.lazy(()=> import('./Components/Favorites/Favorites'));

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <NavigationBar />
          <Suspense fallback={<Spinner animation="border" className="spinner" />}>
          <Switch>
            <Route path={HOME_PATH} exact component={Home} />
            <Route path={FAVORITES_PATH} exact component={Favorites} />
          </Switch>
            </Suspense>
        </BrowserRouter>
      </div>
    );
  }

}





export default App;
