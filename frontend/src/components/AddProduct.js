import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


const addProductAction = (product_name,product_price,image) => (axios.post('/add',{product_name,product_price,image})
    .then((resp) => resp.data))

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name:'',
            product_price:'',
            image:'',
        }
    }

    ischange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    handleClick = () => {
        console.log(JSON.stringify(this.state));
        const {product_name,product_price,image} = this.state;
        addProductAction(product_name,product_price,image).then((response)=>{
            console.log(response);  
        })
        const newItem = {};
        newItem.product_name = product_name;
        newItem.product_price = product_price;
        newItem.image = image;
        console.log("yen de "+JSON.stringify(newItem));
        if(newItem.product_name !== '' && newItem.product_price !== '' && newItem.image !== ''){
            // this.props.getNewData(newItem);
            this.props.addDataToDB(newItem);
        }
            

    }
    
    render() {
        return (
            <div className="container">
                <form>
                    <h3>Tên sản phẩm</h3>
                    <div className="form-group">
                    <input onChange={(event) => this.ischange(event)} type="text" className="form-control" name="product_name" id="product_name" aria-describedby="helpIdNoteTitle" />
                    </div>
                    <h3>Giá sản phẩm</h3>
                    <div className="form-group">
                    <input onChange={(event) => this.ischange(event)} type="text" className="form-control" name="product_price" id="product_price" aria-describedby="helpIdNoteTitle" />
                    </div>
                    <h3>Ảnh sản phẩm</h3>
                    <div className="form-group">
                    <input onChange={(event) => this.ischange(event)} type="text" className="form-control" name="image" id="image" aria-describedby="helpIdNoteTitle" />
                    </div>
                    <button onClick={() => this.handleClick()} type="reset" className="btn btn-primary btn-block">Add</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataToDB: (newItemStore) => {
            dispatch({
                type:"ADD_NEW",
                newItemStore
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(AddProduct);
