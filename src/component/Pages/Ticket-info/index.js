import React from "react";
import styled from "styled-components";
import ticket from '../../../image/ticket-yellow-removebg.png'
import ClearfixTitle from "../../Common/ClearfixTitle";

const StyledAppContainer=styled.div`
    display: block;
    width: 85%;
    .title{
        color: white;
        background-color: #818B8C;
        line-height: 60px;
        padding:0px 10px;
        margin: 0% 10% 0 10%;
        width: fit-content;
        font-size: 30px;
    }
    .title-sm{
        color: #737046;
        line-height: 50px;
        font-size: 30px;
        margin-left: 10%;
        font-weight: 600;
    }
    @media (min-width: 576px) {
        width: 90%;
        .title{
            line-height: 90px;
            padding:0px 20px;
            margin: 0% 0% 0 10%;
            font-size: 45px;
        }
        .title-sm{
            line-height: 80px;
            font-size: 38px;
        }
    }
    @media (min-width: 769px) {
        .title{
            line-height: 100px;
            font-size: 50px;
        }
        .title-sm{
            line-height: 90px;
            font-size: 45px;
        }
        ${ClearfixTitle}{
            display: none;
        }
    }
    @media (min-width: 996px) {
        width: 76%;
    }
`
const StyledAppPicContainer=styled.div`
    width:96%;
    margin-left:10%;
    @media (min-width: 576px) {
        width:85%;
    }
    @media (min-width: 769px) {
        width:84%;
        margin-top: 4%;
        margin-left:5%;
    }
    @media (min-width: 996px) {
        width: 78%;
        margin-top: 0%;
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
        margin-top: 174.5%;
        box-shadow: 0px 50px 50px 0px rgba(0, 0, 0, 1);
        display: none;
    }
    & li:nth-child(2){
        width: 100%;
        height: 20px;
        background-color: #737046;
        margin-top: 182%;
        box-shadow: 0px 50px 50px 0px rgba(0, 0, 0, 1);
        display: none;
    }
    @media (min-width:576px) {
        & li:nth-child(1){
            margin-top: 102%;
            margin-left: -10%;
            display: block;
        }
        & li:nth-child(2){
            width: 90%;
            margin-top: 110%;
            display: block;
        }
    }
    @media (min-width:769px) {
        & li:nth-child(1){
            margin-top: 91.5%;
            margin-left: 0%;
            display: block;
        }
        & li:nth-child(2){
            width: 90%;
            margin-top: 99%;
            margin-left: 0%;
            display: block;
        }
    }
    @media (min-width:996px) {
        & li:nth-child(1){
            margin-top: 69%;
            margin-left: 0%;
            display: block;
        }
        & li:nth-child(2){
            width: 70%;
            margin-top: 77%;
            display: block;
        }
    }
`

const StyledAppContent=styled.div`
    position: absolute;
    top:0;
    font-size: 30px;
    img{
        width:100%;
    }
    @media (min-width: 576px) {
        left: 16%;
        font-size: 38px;
        img{
            width:104%;
        }
    }
    @media (min-width: 769px) {
        left: 22%;
        font-size: 38px;
        img{
            width:100%;
        }
    }
    @media (min-width: 996px) {
        left: 25%;
        font-size: 38px;
        img{
            width:95%;
        }
    }
`
const StyledTicketText=styled.div`
    position: absolute;
    top:20%;
    left: 5%;
    background-color: rgb(255,248,230);
    background-color: transparent;
    span:nth-of-type(1){
        font-size:50px;
        font-weight: 800;
        background-color: transparent;
        color: #593825;
        display: none;
    }
    span:nth-of-type(2){
        font-weight: 100;
        background-color: transparent;
        position: absolute;
        top:3%;
    }
    span:nth-of-type(3){
        padding-top: 0;
        font-weight: 900;
        font-size: small;
        background-color: transparent;
        position: absolute;
        top:25%;
    }
    span:nth-of-type(4){
        font-weight: 700;
        background-color: transparent;
        color: #737046;
        top:-40px;
    }
    span:nth-of-type(5){
        font-size: small;
        background-color: transparent;
        top:-40px;
    }
    @media (min-width:576px) {
        span:nth-of-type(1){
            display: none;
        }
        span:nth-of-type(2){
            position: absolute;
            top:4%;
        }
        span:nth-of-type(3){
            position: absolute;
            top:27%;
        }
        span:nth-of-type(4){
            top:-46px;
        }
        span:nth-of-type(5){
            top:-46px;
        }
    }
    @media (min-width: 769px) {
        span:nth-of-type(1){
            font-size: 36px;
            padding-top: 5px;
            display: block;
        }
        span:nth-of-type(2){
            top:20%;
        }
        span:nth-of-type(3){
            top:38%;
        }
        span:nth-of-type(4){
            top:-80px;
        }
        span:nth-of-type(5){
            top:-80px;
        }
    }
    @media (min-width: 996px) {
        span:nth-of-type(1){
            font-size:46px;
            display: block;
        }
        span:nth-of-type(2){
            padding-top: 15px;
        }
        span:nth-of-type(3){
            padding-top:15px;
        }
        span:nth-of-type(4){
            top:-60px;
        }
        span:nth-of-type(5){
            top:-60px;
        }
    }
`

const TicketInfo=()=>{
    return(
        <StyledAppContainer>
            <ClearfixTitle/>
            {/* Title Start */}
            <div className="title">購票資訊</div>
            <div className="title-sm">台北國際書展2024</div>
            {/* Title End */}

            {/* Picture Start */}
            <StyledAppPicContainer>
                <StyledAppBookshelf>
                    <li></li>
                    <li></li>
                </StyledAppBookshelf>

                {/* Content Start */}
                <StyledAppContent>
                    <div className="ticket-1">
                        <div className="ticket-title-1">單人票</div>
                        <img src={ticket} alt="" />
                        <StyledTicketText>
                            <span>台北國際書展</span><br/>
                            <span>09.01-11.30</span><br/>
                            <span>台北世界貿易中心展覽一館</span>
                            <br/>
                            <span>NT$280</span>
                            <span>/單人單次入場券</span>
                        </StyledTicketText>
                    </div>

                    <div className="ticket-2">
                        <div className="ticket-title-2">雙人套票</div>
                        <img src={ticket} alt="" />
                        <StyledTicketText>
                            <span>台北國際書展</span><br/>
                            <span>09.01-11.30</span><br/>
                            <span>台北世界貿易中心展覽一館</span>
                            <br/>
                            <span>NT$499</span>
                            <span>/雙人單次入場券</span>
                        </StyledTicketText>
                    </div>
                </StyledAppContent>
                {/* Content End */}
            </StyledAppPicContainer>
            {/* Picture End */}
        </StyledAppContainer>
    )
}

export default TicketInfo;

