import React from 'react'
import './../App.css';
import { Drawer, Button,Form, Input,InputNumber,Radio ,Select,Layout, Menu  } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import DrewerForm from './DrewerForm';
import TableData from './TableData';
import Modal from './Modal';
import styles from './indexCSS.css'
import 'antd/dist/antd.css';
const { Header, Sider, Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;
class SiderDemo extends React.Component {
    state = {
      collapsed: false,
    };
  
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
  
    render() {
      return (
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className={styles.logo} />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className={styles.OUT}>
            <Header className={styles.SLB} style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: `${styles.trigger}`,
                onClick: this.toggle,
              })}
            </Header>
            <Content
              className={styles.SLB}
              style={{
                margin: '24px 16px',
                padding:  26,
                minHeight: 600,
              }}
            >
              {/* 抽屉 */}
              <DrewerForm/>
              {/* 按钮 */}
              <Modal/>
              {/* 表格 */}
              <TableData/>
            </Content>
          </Layout>
        </Layout>
      );
    }
  }
export default SiderDemo;
