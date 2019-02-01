import React, {Component} from "react";
import Product from "../Product/Product";

export default class Dashboard extends Component{
    render(){
        const {name,price,imageUrl} = this.props.product
        console.log(name);
        return(
            <div>
                <Product name={name}
                         price={price}
                         imageUrl={imageUrl}
                         delete={this.delete}/>
            </div>
        )
    }
}