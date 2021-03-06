import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/inventory_fe/" className="navbar-brand">Inventory</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/inventory_fe/items" className="nav-link">Items</Link>
          </li>
          <li className="navbar-item">
          <Link to="/inventory_fe/create" className="nav-link">Create Item</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}