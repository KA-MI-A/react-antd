import React from 'react';
import { Form, Input, Button, Checkbox, Radio, InputNumber, Select, Modal } from 'antd';
import { render } from 'react-dom';
import 'antd/dist/antd.css';

const { Option } = Select;
const { TextArea } = Input;
export default class WE extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            value3: '数据一',
        };
    }
    // 显示窗口
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    // 确定按钮
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    // 取消窗口
    handleCancel = e => { 
        console.log(e);
        this.setState({
            visible: false,
        });
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
    // 单选框数据
    options = [
        { label: '数据一', value: '1' },
        { label: '数据二', value: '2' },
        { label: '数据三', value: '3' },
    ];
    //多选框数据
    array = [
        { label: 'ig', value: '1' },
        { label: 'rng', value: '2' },
        { label: 'we', value: '3' },
        { label: 'lgd', value: '4' },
        { label: 'lng', value: '5' },
        { label: 'edg', value: '6' },
    ]
    // 提交完成后触发事件
    onClick = () => {
        this.setState({ visible: false });
    }
    // 下拉框
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    render() {
        const { value3 } = this.state;
        console.log('===>',value3)
        // Modal按钮点击事件
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal
                    width={800}
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
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
                            <InputNumber min={1} max={10} />
                        </Form.Item>
                        {/* 单选框 */}
                        <Form.Item
                            label="单选框"
                            name="radio"
                        >
                             {/* 用map方法来进行循环array里的数组，onchange执行下拉框函数 */}
                            <Select style={{ width: 300 }} onChange={this.handleChange}>
                                {this.array.map((val, key) => (
                                    <Option value={val.value} key={key}>
                                        {val.label}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        {/* 下拉框 */}
                        <Form.Item
                            label="下拉框"
                            name="ts"
                        >
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
                            {/* 用map方法来进行循环，onchange执行下拉框函数 */}
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
                                {this.array.map((e) => (
                                    <Option value={e.value}>
                                        {e.label}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        {/* <Form.Item>
                            <Button type="primary" htmlType="submit" onClick={this.onClick}>
                                取消
                             </Button>
                            <Button type="primary" htmlType="submit" onClick={this.onClick}>
                                点击
                          </Button>
                        </Form.Item> */}
                    </Form>
                </Modal>
            </div>
        )
    }
}