import './App.css';
import React from 'react';
import Login from "./containers/Login"
import Layout from './containers/Layout';
import Navbar from './containers/Navbar';

class App extends React.Component{
  render(){
    return (
      <Layout>
        <Navbar></Navbar>
        <Login></Login>
      </Layout>
    );
  }
}

export default App;
