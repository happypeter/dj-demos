import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import styled from 'styled-components'
const FormItem = Form.Item;

const StyledButton = styled(Button)`
  width: 100%;
`

class LoginForm extends Component {
  render () {
    return (
      <div className='LoginForm'>
        <Form>
          <FormItem>
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}  type='text' placeholder="Username" />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type='password' placeholder="Password" />
          </FormItem>
          <FormItem>
            <StyledButton type="primary" htmlType="submit">
              登录
            </StyledButton>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default LoginForm
