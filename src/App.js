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
      <Route path="/" exact component={HomePage} />
      <Route path="/create" component={CreateItem} />
      <Route path="/items" component={ItemsList} />
      <Route path="/edit/:id" component={EditItem} />
       </div>
    </Router>
  );
}

export default App;
