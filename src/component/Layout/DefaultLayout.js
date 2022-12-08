import React from 'react';
import '../App/App.css'
import styled from 'styled-components'
import{Outlet}from "react-router-dom";
import Title from './Title';
import Ticket from './Ticket';

function Layout(){
  return (
    <div className="App">
      <header className="App-header">
        <StyledAppContainer>
          <Title/>
          <ClearfixTitle/>
          {/* Content */}
          <Outlet/>
          {/* Content */}
          <ClearfixTicket/>
          <Ticket/>
        </StyledAppContainer>
      </header>
    </div>
  )
}

export default Layout;


const StyledAppContainer=styled.div`
  /* display: flex; */
  /* flex-direction: row; */
  /* justify-content: space-between; */
  @media (min-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
const ClearfixTitle=styled.div`
  @media (min-width: 576px) {
    width: 10px;
  }
  width: 0px;
  `

const ClearfixTicket=styled.div`
  @media (min-width: 576px) {
    width: 200px;
  }
  width: 0px;
`