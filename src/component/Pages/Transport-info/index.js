import React from "react";
import styled from "styled-components";

const Trasport=()=>{
    return (
        <StyledAppContainer>
            {/* Title Start */}
            <div className="title">交通資訊</div>
            {/* Title End */}

            {/* Content Start */}
            <div className="content">
                <div className="para-1">1. ....</div>
                <div className="para-2">2. ....</div>
                <div className="para-3">3. ....</div>
            </div>
            {/* Content End */}

            {/* Picture Start */}
            <StyledAppPicContainer>
                <div className="pic"></div>
                <div className="pic-bottom"></div>
                <StyledAppBracket1>
                    <div className="pic-bracket-1"></div>
                    <div className="pic-bracket-2"></div>
                </StyledAppBracket1>
                <StyledAppBracket2>
                    <div className="pic-bracket-3"></div>
                    <div className="pic-bracket-4"></div>
                </StyledAppBracket2>
                <div></div>
            </StyledAppPicContainer>
            {/* Picture End */}
        </StyledAppContainer>
    )
}

export default Trasport

const StyledAppContainer=styled.div`
    display: block;
    width: 70%;
    .title{
        line-height: 100px;
        padding-left: 22px;
        width: 24%;
        font-size: 50px;
        color: white;
        background-color: #737046;
    }

    .content{
        font-size: 35px;
    }
`

const StyledAppPicContainer=styled.div`
    margin-top: 35%;
    .pic{
        width: 650px;
        height: 60px;
        background-color: #818B8C;
        margin-left: 20px;
        /* box-shadow: inset 0px -3px 2px -4px rgba(0, 0, 0, 1); */
        box-shadow: inset 0px -40px 15px -40px rgba(0, 0, 0, 1);
    }
    .pic-bottom{
        width: 700px;
        height: 40px;
        background-color: #818B8C;
        /* box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 1); */
        box-shadow: 0px 50px 50px 0px rgba(0, 0, 0, 1);
    }
`

const StyledAppBracket1=styled.div`
    position: absolute;
    left: 60px;
    z-index: 3;
    /* box-shadow: inset 0px 12px 10px -10px rgba(0, 0, 0, 1); */
    box-shadow: inset 0px 100px 100px -100px rgba(0, 0, 0, 1);
    .pic-bracket-1{
        width: 20px;
        height: 60px;
        background-color: black;
    }
    .pic-bracket-2{
        position: absolute;
        bottom: 10px;
        left: 7px;
        width: 20px;
        height: 50px;
        background-color: rgb(35, 35, 35);
        transform: skewX(-15deg);
    }
`

const StyledAppBracket2=styled.div`
    position: absolute;
    left: 640px;
    z-index: 3;
    box-shadow: inset 0px 12px 10px -10px rgba(0, 0, 0, 1);
    .pic-bracket-3{
        width: 20px;
        height: 60px;
        background-color: black;
    }
    .pic-bracket-4{
        position: absolute;
        top:0;
        left: 7px;
        width: 20px;
        height: 50px;
        background-color: rgb(35, 35, 35);
        transform: skewX(-15deg);
    }
`