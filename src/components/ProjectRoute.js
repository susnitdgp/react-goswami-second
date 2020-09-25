import React , {Component} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Greet from "./Greet"
import Message from "./Message"
import Error from "./Error"
import NavBar from "./NavBar"

// Class component example
class ProjectRoute extends Component{

  render(){
    return(
      <div>

      <NavBar/>

       <Switch>
        <Route exact path="/Home" component={Greet} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={Message} />
        <Route component={Error} />
      </Switch>

      </div>

    );
  }
}

export default ProjectRoute