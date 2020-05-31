import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Item = props => (
  <tr>
    <td>{props.item.itemName}</td>
    <td>{props.item.itemQty}</td>
    <td>{props.item.itemVendor}</td>
    <td>{props.item.itemPrice}</td>
    <td>
      <Link to={"/edit/"+props.item._id}>edit</Link> | <a href="#" onClick={() => { props.deleteItem(props.item._id) }}>delete</a>
    </td>
  </tr>
)

export default class ItemsList extends Component {
  constructor(props) {
    super(props);

    this.deleteItem = this.deleteItem.bind(this)

    this.state = {items: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/items/')
      .then(response => {
        this.setState({ items: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteItem(id) {
    axios.delete('http://localhost:5000/items/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      items: this.state.items.filter(el => el._id !== id)
    })
  }

  itemList() {
    return this.state.items.map(currentitem => {
      return <Item item={currentitem} deleteItem={this.deleteItem} key={currentitem._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Items</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Item name</th>
              <th>Item qty</th>
              <th>Item vendor</th>
              <th>Item price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.itemList() }
          </tbody>
        </table>
      </div>
    )
  }
}
