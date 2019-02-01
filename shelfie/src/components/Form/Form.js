import React, {Component} from "react";
import axios from "axios";

export default class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            price: 0,
            imageUrl: ""
        }
        this.addProduct = this.addProduct.bind(this);
    }
    addProduct(){
        const {name,price,imageUrl} = this.state;
        const newProduct = {
            name,
            price,
            imageUrl
        }
        axios.post("/api/products",newProduct).then(()=>{
            this.props.getProducts();
        })
        this.setState({
            name: "",
            price: 0,
            imageUrl: ""
        })
        
    }

    render(){
        const {name,price,imgUrl} = this.state;
        return(
            <div>
                <img src="" alt=""></img>
                <p>Image URL:</p>
                <input value={imgUrl} onChange={e=>this.setState({imgUrl: e.target.value})}/>
                <p>Product Name:</p>
                <input value={name} onChange={e=>this.setState({name: e.target.value})}/>
                <p>Price:</p>
                <input value={price} onChange={e=>this.setState({price: e.target.value})}/>
                <button onClick={()=>this.setState({name:"", price:0, imageUrl: ""})}>Cancel</button>
                <button onClick={this.addProduct}>Add to Inventory</button>
            </div>
        )
    }
}