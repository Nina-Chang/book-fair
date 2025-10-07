import React from "react";
import "../App/App.css";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Title from "./Title";
import Ticket from "./Ticket";

function Layout() {
  const [IsClick1, setIsClick1] = React.useState(false);
  const [IsClick2, setIsClick2] = React.useState(false);
  const [IsClick3, setIsClick3] = React.useState(false);
  const [IsClick4, setIsClick4] = React.useState(false);
  const [IsClick5, setIsClick5] = React.useState(false);

  return (
    <div className="App">
      <StyledAppContainer>
        <Title
          setIsClick1={setIsClick1}
          setIsClick2={setIsClick2}
          setIsClick3={setIsClick3}
          setIsClick4={setIsClick4}
          setIsClick5={setIsClick5}
        />
        <ClearfixTitle />
        {/* Content */}
        <Outlet />
        {/* Content */}
        <ClearfixTicket />
        <Ticket
          IsClick1={IsClick1}
          IsClick2={IsClick2}
          IsClick3={IsClick3}
          IsClick4={IsClick4}
          IsClick5={IsClick5}
          setIsClick1={setIsClick1}
          setIsClick2={setIsClick2}
          setIsClick3={setIsClick3}
          setIsClick4={setIsClick4}
          setIsClick5={setIsClick5}
        />
      </StyledAppContainer>
    </div>
  );
}

export default Layout;

const StyledAppContainer = styled.div`
  @media (min-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
const ClearfixTitle = styled.div`
  width: 0px;
  @media (min-width: 576px) {
    width: 10px;
  }
  @media (min-width: 769px) {
    width: 110px;
  }
  @media (min-width: 996px) {
    width: 0px;
  }
`;

const ClearfixTicket = styled.div`
  width: 0px;
  @media (min-width: 576px) {
    width: 200px;
  }
  @media (min-width: 769px) {
    width: 170px;
  }
  @media (min-width: 996px) {
    width: 150px;
  }
`;
