import React, { useContext, useEffect } from "react";
import styled from "styled-components";
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
  const [IsClick1, setIsClick1] = React.useState(false);
  const [IsClick2, setIsClick2] = React.useState(false);
  const [IsClick3, setIsClick3] = React.useState(false);
  const [IsClick4, setIsClick4] = React.useState(false);
  const [IsClick5, setIsClick5] = React.useState(false);
  useEffect(()=>{
    const ticketState1=JSON.parse(localStorage.getItem("ticketState1"));
    const ticketState2=JSON.parse(localStorage.getItem("ticketState2"));
    const ticketState3=JSON.parse(localStorage.getItem("ticketState3"));
    const ticketState4=JSON.parse(localStorage.getItem("ticketState4"));
    const ticketState5=JSON.parse(localStorage.getItem("ticketState5"));
    if(ticketState1==="state:true"){
      setIsClick1(true);
    }
    if(ticketState2==="state:true"){
      setIsClick2(true);
    }
    if(ticketState3==="state:true"){
      setIsClick3(true);
    }
    if(ticketState4==="state:true"){
      setIsClick4(true);
    }
    if(ticketState5==="state:true"){
      setIsClick5(true);
    }
  },[]);
  return (
    // NavBar Start
    <StyledAppNavBar>
      {/* Ticket1 Start */}
      <StyledAppNavBarTicket
        onClick={() => {
          if (IsClick1 === false) {
            setIsClick1(true);
            localStorage.setItem("ticketState1",JSON.stringify("state:true"));
            setIsClick2(false);
            localStorage.removeItem("ticketState2");
            setIsClick3(false);
            localStorage.removeItem("ticketState3");
            setIsClick4(false);
            localStorage.removeItem("ticketState4");
            setIsClick5(false);
            localStorage.removeItem("ticketState5");
          }
        }}
      >
        <span>
          <LinkStyle to="/exhibitor">
            {IsClick1 ? (
              <FontAwesomeIcon
                icon={faStore}
                style={{ left: "-20%" }}
                className="Icon"
              />
            ) : (
              <FontAwesomeIcon icon={faStore} className="Icon" />
            )}
          </LinkStyle>
          {IsClick1 ? (
            <div className="TktContainer">
              <PutTicketRip />
              <PutTicketRip2 />
            </div>
          ) : (
            <div className="TktContainer">
              <PutTicketRip2 style={{ display: "none" }} />
              <PutTicket />
            </div>
          )}
        </span>
      </StyledAppNavBarTicket>
      {/* Ticket1 End */}

      {/* Ticket2 Start */}
      <StyledAppNavBarTicket
        onClick={() => {
          if (IsClick2 === false) {
            setIsClick1(false);
            localStorage.removeItem("ticketState1");
            setIsClick2(true);
            localStorage.setItem("ticketState2",JSON.stringify("state:true"));
            setIsClick3(false);
            localStorage.removeItem("ticketState3");
            setIsClick4(false);
            localStorage.removeItem("ticketState4");
            setIsClick5(false);
            localStorage.removeItem("ticketState5");
          }
        }}
        >
        <span>
          <LinkStyle to="/ticketinfo">
            {IsClick2 ? (
              <FontAwesomeIcon
              icon={faTicket}
              style={{ left: "-20%" }}
              className="Icon"
              />
              ) : (
              <FontAwesomeIcon icon={faTicket} className="Icon" />
              )}
          </LinkStyle>
          {IsClick2 ? (
            <div>
              <PutTicketRip />
              <PutTicketRip2 />
            </div>
          ) : (
            <div>
              <PutTicketRip2 style={{ display: "none" }} />
              <PutTicket />
            </div>
          )}
        </span>
      </StyledAppNavBarTicket>
      {/* Ticket2 End */}

      {/* Ticket3 Start */}
      <StyledAppNavBarTicket
        onClick={() => {
          if (IsClick3 === false) {
            setIsClick1(false);
            localStorage.removeItem("ticketState1");
            setIsClick2(false);
            localStorage.removeItem("ticketState2");
            setIsClick3(true);
            localStorage.setItem("ticketState3",JSON.stringify("state:true"));
            setIsClick4(false);
            localStorage.removeItem("ticketState4");
            setIsClick5(false);
            localStorage.removeItem("ticketState5");
          }
        }}
        >
        <span>
          <LinkStyle to="/transport">
            {IsClick3 ? (
              <FontAwesomeIcon
              icon={faVanShuttle}
              style={{ left: "-20%" }}
              className="Icon"
              />
              ) : (
                <FontAwesomeIcon icon={faVanShuttle} className="Icon" />
                )}
          </LinkStyle>
          {IsClick3 ? (
            <div>
              <PutTicketRip />
              <PutTicketRip2 />
            </div>
          ) : (
            <div>
              <PutTicketRip2 style={{ display: "none" }} />
              <PutTicket />
            </div>
          )}
        </span>
      </StyledAppNavBarTicket>
      {/* Ticket3 End */}

      {/* Ticket4 Start */}
      <StyledAppNavBarTicket
        onClick={() => {
          if (IsClick4 === false) {
            setIsClick1(false);
            localStorage.removeItem("ticketState1");
            setIsClick2(false);
            localStorage.removeItem("ticketState2");
            setIsClick3(false);
            localStorage.removeItem("ticketState3");
            setIsClick4(true);
            localStorage.setItem("ticketState4",JSON.stringify("state:true"));
            setIsClick5(false);
            localStorage.removeItem("ticketState5");
          }
        }}
        >
        <span>
          <LinkStyle to="/archives">
            {IsClick4 ? (
              <FontAwesomeIcon
              icon={faFolderOpen}
              style={{ left: "-20%" }}
              className="Icon"
              />
              ) : (
                <FontAwesomeIcon icon={faFolderOpen} className="Icon" />
                )}
          </LinkStyle>
          {IsClick4 ? (
            <div>
              <PutTicketRip />
              <PutTicketRip2 />
            </div>
          ) : (
            <div>
              <PutTicketRip2 style={{ display: "none" }} />
              <PutTicket />
            </div>
          )}
        </span>
      </StyledAppNavBarTicket>
      {/* Ticket4 End */}

      {/* Ticket5 Start */}
      <StyledAppNavBarTicket
        onClick={() => {
          if (IsClick5 === false) {
            setIsClick1(false);
            localStorage.removeItem("ticketState1");
            setIsClick2(false);
            localStorage.removeItem("ticketState2");
            setIsClick3(false);
            localStorage.removeItem("ticketState3");
            setIsClick4(false);
            localStorage.removeItem("ticketState4");
            setIsClick5(true);
            localStorage.setItem("ticketState5",JSON.stringify("state:true"));
          }
        }}
        >
        <span>
          <LinkStyle to="/contact-us">
            {IsClick5 ? (
              <FontAwesomeIcon
              icon={faMessage}
              style={{ left: "-20%" }}
              className="Icon"
              />
              ) : (
                <FontAwesomeIcon icon={faMessage} className="Icon" />
                )}
          </LinkStyle>
          {IsClick5 ? (
            <div>
              <PutTicketRip />
              <PutTicketRip2 />
            </div>
          ) : (
            <div>
              <PutTicketRip2 style={{ display: "none" }} />
              <PutTicket />
            </div>
          )}
        </span>
      </StyledAppNavBarTicket>
      {/* Ticket5 End */}
    </StyledAppNavBar>
    // NavBar End
  );
};

