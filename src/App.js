import logo from './logo.svg';
import './App.css';
import Home from './homepage/homepage';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { HashRouter  } from 'react-router-dom'
import NavigationBar from './navbar/navbar';
import WC from './web-components/web-components';
import storybookComponent from './storybook-component/storybook-component';
import Work from './projects/projects.js'
import GTRI from './gtri/gtri'
import MyPalate from './mypalate/mypalate'
import AboutMe from './aboutme/aboutme'


function App() {
  return (
    <>
      <HashRouter basename="/">
        <NavigationBar/>
        <Switch>
          <Route path = '/' component={Home} exact/>
          <Route path = '/wc' component={WC}/>
          <Route path = '/storybookComponent' component={storybookComponent}/>
          <Route path = '/work' component={Work}/>
          <Route path = '/gtri' component={GTRI}/>
          <Route path = '/mypalate' component={MyPalate}/>
          <Route path = '/aboutme' component={AboutMe}/>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
