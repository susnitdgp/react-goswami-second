import React,{Component} from 'react';

class Sample extends Component{

  constructor(props){
    super(props)

    this.state={
        postId:''
    }

  }

  componentDidMount() {
    
    // POST request using fetch with set headers
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-jwt-token',
            'My-Custom-Header': 'foobar'
        },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    
    fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
        
  }

  render(){

    return (
        <div>
          <h1>Sample Content</h1>
        </div>
    )
  }


}

export default Sample