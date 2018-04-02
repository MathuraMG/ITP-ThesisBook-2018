import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App.jsx';
import About from './components/About.jsx';
require('./styles/sass/main.scss');
class Main extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/about' component={About}/>
        </Switch>
      </Router>
    );
  }
}

render(<Main/>, document.getElementById('app'));
