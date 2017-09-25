import React, { Component } from 'react'
import styled from 'styled-components'

const SidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Navbar = styled.div`
  flex-grow: 1;
`

const LogoutArea = styled.div`
  min-height: 50px;
  display: flex;
`

const LogoutText = styled.div`
  flex-basis: 40px;
  background-color: #ff8a00;
  text-align: center;
  color: white;
  line-height: 50px;
  cursor: pointer;
`

const Username = styled.div`
  flex-grow: 1;
  line-height: 50px;
  padding: 0 5px;
`


class Sidebar extends Component {

  render () {
    return (
      <SidebarWrap>
        <Navbar />
        <LogoutArea>
          <LogoutText
            onClick={this.props.onLogout}
            >
            登出
          </LogoutText>
          <Username>
            admin
          </Username>
        </LogoutArea>
      </SidebarWrap>
    )
  }
}

export default Sidebar
