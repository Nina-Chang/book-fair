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
          {/* Content */}
          <Outlet/>
          {/* Content */}
          <Ticket/>
        </StyledAppContainer>
      </header>
    </div>
  )
}

export default Layout;


const StyledAppContainer=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
