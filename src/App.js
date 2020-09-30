import React , {Component} from "react";
import "./style.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import * as ROUTES from './Constants/routes';
import LandingPage from './Components/Landing';
import SignUpPage from './Components/SignUp';
import SignInPage from './Components/SignIn';
import HomePage from './Components/Home'

import { withFirebase } from './Components/Firebase';


class App extends Component{

  constructor(props) {
    super(props);
 
    this.state = {
      authUser: null,
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

     return (
 
     <Router>

     <Navigation authUser={this.state.authUser} />
    
     <hr/>

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.HOME} component={HomePage} />


     </Router>
  );

  }
 
}

export default withFirebase(App)
