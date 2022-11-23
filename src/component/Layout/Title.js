import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ribbon from "../../image/ribbon-sm-1.png";

const Title = () => {
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
    transform: rotate(-90deg) scale(0.75);
  }
  .title_text {
    writing-mode: horizontal-tb;
    display: block;
    position: fixed;
    top: 2.5%;
    left: 12%;
    font-size: 3rem;
    font-weight: 800;
    z-index: 1;
  }
  @media (min-width: 769px) {
    //比平板大
    /* position:fixed ;
        z-index: 99;
        background-color: transparent; */
    img {
      transform: rotate(0deg);
    }
    .title_text {
      writing-mode: vertical-lr;
      display: block;
      position: relative;
      top: -1%;
      left: 12%;
      font-size: 5rem;
      font-weight: 800;
    }
  }
`;
// Layout Title End \\
