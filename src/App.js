import React , {Component} from "react";
import "./style.css";

import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import * as ROUTES from './Constants/routes';
import LandingPage from './Components/Landing';
import SignUpPage from './Components/SignUp';
import SignInPage from './Components/SignIn';
import HomePage from './Components/Home'

import { withAuthentication } from './Components/Session';




class App extends Component{

  constructor(props) {
    super(props);
 
    this.state = {
      authUser: null,
      current: 'mail'
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }

 

  render(){

    const {authUser,current}= this.state

    console.log(authUser)

     return (
     <BrowserRouter>

     <Navigation/>
    
   

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.HOME} component={HomePage} />


     </BrowserRouter>
     
  );

  }
 
}

export default withAuthentication(App);
