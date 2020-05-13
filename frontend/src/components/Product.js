import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="col-4">
            <div className="card text-left">
                <img className="card-img-top" 
                src={this.props.image} 
                alt="img-product"/>
                <div className="card-body">
                <h5 className="card-title float-left">{this.props.product_name}</h5>
                <h6 className="card-text float-right">{this.props.product_price}</h6>
                </div>
            </div>
            </div>

        );
    }
}

export default Product;