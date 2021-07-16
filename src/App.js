import logo from './logo.svg';
import './App.css';
import Home from './homepage/homepage';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavigationBar from './navbar/navbar';
import WC from './web-components/web-components';
import storybookComponent from './storybook-component/storybook-component';

function App() {
  return (
    <>
      <Router basename="/avaye-site">
        <NavigationBar/>
        <Switch>
          <Route path = '/' component={Home} exact/>
          <Route path = '/wc' component={WC} exact/>
          <Route path = '/storybookComponent' component={storybookComponent} exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
