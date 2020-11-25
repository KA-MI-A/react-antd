import React, {Component} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

class From extends Component{
    render(){
      const Demo = () => {
        const onFinish = (values) => {
          console.log('Success:', values);
        };
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };
        const layout = {
          labelCol: {
            span: 8,
          },
          wrapperCol: {
            span: 16,
          },
        };
        const tailLayout = {
          wrapperCol: {
            offset: 8,
            span: 16,
          },
        };

        return (
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        );
      };
      return(
        <>
            <Demo />
        </>
      )
    }
  }
  export default From;