import React from 'react';
import { Drawer, Button } from 'antd';

class Doctor extends React.Component{
  //添加一个class构造函数，然后在该函数中为 this.state 赋初始值：
  //通过以下方式将 props 传递到父类的构造函数中：
 // Class 组件应该始终使用 props 参数来调用父类的构造函数。
  constructor(props) {
    super(props);
    this.state = {  
        visible: false
    };
}
// super关键字，它指代父类的实例（即父类的this对象）。子类必须在constructor方法中调用super方法，
//否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
  showDrawer = () => {
    this.setState({visible:true});
  };

  onClose = () => {
    this.setState({visible:false});
  };
  render(){
  return (
    <>
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
    </>
  
  )
}
}

 export default Doctor;