export default Ticket;

// Layout Navbar Start \\
const StyledAppNavBar = styled.div`
  display: block;
  width: 100%;
  background-color: transparent;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 4;
  display: flex;
  >div{
    transform: rotate(90deg) scale(0.6);
  }
  
  @media (min-width: 577px) {
    height: 100%;
    /* overflow: hidden; */
    display: block;
    /* background-color: transparent; */
    /* position: fixed; */
    top: 50%;
    left: 70%;
    transform: translateY(-50%);
    >div{
      transform: rotate(0deg) scale(0.8);
    } 
  }
  @media (min-width: 769px) {
    left: 80%;
    >div{
      transform: rotate(0deg) scale(1);
    } 
  }
  /* position: fixed;
  left: 10%;
  bottom:10%;
  display: flex;
  flex-direction: row;
  overflow: auto;
  /* >div{
    transform: rotate(-90deg);
  } */
`;

const StyledAppNavBarTicket = styled.div`
  background-color: transparent;
  position: relative;
  width: 290px;
  height: 140px;
    
  span {
    position: absolute;
    top: -10%;
    left: 35%;
    font-size: 38px;
  }
  .Icon {
    background-color: transparent;
    font-size: 50px;
    z-index: 2;
    line-height: 50px;
    top: 20px;
    left: -15%;
    padding: 32px 82px;
  }

  &:hover ::after {
    left: -30%;
  }
  &:hover .Icon {
    left: -20%;
  }

  /* @media (min-width: 769px) {
    left: 0%;
    
    width: 250px;
    height: 300px;
    
  }
  */
`;

const PutTicket = styled(StyledAppNavBarTicket)`
  background-color: transparent;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: -70%;
    left: -20%;
    background-color: transparent;
    width: 100%;
    background-image: url(${ticketCompleted});
    background-repeat: no-repeat;
    width: 300px;
    height: 140px;
    z-index: 1;
  }
`;
const PutTicketRip = styled(StyledAppNavBarTicket)`
  background-color: transparent;
  background-image: url(${ticketrip1});
  background-repeat: no-repeat;
  transform: scale(0.91) translate(-8%, -87%);
  z-index: 1;
`;
const PutTicketRip2 = styled(StyledAppNavBarTicket)`
  width:50%;
  background-color: transparent;
  background-image: url(${ticketrip2});
  background-repeat: no-repeat;
  transform: translate(-98%, -159%) rotate(58deg);
  z-index: 0;
`;

// Layout Navbar End \\
