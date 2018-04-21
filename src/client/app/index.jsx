import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App.jsx';
import About from './components/About.jsx';

import rootReducer from './reducers/rootReducer.jsx';

require('./styles/sass/main.scss');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <div>
            <Route exact path="/" component={App} />
            <Route path="/about" component={App} />
            <Route path="/student" component={App} />
          </div>
        </Router>
      </Provider>
    );
  }
}

render(<Main />, document.getElementById('app'));
