import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const LinkStyle = styled(Link)`
  color: inherit;
  text-decoration: none;
  background-color: transparent;
  &:hover{
    color: black;
  }
`;

export default LinkStyle;