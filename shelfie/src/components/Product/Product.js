import React, {Component} from "react";

export default class Product extends Component{
    render(){
        const {name,price,imageUrl} = this.props;
        return(
            <div>
                <img src={imageUrl} alt=""></img>
                <p>{name}</p>
                <p>{price}</p>
                <button onClick={this.props.delete}>Delete</button>
                <button>Edit</button>
            </div>
    )
    }
    
}