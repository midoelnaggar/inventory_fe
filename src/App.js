import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import ItemsList from "./components/items-list.component";
import CreateItem from "./components/create-item.component";
import HomePage from "./components/home-page.component";
import EditItem from "./components/edit-item.component";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/inventory_fe/" exact component={HomePage} />
      <Route path="/inventory_fe/create" component={CreateItem} />
      <Route path="/inventory_fe/items" component={ItemsList} />
      <Route path="/inventory_fe/edit/:id" component={EditItem} />
       </div>
    </Router>
  );
}

export default App;
