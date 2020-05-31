import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class EditItems extends Component {
  constructor(props) {
    super(props);

    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemQty = this.onChangeItemQty.bind(this);
    this.onChangeItemVendor = this.onChangeItemVendor.bind(this);
    this.onChangeItemPrice = this.onChangeItemPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      itemName: '',
      itemQty:0,
      itemVendor:"",
      itemPrice:0
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/items/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          itemName: response.data.itemName,
          itemQty: response.data.itemQty,
          itemVendor: response.data.itemVendor,
          itemPrice: response.data.itemPrice
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }
 
  onChangeItemName(e) {
    this.setState({
      itemName: e.target.value
    })
    console.log(this.state)
  }
  onChangeItemQty(e) {
    this.setState({
      itemQty: e.target.value
    })
  }
  onChangeItemVendor(e) {
    this.setState({
      itemVendor: e.target.value
    })
  }
  onChangeItemPrice(e) {
    this.setState({
      itemPrice: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const item = {
      itemName: this.state.itemName,
      itemQty: this.state.itemQty,
      itemVendor: this.state.itemVendor,
      itemPrice: this.state.itemPrice
    }

    console.log(item);

    axios.post('http://localhost:5000/items/update/' + this.props.match.params.id, item)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Item Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Item Name: </label>
          <input type="text"
              required
              className="form-control"
              value={this.state.itemName}
              onChange={this.onChangeItemName}>
              
          </input>
        </div>
        <div className="form-group"> 
          <label>Item Qty: </label>
          <input ref="itemQtyInput"
              required
              className="form-control"
              value={this.state.itemQty}
              onChange={this.onChangeItemQty}>
        
          </input>
        </div>
        <div className="form-group"> 
          <label>Item Vendor: </label>
          <input ref="itemVendorInput"
              required
              className="form-control"
              value={this.state.itemVendor}
              onChange={this.onChangeItemVendor}>
  
          </input>
        </div>
        <div className="form-group"> 
          <label>Item Price: </label>
          <input ref="itemPriceInput"
              required
              className="form-control"
              value={this.state.itemPrice}
              onChange={this.onChangeItemPrice}>
          </input>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit item" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}