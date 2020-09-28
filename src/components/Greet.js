import React , {Component} from "react";
import { Button} from "antd";
import {UserConsumer} from "./UserContext"


// Class component example
class Greet extends Component{

  constructor(props){
    super(props)

    this.state={
        'attr1':'attr val'
    }

    this.clickHandler=this.clickHandler.bind(this)

  }

  clickHandler(){

    //alert("test")
    this.setState({
      'attr1':'value1'
    })

  }

  componentDidMount(){

    console.log("Inside component did mount")

  }

  shouldComponentUpdate(){

    console.log("Inside component should update")
    return true

  }

  componentDidUpdate(){

    console.log("Inside component did update")

  }

  componentWillUnmount(){

    console.log("Inside component unmount")

  }

  componentDidCatch(error,info){

  }

  render(){
    return(

      <UserConsumer>

        {val =>{ 

          return (

            <div class="para">
              <h1>Hello from DIV props= {this.props.attr1}</h1>
              <h1>Hello from DIV state= {this.state.attr1}</h1>
              <h1>Context value is : {val}</h1>

              {this.props.children}

              <Button onClick={this.clickHandler}>State Change</Button>

              </div>
          )

        }

        }
      

      </UserConsumer>

    );
  }
}

export default Greet