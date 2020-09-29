import React , {Component} from "react";
import { NavLink,Link} from 'react-router-dom';
import { Divider} from "antd";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
class NavBar extends Component{

//<Prompt when={true} message="hello"/> 

state = {
    current: 'mail',
  };


handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

render(){

  const { current } = this.state;

  return (
      <div>
      <h5>NAV-BAR</h5>


  <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>

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