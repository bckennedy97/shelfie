import React, { Component } from 'react';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: []
    }
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts(){
    axios.get("/api/products").then(response=>{
      console.log(response.data)
      this.setState({
        inventory: response.data
      })
    
    })
  }
  render() {
    const {inventory} = this.state;
    const allProducts = inventory.map((product,i)=>{
      return(
        <Dashboard key={product.name+i}
                   product={product}
                   />
      )
    })
    return (
      <div className="App">
      <section>
      {allProducts}
      </section>
        
        <Header/>
        <Form getProducts={this.getProducts}></Form>
      </div>
    );
  }
}

export default App;
