import React , {Component} from "react";
import "./style.css";
import 'antd/dist/antd.css'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import * as ROUTES from './Constants/routes';
import LandingPage from './Components/Landing';
import SignUpPage from './Components/SignUp';
import SignInPage from './Components/SignIn';
import HomePage from './Components/Home'

import { withFirebase } from './Components/Firebase';
import { AuthUserContext } from './Components/Session';
import { Divider } from 'antd';


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

    const {authUser}= this.state

    console.log(authUser)

     return (
 
     <AuthUserContext.Provider value={this.state.authUser}>
     <Router>

     <Navigation/>
    
     <Divider>Text</Divider>

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.HOME} component={HomePage} />


     </Router>
     </AuthUserContext.Provider>
  );

  }
 
}

export default withFirebase(App)
