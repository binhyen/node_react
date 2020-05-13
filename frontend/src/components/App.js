import React, { Component } from 'react';
import './App.css';
import HeadTitle from './HeadTitle';
import Product from './Product';
import axios from 'axios';
import AddProduct from './AddProduct';
import {connect} from 'react-redux';
const getProductData = () => 
              axios.get('/getdata01')
              .then((res) => res.data)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  
  componentWillMount() {
    if(this.state.data === null) {
      getProductData().then((res) => {
        this.setState({
          data:res
        });
      })
    }
  }

  printData = () => {
    console.log(this.state.data);
    
    if(this.state.data !== null) {
      let newData = [];
      newData = this.state.data;
      console.log("11111111111111111: "+JSON.stringify(this.props.newItemStore.product_name));
      if(this.props.newItemStore.product_name !==''){
        newData.push(this.props.newItemStore);
      }
      
      
      
      // this.setState({
      //   data:newData
      // });

      console.log("11111111111111111: "+JSON.stringify(this.state.data));
      

      return newData.map((value,key) => 
        (<Product
        key={key}
        product_name={value.product_name}
        product_price={value.product_price}
        image={value.image} />)
      )
    }
  }

  getNewData(newItem) {
    console.log(newItem);
    console.log(this.state.data);
    let newData = [];
    newData = this.state.data;
    newData.push(newItem);
    this.setState({
      data:newData
    });
    console.log(this.state.data);
    
  }

  render() {
    
    return (
      <div>
      <HeadTitle></HeadTitle>
      
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              {this.printData()}
            </div>
          </div>
          <div className="col-4">
            <AddProduct getNewData={(newItem) => this.getNewData(newItem)}></AddProduct>
          </div>
          
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    newItemStore: state.newItemStore
  }
}


export default connect(mapStateToProps)(App);
