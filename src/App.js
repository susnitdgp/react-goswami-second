import React , {Component} from "react";
import "./style.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import * as ROUTES from './Constants/routes';
import LandingPage from './Components/Landing';
import SignUpPage from './Components/SignUp';



class App extends Component{

  render(){

     return (
 
     <Router>
     
     <Navigation />
     <hr/>

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />


    
     </Router>
  );

  }
 
}

export default App
