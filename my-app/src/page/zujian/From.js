import React, { Component } from 'react';
import { Form, Input, Button, Checkbox,Radio,InputNumber   } from 'antd';
const { TextArea } = Input;
class From extends Component {
  state = {
    value3: 'Apple',
  };
   onFinish = (values) => {
    console.log('Success:', values);
  };
   onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  onChange3 = e => {
    console.log('radio3 checked', e.target.value);
    this.setState({
      value3: e.target.value,
    });
  };
   options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  render() {
    const { value3 } = this.state;
      return (
        <Form
          name="id"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          {/* 输入框 */}
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* 密码框 */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          {/* 数字框 */}
          <Form.Item
            label="数字"
            name="number"
          >
            <InputNumber min={1} max={10}/>
          </Form.Item>
          {/* 单选框 */}
          <Form.Item
            label="单选框"
            name="textarea"
          >
         <Radio.Group
          options={this.options}
          onChange={this.onChange3}
          value={value3}
          optionType="button"
        />
          </Form.Item>
          {/* 多行输入框 */}
          <Form.Item
            label="多行输入框"
            name="textarea"
          >
          <TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              点击
            </Button>
          </Form.Item>
        </Form>
      );
    };
}
export default From;