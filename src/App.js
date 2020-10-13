import React , {Component,Suspense} from "react";
import "./style.css";
import 'antd/dist/antd.css';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Navigation from './Components/Navigation';
import * as ROUTES from './Constants/routes';
import LandingPage from './Components/Landing';
import SignUpPage from './Components/SignUp';
import  Sample from './HOC/Sample'
import StateHooks from "./Hooks/StateHooks"
import Player from "./Player"


import { withAuthentication } from './Components/Session';

const SignInPage = React.lazy(() => import('./Components/SignIn'));
const HomePage=React.lazy(() => import('./Components/Home'));


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

    const {authUser}= this.state

    //console.log(authUser)

     return (
     <BrowserRouter>
     <Suspense fallback={<div>Loading...</div>}>

     <Sample/>

     <StateHooks/>

     <Player/>
     

     <Navigation/>
    
      <Switch>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      </Switch>

    </Suspense>
     </BrowserRouter>
     
  );

  }
 
}

export default withAuthentication(App);
