import React from "react";
import styled from "styled-components";

const TicketInfo=()=>{
    return(
        <StyledAppContainer>
            {/* Title Start */}
            <div className="title">購票資訊</div>
            {/* Title End */}

            {/* Picture Start */}
            <div className="pic-container">
                <StyledAppBookshelf>
                    <li></li>
                    <li></li>
                </StyledAppBookshelf>

                {/* Content Start */}
                <StyledAppContent>
                    <div className="para-1">1.</div>
                    <div className="para-2">2.</div>
                </StyledAppContent>
                {/* Content End */}
            </div>
            {/* Picture End */}
        </StyledAppContainer>
    )
}

export default TicketInfo;

const StyledAppContainer=styled.div`
    display: block;
    width: 70%;

    .title{
        color: white;
        background-color: #818B8C;
        line-height: 100px;
        padding-left: 20px;
        width: 23%;
        font-size: 50px;
    }
`

const StyledAppBookshelf=styled.ul`
    display: flex;
    list-style: none;

    & li:nth-child(1){
        width: 20%;
        height: 20px;
        background-color: #593825;
        transform: skew(0deg, 39deg);
        margin-top: 48%;
        box-shadow: 0px 50px 50px 0px rgba(0, 0, 0, 1);
    }
    & li:nth-child(2){
        width: 70%;
        height: 20px;
        background-color: #737046;
        margin-top: 56%;
        box-shadow: 0px 50px 50px 0px rgba(0, 0, 0, 1);
        
    }
`

const StyledAppContent=styled.div`
    position: absolute;
    top:0;
    left: 25%;
    font-size: 38px;
`