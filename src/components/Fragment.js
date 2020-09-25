import React , {Component} from "react";



// Class component example
class Fragment extends Component{

  constructor(props){
    super(props)

    this.state={
        'attr1':'attr val'
    }

  }

  render(){
    return(
      <React.Fragment>

        <h1>Hello from fragment</h1>
        <h1>Hello from fragment2</h1>

      </React.Fragment>

    );
  }
}

export default Fragment