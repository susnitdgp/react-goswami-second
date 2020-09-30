import React , {Component} from "react";
import "./style.css";
import 'antd/dist/antd.css'; 
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import * as ROUTES from './Constants/routes';
import LandingPage from './Components/Landing';
import SignUpPage from './Components/SignUp';
import SignInPage from './Components/SignIn';
import HomePage from './Components/Home'

import { withAuthentication } from './Components/Session';
import { Divider } from 'antd';
import { Steps,Layout, Menu, Breadcrumb } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Step } = Steps;

class App extends Component{

  constructor(props) {
    super(props);
 
    this.state = {
      authUser: null,
      current: 'mail'
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  }

  render(){

    const {authUser,current}= this.state

    console.log(authUser)

     return (
     <BrowserRouter>


     <Layout>
    <Header className="header">
      <div className="logo" />
      
        <Menu theme="darkhh" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Office Note">
            <Menu.Item key="setting:1">Predefined Office Note(Create)</Menu.Item>
            <Menu.Item key="setting:2">Generic Office Note(Create)</Menu.Item>
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


    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        
        <Content style={{ padding: '0 24px', minHeight: 280 }}>Content
        
           <Steps current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>

     <Navigation/>
    
     <Divider>Text</Divider>

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.HOME} component={HomePage} />


     </BrowserRouter>
     
  );

  }
 
}

export default withAuthentication(App);
