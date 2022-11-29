import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ticketCompleted from "../../image/ticket-completed-brown.png";
import ticketrip1 from "../../image/ticket-ripped-1-brown-sm.png";
import ticketrip2 from "../../image/ticket-ripped-2-brown-sm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faTicket,
  faVanShuttle,
  faFolderOpen,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import LinkStyle from "../Common/LinkStyle";

const Ticket = () => {
  return (
    // NavBar Start
    <StyledAppNavBar>
      <StyledAppNavBarTicket>
        <span>
          <LinkStyle to="/exhibitor">
            {/* <img alt="" /> */}
            <FontAwesomeIcon icon={faStore} className="Icon" />
          </LinkStyle>
          <img src={ticketrip2} style={{transform:'translate(-90%,-61%) rotate(55deg)'}} alt="" />
        </span>
      </StyledAppNavBarTicket>
      <StyledAppNavBarTicket>
        <span>
          <LinkStyle to="/ticketinfo">
            <img alt="" />
            <FontAwesomeIcon icon={faTicket} className="Icon" />
          </LinkStyle>
          <img src={ticketrip2} style={{transform:'translate(-90%,-61%) rotate(55deg)'}} alt="" />
        </span>
      </StyledAppNavBarTicket>
      <StyledAppNavBarTicket>
        <span>
          <LinkStyle to="/transport">
            {/* <img alt="" /> */}
            <FontAwesomeIcon icon={faVanShuttle} className="Icon" />
          </LinkStyle>
          <img src={ticketrip2} style={{transform:'translate(-90%,-61%) rotate(55deg)'}} alt="" />
        </span>
      </StyledAppNavBarTicket>
      <StyledAppNavBarTicket>
        <span>
          <LinkStyle to="/archives">
            {/* <img alt="" /> */}
            <FontAwesomeIcon icon={faFolderOpen} className="Icon" />
          </LinkStyle>
          <img src={ticketrip2} style={{transform:'translate(-90%,-61%) rotate(55deg)'}} alt="" />
        </span>
      </StyledAppNavBarTicket>
      <StyledAppNavBarTicket>
        <span>
          {/* <img alt="" /> */}
          <LinkStyle to="/contact-us">
            <FontAwesomeIcon icon={faMessage} className="Icon" />
          </LinkStyle>
          <img src={ticketrip2} style={{transform:'translate(-90%,-61%) rotate(55deg)'}} alt="" />
        </span>
      </StyledAppNavBarTicket>
    </StyledAppNavBar>
    // NavBar End
  );
};

export default Ticket;

// Layout Navbar Start \\
const StyledAppNavBar = styled.div`
  overflow: hidden;
  display: block;
  background-color: transparent;
  position: fixed;
  top:50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 99;
  /* @media (min-width: 769px) {
    position: fixed;
    left: 10%;
    bottom:10%;
    display: flex;
    flex-direction: row;
    overflow: auto;
    >div{
      transform: rotate(-90deg);
    }
  } */
`;

const StyledAppNavBarTicket = styled.div`
  position: relative;
  width: 290px;
  height: 140px;
  
  /* background-image: url(${(props) => props.img}); */
  &:after{
    content: '';
    position: absolute;
    top: 2%;
    left: 15%;
    background-color: transparent;
    background-image: url(${ticketCompleted});
    background-repeat: no-repeat;
    width: 300px;
    height: 140px;
    /* z-index: -1; */
  }

  span {
    position: absolute;
    top: 30%;
    left: 35%;
    font-size: 38px;
    .Icon {
      background-color: transparent;
      font-size: 50px;
      z-index: 99;
      top:0;
      left: 30%;
    }
  }

  &:hover::after {
    left: 5%;
  }
  &:hover .Icon{
    left: 13%;
  }

  &:active:after{
    background-image: url(${ticketrip1});
    background-repeat: no-repeat;
    transform: scale(0.91) translate(25%,-10%);
    
  }

  /* &:active img{
    display: block;
  } */

  
  /* @media (min-width: 769px) {
    left: 0%;
    
    width: 250px;
    height: 300px;
    
  }
  */
`;

// Layout Navbar End \\
