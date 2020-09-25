import React , {Component} from "react";
import { NavLink,Link} from 'react-router-dom';
import { Divider} from "antd";


class NavBar extends Component{

//<Prompt when={true} message="hello"/> 

render(){

  return (
      <div>
      <h5>NAV-BAR</h5>
      <ul>
        <li><NavLink to="/Home" activeStyle={{color:'red'}}>Home</NavLink></li>
        <li><NavLink to="/About" activeStyle={{color:'red'}}>About</NavLink></li>
        <li><Link to="/Other">Other</Link></li>
     	</ul>
      
      <Divider/>
      
    </div>

  )

}  

}

export default NavBar