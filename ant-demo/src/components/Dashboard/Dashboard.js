import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar'
import Dishes from '../Dishes/Dishes'
import Orders from '../Orders/Orders'
import {
  withRouter,
  Route
} from 'react-router-dom'

const DashBoardWrap = styled.div`
  display: flex;
  height: 100vh;
`

const TopHeader = styled.div`
  height: 64px;
  background-color: #404040;
  color: #fff;
  width: 100%;
  padding-left: 72px;
  line-height: 64px;
  flex-shrink: 0;
  position: fixed;
  z-index: 999;
`

const SideWrap = styled.div`
  width: 150px;
  border: 1px solid blue;
`

const MainWrap = styled.div`
  flex-grow: 1;
  border: 1px solid green;
`

const MainContent = styled.div`
  margin: 88px 24px 24px;
  flex-grow: 1;
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
          <TopHeader />
          <MainContent>
            <Route path='/dashboard/dishes' component={Dishes} />
            <Route path='/dashboard/orders' component={Orders} />
          </MainContent>
        </MainWrap>
      </DashBoardWrap>
    )
  }
}

export default withRouter(DashBoard)
