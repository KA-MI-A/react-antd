import React from 'react'
import './../App.css';
import { Drawer, Button,Form, Input,InputNumber,Radio ,Select } from 'antd';
import 'antd/dist/antd.css';
const { Option } = Select;
const { TextArea } = Input;
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      setVisible: false,
      value3: '是',
    };
  }
  // 数据
   options = [
    { label: '是', value: 'yes' },
    { label: '否', value: 'no' },
  ];
  // 打开抽屉
   showDrawer = () => {
    this.setState({
      setVisible:true
    });
  };
  // 关闭抽屉
   onClose = () => {
    this.setState({setVisible:false});
  };
  // 提交表单
   onFinish = (values) => {
    console.log('Success:', values);
  };
// 表单验证
   onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  // 单选框
  onChange3 = e => {
    console.log('radio3 checked', e.target.value);
    this.setState({
      value3: e.target.value,
    });
  };
  render(){
    const { value3 } = this.state;
    return (
      <>
      <Button type="primary" onClick={this.showDrawer}>
        点击
      </Button>
      <Drawer
        width={640}
        title="表单"
        placement="right"
        closable={true}
        maskClosable={true}
        onClose={this.onClose}
        visible={this.state.setVisible}
      >
       <Form
      name="basic"
      // initialValues={{ remember: true }}
      onFinish={this.onFinish}
      onFinishFailed={this.onFinishFailed}
    >
      {/* 输入框 */}
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入信息!' }]}
      >
        <Input />
      </Form.Item>
      {/* 密码输入框 */}
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入信息！' }]}
      >
        <Input.Password />
      </Form.Item>
      {/* 数字输入框 */}
      <Form.Item
        label="数字"
        name="number"
        rules={[{ required: true, message: '请输入信息！' }]}
      >
        <InputNumber min={1} max={10}/>
      </Form.Item>
      {/* 单选 */}
      <Radio.Group
          options={this.options}
          onChange={this.onChange3}
          value={value3}
          optionType="button"
        />
        {/* 多行输入框 */}
        <Form.Item
        style={{margin:20}}
        label="备注"
        name="textarea"
        rules={[{ required: true, message: '请输入信息！' }]}
      >
        <TextArea rows={4} />
      </Form.Item>
      {/* 下拉框 */}
      <Form.Item
        label="下拉框"
        name="select"
        rules={[{ required: true, message: '请输入信息！' }]}
      >
        <Select defaultValue="数据一" style={{ width: 120 }}>
          <Option value="jack">数据一</Option>
          <Option value="lucy">数据二</Option>
          <Option value="Yiminghe">数据三</Option>
        </Select>
      </Form.Item>
      
      {/* 提交按钮 */}
      <Form.Item style={{margin:20}}>
        <Button type="primary" htmlType="submit">
           提交
        </Button>
      </Form.Item>
    </Form>
      </Drawer>
    </>
    );
}
}

export default App;
