import React from 'react';
// import './../App.css';
import { Drawer, Button } from 'antd';
import { render } from 'react-dom';
import 'antd/dist/antd.css';

class HelloWorld extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        visible:false
      };
    }
    showDrawer = () => {
      this.setState({visible:true});
    };
  
     onClose= () => {
      this.setState({visible:false});
    };
    render(){
      return(
        <div>
          <Button type="primary" onClick={this.showDrawer}>
          Open
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </div>
      )
    }
  }
  export default HelloWorld;