import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemVendor = this.onChangeItemVendor.bind(this);
    this.onChangeItemPrice = this.onChangeItemPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      itemName: '',
      itemVendor:"",
      itemPrice:0
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/items/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            items: response.data.map(item => item.itemName),
            itemName: response.data[0].itemName
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }
  onChangeItemName(e) {
    this.setState({
      itemName: e.target.value
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
      itemVendor: this.state.itemVendor,
      itemPrice: this.state.itemPrice

    }

    console.log(item);

    axios.post('http://localhost:5000/items/add', item)
      .then(res => console.log(res.data));

    this.setState({
      itemName: '',
      itemVendor:"",
      itemPrice:0
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Item</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Item name: </label>
            <input  ref="userInput"
                required
                className="form-control"
                value={this.state.itemName}
                onChange={this.onChangeItemName}
                />
          </div>

          <div className="form-group"> 
            <label>Item vendor: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.itemVendor}
                onChange={this.onChangeItemVendor}
                />
          </div>
          <div className="form-group"> 
            <label>Item price: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.itemPrice}
                onChange={this.onChangeItemPrice}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Item" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}