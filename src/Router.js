import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Components/Layout';
import './App.css';
import Player from './Components/Player';
import Score from './Components/Score';
import NotFound from './Components/NotFound';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);


const routing = (
    <Provider store={store}>
        <Router>
            <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/player" component={Player} />
                <Route path="/score" component={Score} />
                <Route component={NotFound} />
            </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default routing;