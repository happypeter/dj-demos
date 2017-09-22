import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm'

import styled from 'styled-components'

const HomeWrap = styled.div`
  height: 100vh;
  padding-top: 80px;
`;

const FormWrap = styled.div`
  border: 1px solid #ddd;
  padding: 40px 10px 10px;
  max-width: 350px;
  margin: 0 auto;
`

class Home extends Component {
  render () {
    return (
      <HomeWrap>
        <FormWrap>
          <LoginForm />
        </FormWrap>
      </HomeWrap>
    )
  }
}

export default Home
