import React, { Component } from 'react';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard></Dashboard>
        <Form></Form>
      </div>
    );
  }
}

export default App;
