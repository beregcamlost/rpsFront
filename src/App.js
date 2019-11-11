import React, { Component } from 'react';
import Home from './Components/Home';
import Layout from './Components/Layout';
import './App.css';

class App extends Component {

  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}

export default App;