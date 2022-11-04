import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import ribbon from '../../image/ribbon-sm-1.png';

const Title=()=>{
    return(
        // Title Start 
        <StyledAppTitle>
            <img src={ribbon} alt=""/>
            <div className='title_text'><Link to='/' style={{color:'inherit',textDecoration:'none'}}>台北國際書展</Link></div>
        </StyledAppTitle>
        // Title End
    );
}

export default Title;

// Layout Title Start \\
const StyledAppTitle=styled.div`

.title_text{
  writing-mode: vertical-lr;
  display: block;
  position: relative;
  top:0%;
  left: 12%;
  font-size:5rem;
  font-weight: 800;
  padding: 0;
}
`
// Layout Title End \\