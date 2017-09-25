import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar'

const DashBoardWrap = styled.div`
  display: flex;
  height: 100vh;
`

const SideWrap = styled.div`
  width: 150px;
  border: 1px solid blue;
`

const MainWrap = styled.div`
  flex-grow: 1;
  border: 1px solid green;
`

class DashBoard extends Component {
  logout = () => {
    window.localStorage.removeItem('userId')
    this.props.history.push('/')
  }

  render () {
    return (
      <DashBoardWrap>
        <SideWrap>
          <Sidebar onLogout={this.logout}/>
        </SideWrap>
        <MainWrap>
          MainWrap
        </MainWrap>
      </DashBoardWrap>
    )
  }
}

export default DashBoard
