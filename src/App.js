import React , {Component} from "react";
import "./style.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import * as ROUTES from './Constants/routes';
import LandingPage from './Components/Landing';
import SignUpPage from './Components/SignUp';
import SignInPage from './Components/SignIn';
import HomePage from './Components/Home'


class App extends Component{

  render(){

     return (
 
     <Router>

     <Navigation />
    
     <hr/>

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.HOME} component={HomePage} />


    
     </Router>
  );

  }
 
}

export default App
