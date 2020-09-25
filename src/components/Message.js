import React , {Component} from "react";
import { Divider,Timeline, Button, DatePicker, version } from "antd";
import axios from "axios";

// Class component example with state 
class Message extends Component{

  constructor(props){
    super(props)

    this.state={
      'message':'Welcome Visitor',
      posts:[]
    }

    this.getData=this.getData.bind(this)

  }

  changeMessage(){

    localStorage.setItem('token','Hello Gowasimiii');
    let token=localStorage.getItem('token');
    //localStorage.clear();

    sessionStorage.setItem('token','Hello Session Storage');
    //sessionStorage.clear()

    this.setState({
      'message':token
       
    })

  };

  getData(){

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=> {

      console.log(response.data);

      /*
      response.data.map((item)=>{

          console.log(item.body);
        
        }
      );
      */

      this.setState({
          posts:response.data

      })

    }).catch((error)=>{
      console.log(error.message);
    })

  };

  render(){

    const { posts } = this.state

    return(
      <div className="para">
      
      <p>Welcome= {this.state.message}</p>

      <Button type="primary" onClick={()=>this.changeMessage()}>Change Text</Button>

      <h1>Antd Version: {version}</h1>

      <Divider/>

      <DatePicker />
      
      <Button type="primary" style={{ marginLeft: 8 }} onClick={this.getData}>
        Fetch Data
      </Button>

      <Divider/>

      
        <Timeline>
            {posts.map((item) =>
                 <Timeline.Item key={item.id}>
                      {item.title}
                  </Timeline.Item>
             )}
        </Timeline>

        

      </div>

    );
  }
}

export default Message