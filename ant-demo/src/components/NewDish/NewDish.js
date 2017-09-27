import React, { Component } from 'react'
import { Form, Button, Icon, Input } from 'antd'
import styled from 'styled-components'

const NewDishWrap = styled.div`
  max-width: 900px;
`

class NewDish extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    let data = this.props.form.getFieldsValue()
    // axios
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <NewDishWrap>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('name')(
            <Input prefix={<Icon type='user' style={{ fontSize: 14 }} />}
            placeholder='名称'
            type='text'
            name='name' />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('desc')(
            <Input prefix={<Icon type='lock' style={{ fontSize: 14 }} />}
            placeholder='描述'/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('price')(
            <Input prefix={<Icon type="pay-circle-o" style={{ fontSize: 14 }} />}
            placeholder='价格' />
            )}
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              添加
            </Button>
          </Form.Item>
        </Form>
      </NewDishWrap>
    )
  }
}

export default Form.create({})(NewDish)
