import React , {Component} from "react";
import { Button} from "antd";

// Class component example
class Counter extends Component{

  constructor(props){
    super(props)

    this.state={

        count:0

    }

  }

  increment(){

    //Diff in two approach

    //let newval = this.state.count+2

    //call to setstate is asynchronous,with callback example (2nd function)
    this.setState({
      count:this.state.count+2

    },
    ()=>{

        console.log(this.state.count)

    })

    //synchronous call
    console.log(this.state.count)


  }

  render(){
    return(
      <div class="para">
      <h1>Counter Component</h1>
      <h4> Count= {this.state.count}</h4>
      <Button type="primary" onClick={()=>this.increment()}>Increment++</Button>

      </div>

    );
  }
}

export default Counter