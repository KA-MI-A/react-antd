import React from 'react'
import './../App.css';
import { Table, Tag, Space  } from 'antd';
import 'antd/dist/antd.css';
class TableData extends React.Component {
  
 columns = [
    {
      title: '名字',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
   data = [
    {
      key: '1',
      name: '夏佳乐1',
      age: 32,
      address: '泗县',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: '夏佳乐2',
      age: 42,
      address: '马鞍山',
      tags: ['loser'],
    },
    {
      key: '3',
      name: '夏佳乐3',
      age: 32,
      address: '上海',
      tags: ['cool', 'teacher'],
    },
  ];
    render() {
      return (
        <Table columns={this.columns} dataSource={this.data} />
      );
    }
  }
export default TableData;
