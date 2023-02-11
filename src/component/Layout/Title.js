import React, { useContext ,useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ribbon from "../../image/ribbon-sm-1.png";
import Ticket from './Ticket';

const Title = () => {
  const {setIsClick1}=Ticket();
  const {setIsClick2}=Ticket();
  const {setIsClick3}=Ticket();
  const {setIsClick4}=Ticket();
  const {setIsClick5}=Ticket();
  function removeLocalStorage(){
    localStorage.removeItem('ticketState1');
    localStorage.removeItem('ticketState2');
    localStorage.removeItem('ticketState3');
    localStorage.removeItem('ticketState4');
    localStorage.removeItem('ticketState5');
  }
  return (
    // Title Start
    <StyledAppTitle>
      <img src={ribbon} alt="" />
      <div className="title_text">
        <Link
          to="/"
          style={{
            color: "inherit",
            textDecoration: "none",
            backgroundColor: "white",
            padding: "15px 10px",
          }}
          onClick={(()=>{
            removeLocalStorage();
            setIsClick1(false);
            setIsClick2(false);
            setIsClick3(false);
            setIsClick4(false);
            setIsClick5(false);
          })}
        >
          台北國際書展
        </Link>
      </div>
    </StyledAppTitle>
    // Title End
  );
};

export default Title;

// Layout Title Start \\
const StyledAppTitle = styled.div`
  
  img {
    transform: rotate(-90deg) scale(0.35);
    position: fixed;
    top:-5%;
    left:-10%;
    z-index: 1;
  }
  .title_text {
    writing-mode: horizontal-tb;
    display: block;
    position: fixed;
    top: 2.5%;
    left: 10%;
    font-size: 35px;
    font-weight: 800;
    z-index: 1;
  }
  @media (min-width: 576px ){
    //比手機大
    /* position: fixed;
    z-index: 1; */
    img {
      transform: rotate(-90deg) scale(0.5);
      top:-5%;
      left:-5%;
    }
    .title_text {
      writing-mode: horizontal-tb;
      display: block;
      position: fixed;
      top: 2%;
      left: 10%;
      font-size: 3.5rem;
      font-weight: 800;
      z-index: 1;
    }
    
  }
  @media (min-width: 769px){
    //比平板大
    /* position:fixed ;
    z-index: 99;
    background-color: transparent; */
    img {
      transform: rotate(0deg) scale(0.7);
      top: 2%;
      left: -2%;
    }
    .title_text {
      writing-mode: vertical-lr;
      display: block;
      position: fixed;
      top: 18%;
      left: 2%;
      font-size: 5rem;
      font-weight: 800;
    }
  }
  @media (min-width: 996px){
    img {
      left: 0%;
    }
  }
  `;
// Layout Title End \\
