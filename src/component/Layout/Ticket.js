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
        <img src={ticketCompleted} alt="" />
        <span>
          <LinkStyle to="/exhibitor">
            <FontAwesomeIcon icon={faStore} className="Icon" />
          </LinkStyle>
        </span>
      </StyledAppNavBarTicket>
      <StyledAppNavBarTicket>
        <img src={ticketCompleted} alt="" />
        <span>
          <LinkStyle to="/ticketinfo">
            <FontAwesomeIcon icon={faTicket} className="Icon" />
          </LinkStyle>
        </span>
      </StyledAppNavBarTicket>
      <StyledAppNavBarTicket>
        <img src={ticketCompleted} alt="" />
        <span>
          <LinkStyle to="/transport">
            <FontAwesomeIcon icon={faVanShuttle} className="Icon" />
          </LinkStyle>
        </span>
      </StyledAppNavBarTicket>
      <StyledAppNavBarTicket>
        <img src={ticketCompleted} alt="" />
        <span>
          <LinkStyle to="/archives">
            <FontAwesomeIcon icon={faFolderOpen} className="Icon" />
          </LinkStyle>
        </span>
      </StyledAppNavBarTicket>
      <StyledAppNavBarTicket>
        <img src={ticketCompleted} alt="" />
        <span>
          <LinkStyle to="/contact-us">
            <FontAwesomeIcon icon={faMessage} className="Icon" />
          </LinkStyle>
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
  /* position: fixed; */
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
  top: 2%;
  left: 15%;
  background-color: transparent;
  background-image: url({ticketCompleted});
  width: 250px;
  height: 130px;
  /* background-image: url(${(props) => props.img}); */
  /* width: 100%;
  height: auto; */

  &:hover {
    left: 5%;
  }

  &:active {
    background-image: url(${ticketrip1});
  }

  span {
    position: absolute;
    top: 30%;
    left: 35%;
    font-size: 38px;
    background-color: #bf9b7a;
    .Icon {
      background-color: transparent;
      font-size: 50px;
    }
  }
  /* @media (min-width: 769px) {
    left: 0%;
    
    width: 250px;
    height: 300px;
    
  }
  */
`;
// const LinkStyle = styled(Link)`
//   color: inherit;
//   text-decoration: none;
//   background-color: #bf9b7a;
// `;

// const StyledIcon=styled.FontAwesomeIcon`
//   background-color: transparent;
//   color: red;
// `

// Layout Navbar End \\
