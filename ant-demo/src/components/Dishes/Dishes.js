import React, { Component } from 'react'
import { Table } from 'antd'
import {
  Link
} from 'react-router-dom'
import styled from 'styled-components'

const Poster = styled.img`
  width: 30px;
`

class Dishes extends Component {

  state = {
    dishes:[
      {
          _id: '23232',
          poster: 'https://avatars3.githubusercontent.com/u/72467?v=4&s=460',
          name: '提拉米苏',
          price: 32,
          desc: '非常好吃'
      },
      {
          _id: '34343',
          poster: 'https://avatars3.githubusercontent.com/u/72467?v=4&s=460',
          name: '黑森林',
          price: 42,
          desc: '来自德国'
      }
    ]
  }

  render () {
    const columns = [
      {
        title: '海报',
        dataIndex: 'poster',
        key: 'poster',
        render: (text) =>
          <Poster src={text} alt='poster' />
      },
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price'
      },
      {
        title: '描述',
        dataIndex: 'desc',
        key: 'desc',
      },
      {
        title: '操作',
        render: () => (
          <Link to=''>删除</Link>
        )
      }
    ]
    const { dishes } = this.state
    return (
      <div className='dishes'>
        <Table rowKey={record => record._id}
          dataSource={dishes} columns={columns} />
      </div>
    )
  }
}

export default Dishes
