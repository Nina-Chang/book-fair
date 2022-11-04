import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import ticketCompleted from '../../image/ticket-completed-brown.png';

const Ticket=()=>{
    return(
        // NavBar Start
        <StyledAppNavBar>
        <StyledAppNavBarTicket>
          <img src={ticketCompleted} alt=""/>
          <span><Link to='/exhibitor' style={{color:'inherit',textDecoration:'none',backgroundColor:'#BF9B7A'}}>參展商</Link></span>
        </StyledAppNavBarTicket>
        <StyledAppNavBarTicket>
          <img src={ticketCompleted} alt=""/>
          <span><Link to='/ticketinfo' style={{color:'inherit',textDecoration:'none',backgroundColor:'#BF9B7A'}}>購票資訊</Link></span>
        </StyledAppNavBarTicket>
        <StyledAppNavBarTicket>
          <img src={ticketCompleted} alt=""/>
          <span><Link to='/trasport' style={{color:'inherit',textDecoration:'none',backgroundColor:'#BF9B7A'}}>交通資訊</Link></span>
        </StyledAppNavBarTicket>
        <StyledAppNavBarTicket>
          <img src={ticketCompleted} alt=""/>
          <span><Link to='/archives' style={{color:'inherit',textDecoration:'none',backgroundColor:'#BF9B7A'}}>檔案</Link></span>
        </StyledAppNavBarTicket>
        <StyledAppNavBarTicket>
          <img src={ticketCompleted} alt=""/>
          <span><Link to='/contact-us' style={{color:'inherit',textDecoration:'none',backgroundColor:'#BF9B7A'}}>聯絡我們</Link></span>
        </StyledAppNavBarTicket>
      </StyledAppNavBar>
        // NavBar End  
    );
}

export default Ticket;

// Layout Navbar Start \\
const StyledAppNavBar=styled.div`
  overflow: hidden;
  display: block;
  background-color: transparent;
  `
const StyledAppNavBarTicket=styled.div`
  position: relative;
  top:0;
  left: 15%;
  background-color: transparent;
  
  &:hover{
    left: 5%;
  }
  
  span{
    position:absolute;
    top:40%;
    left:5%;
    font-size: 38px;
    background-color: #BF9B7A;
  }
`
// Layout Navbar End \\