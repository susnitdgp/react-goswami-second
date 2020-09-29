import React , {Component} from "react";

class BasicForm extends Component{


  constructor(props){
    super(props)

    this.state={
        'username':'attr val'
    }

    

  }

 changeHandler=(event)=>{

   this.setState({

     'username': event.target.value
     
   })
 } 

render(){

  const { username } = this.state

  return (

    <div>

    <p>Value is : {username} </p>

    <input type="text" value={username} onChange={this.changeHandler}/>

    </div>


  )
}

}

export default BasicForm