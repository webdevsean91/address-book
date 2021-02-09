import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'

import ContactsList from './components/contacts-list.component';
import CreateContact from './components/create-contact.component';
import EditContact from './components/edit-contact.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <h2 className='App-header'>Sean's Address Book</h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="navbar-nav mr-auto">
                <li className="navbar">
                  <Link to="/" className="nav-link">Contacts</Link>
                </li>
                <li className="navbar">
                  <Link to="/create" className="nav-link">Create Contact</Link>
                </li>
              </ul>
            </div>

          </nav>

          <Route path='/' exact component={ContactsList} />
          <Route path='/edit/:id' component={EditContact} /> 
          <Route path='/create' component={CreateContact} /> 
        </div>
      </Router>
    );
  }
}

export default App;
