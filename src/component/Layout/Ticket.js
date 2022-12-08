import React, { useEffect } from "react";
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
import { useNavigate } from "react-router-dom";

const defaultClickStatus = {
  IsClick1: false,
  IsClick2: false,
  IsClick3: false,
  IsClick4: false,
  IsClick5: false,
};
const Clicked = React.createContext(defaultClickStatus);

const Ticket = () => {
  const [IsClick1, setIsClick1] = React.useState(defaultClickStatus.IsClick1);
  const [IsClick2, setIsClick2] = React.useState(defaultClickStatus.IsClick2);
  const [IsClick3, setIsClick3] = React.useState(defaultClickStatus.IsClick3);
  const [IsClick4, setIsClick4] = React.useState(defaultClickStatus.IsClick4);
  const [IsClick5, setIsClick5] = React.useState(defaultClickStatus.IsClick5);
  const history = useNavigate();
  useEffect(() => {
    try {
      // if(history('/exhibitor')&&IsClick1===true){
      //   setIsClick1(true);
      // }
      // if(IsClick1===false){
      //   setIsClick1(true);
      //   console.log('success');
      // }
      // if(!history('/')&&IsClick2===true){
      //   setIsClick2(true);
      // }
      // if(!history('/')&&IsClick3===true){
      //   setIsClick3(true);
      // }
      // if(!history('/')&&IsClick4===true){
      //   setIsClick4(true);
      // }
      // if(!history('/')&&IsClick5===true){
      //   setIsClick5(true);
      // }
    } catch {}
  }, []);
  return (
    // NavBar Start
    <StyledAppNavBar>
      <StyledAppNavBarTicket
        onClick={() => {
          if (IsClick1 === false) {
            setIsClick1(true);
            setIsClick2(false);
            setIsClick3(false);
            setIsClick4(false);
            setIsClick5(false);
          }
          // else{
          //   setIsClick1(false);
          // }
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
            {/* <FontAwesomeIcon icon={faStore} className="Icon" /> */}
          </LinkStyle>
          {IsClick1 ? (
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

      <StyledAppNavBarTicket
        onClick={() => {
          if (IsClick2 === false) {
            setIsClick1(false);
            setIsClick2(true);
            setIsClick3(false);
            setIsClick4(false);
            setIsClick5(false);
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
            {/* <FontAwesomeIcon icon={faTicket} className="Icon" /> */}
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
          {/* <img src={ticketrip2} style={{transform:'translate(-90%,-61%) rotate(55deg)'}} alt="" /> */}
        </span>
      </StyledAppNavBarTicket>

      <StyledAppNavBarTicket
        onClick={() => {
          if (IsClick3 === false) {
            setIsClick1(false);
            setIsClick2(false);
            setIsClick3(true);
            setIsClick4(false);
            setIsClick5(false);
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
            {/* <FontAwesomeIcon icon={faVanShuttle} className="Icon" /> */}
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
          {/* <img src={ticketrip2} style={{transform:'translate(-90%,-61%) rotate(55deg)'}} alt="" /> */}
        </span>
      </StyledAppNavBarTicket>
      <StyledAppNavBarTicket
        onClick={() => {
          if (IsClick4 === false) {
            setIsClick1(false);
            setIsClick2(false);
            setIsClick3(false);
            setIsClick4(true);
            setIsClick5(false);
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
            {/* <FontAwesomeIcon icon={faFolderOpen} className="Icon" /> */}
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
          {/* <img src={ticketrip2} style={{transform:'translate(-90%,-61%) rotate(55deg)'}} alt="" /> */}
        </span>
      </StyledAppNavBarTicket>
      <StyledAppNavBarTicket
        onClick={() => {
          if (IsClick5 === false) {
            setIsClick1(false);
            setIsClick2(false);
            setIsClick3(false);
            setIsClick4(false);
            setIsClick5(true);
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
            {/* <FontAwesomeIcon icon={faMessage} className="Icon" /> */}
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
          {/* <img src={ticketrip2} style={{transform:'translate(-90%,-61%) rotate(55deg)'}} alt="" /> */}
        </span>
      </StyledAppNavBarTicket>
      


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
    transform: rotate(90deg) scale(0.65);
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
    /* z-index: 99; */
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
  background-image: url(${ticketrip1});
  background-repeat: no-repeat;
  transform: scale(0.91) translate(-8%, -87%);
  z-index: 1;
`;
const PutTicketRip2 = styled(StyledAppNavBarTicket)`
  background-image: url(${ticketrip2});
  background-repeat: no-repeat;
  transform: translate(-90%, -103%) rotate(58deg);
  top: -18px;
  left: 30%;
  z-index: 0;
`;

// Layout Navbar End \\
