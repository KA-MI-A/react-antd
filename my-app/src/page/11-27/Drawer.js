import React from 'react';
// import './../App.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox,Radio,InputNumber,Drawer,Select   } from 'antd';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
const { TextArea } = Input;
const { Option } = Select;
class HelloWorld extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        visible:false,
        value3: '数据一',
      };
    }
    // 显示弹窗
    showDrawer = () => {
      this.setState({visible:true});
    };
    // 关闭弹窗
     onClose= () => {
      this.setState({visible:false});
    };
    // 表单提交成功触发事件
     onFinish = (values) => {
      console.log('Success:', values);
    };
    // 表单提交失败触发事件
     onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    // 多选框触发事件
    onChange3 = e => {
      console.log('radio3 checked', e.target.value);
      this.setState({
        value3: e.target.value,
      });
    };
    // 多选框数据
     options = [
      { label: '数据一', value: '1' },
      { label: '数据二', value: '2' },
      { label: '数据三', value: '3' },
    ];
    arrayData=[
      { label: '数据测试1', value: '1' },
      { label: '数据测试2', value: '2' },
      { label: '数据测试3', value: '3' },
      { label: '数据测试4', value: '4' },
      { label: '数据测试5', value: '5' },
      { label: '数据测试6', value: '6' },
    ]
    // 提交完成后触发事件
    onClick=()=>{
      this.setState({visible:false});
    }
    // 下拉框
    handleChange=(value) =>{
      console.log(`selected ${value}`);
    }
    render(){
      const { value3 } = this.state;
      return(
        <div>
          <Button type="primary" onClick={this.showDrawer}>
          Open
          </Button>
          <Drawer
            width={650}
            title="新增"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            // footer={
            //  <>
            //    <Button type="primary" htmlType="submit" onClick={this.onClick}>
            //     取消
            //    </Button>
            //    <Button type="primary" htmlType="submit" onClick={this.onClick}>
            //      点击
            //    </Button>
            //  </>
            // }
          >
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
            name="radio"
          >
         <Radio.Group
          options={this.options}
          onChange={this.onChange3}
          value={1}
          optionType="button"
        />
          </Form.Item>
            {/* 下拉框 */}
          <Form.Item
            label="下拉框"
            name="ts"
          >
          <TextArea rows={4} />
          </Form.Item>
          {/* 多行输入框 */}
          <Form.Item
            label="多行输入框"
            name="textarea"
          >
          <TextArea rows={4} />
          </Form.Item>
          
            {/* 下拉框 */}
          <Form.Item
            label="下拉框"
            name="dropdown"
          >
              <Select style={{ width: 120 }} onChange={this.handleChange}>
                 {/* <Option value="jack">Jack</Option>
                 <Option value="lucy">Lucy</Option>
                 <Option value="disabled">Disabled</Option>
                 <Option value="Yiminghe">yiminghe</Option> */}
                 {/* =============================================== */}
                {/* { this.arrayData.map((val,key) => ( 
                   <Option value={val.value} key={key}>
                     {val.label}
                   </Option>
                ))} */}
                 {/* ================================= */}
                 {this.arrayData.map(e => (
                   <Option value={e.value}>
                     {e.label}
                     </Option>
                 ))}
              </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={this.onClick}>
             取消
            </Button>
            <Button type="primary" htmlType="submit" onClick={this.onClick}>
              点击
            </Button>
          </Form.Item>
        </Form>
          </Drawer>
        </div>
      )
    }
  }
  export default HelloWorld;