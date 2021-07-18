import logo from './logo.svg';
import './App.css';
import Home from './homepage/homepage';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { HashRouter  } from 'react-router-dom'
import NavigationBar from './navbar/navbar';
import WC from './web-components/web-components';
import storybookComponent from './storybook-component/storybook-component';


function App() {
  return (
    <>
      <HashRouter basename="/">
        <NavigationBar/>
        <Switch>
          <Route path = '/' component={Home} exact/>
          <Route path = '/wc' component={WC}/>
          <Route path = '/storybookComponent' component={storybookComponent}/>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
