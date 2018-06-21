import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
}from 'react-router-dom';
 
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

import Header from './Components/header';
import Home from './Components/home';
import Footer from './Components/footer';
import LoginHome from './Components/LoginHome';
// import LoginControl from './Components/loginControl'; 
import OurTeam from './Components/ourTeam';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
        <Header />
        
        <Route exact path='/' component={Home}/>
        <Route exact path='/ourTeam' component={OurTeam}/>
          
       <Footer />
        
      </div>
      </Router>
    );
  }
}

export default App;
