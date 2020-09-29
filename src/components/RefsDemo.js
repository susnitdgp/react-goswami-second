import React , {Component} from "react";


class RefsDemo extends Component{

  constructor(props){
    super(props)

    this.state={
        'attr1':'attr val'
    }

    this.inputRef=React.createRef()


  }

  componentDidMount(){

    this.inputRef.current.focus()


  }

  render(){

    return (
      <div>

      <input type="text" ref={this.inputRef}/>

      </div>

    )
  }



}

export default RefsDemo