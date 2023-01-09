import React from "react";
import styled from "styled-components";
import archive2 from '../../../image/archive1.webp'
import archive1 from '../../../image/archive2.webp'
import LinkStyle from "../../Common/LinkStyle";
import BackofBook from "../../../image/Book-background.png"
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
    @media (min-width: 576px) {
        width: 90%;
        .title{
            line-height: 90px;
            padding:0px 20px;
            margin: 0% 0% 0 10%;
            font-size: 45px;
        }
    }
    @media (min-width: 769px) {
        .title{
            line-height: 100px;
            font-size: 50px;
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
    width:88%;
    margin-top:5%;
    @media (min-width: 576px) {
        width:90%;
        margin-top:3%;
    }
    @media (min-width: 769px) {
        width:88%;
        margin-left:3%;
    }
    @media (min-width: 996px) {
        width: 85%;
        margin-left:10%;
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
        display: none;
    }
    & li:nth-child(2){
        width: 70%;
        height: 20px;
        background-color: #737046;
        margin-top: 56%;
        box-shadow: 0px 50px 50px 0px rgba(0, 0, 0, 1);
        display: none;
    }
    .BackofBook{
        box-shadow: 0px 20px 10px -20px #000;
        width: 50%;
        transform: scale(0.55);
        display: none;
    }
    @media (min-width: 576px) {
        & li:nth-child(1){
            margin-top: 105%;
            display: block;
        }
        & li:nth-child(2){
            width: 90%;
            margin-top: 112%;
            display: block;
        }
    }
    @media (min-width: 700px) {
        .BackofBook{
            position: absolute;
            bottom: -1%;
            right: -11%;
            display: block;
        }
    }
    @media (min-width: 769px) {
        & li:nth-child(1){
            margin-top: 93.5%;
            display: block;
        }
        & li:nth-child(2){
            width: 90%;
            margin-top: 101%;
            display: block;
        }
        .BackofBook{
            display: none;
        }
    }
    @media (min-width: 920px) {
        .BackofBook{
            bottom: -2%;
            right: -11%;
            display: block;
        }
    }
    @media (min-width: 996px) {
        & li:nth-child(1){
            margin-top: 74%;
            margin-left: 0%;
            display: block;
        }
        & li:nth-child(2){
            width: 70%;
            margin-top: 82%;
            display: block;
        }
        .BackofBook{
            display: none;
        }
    }
    @media (min-width: 1130px) {
        .BackofBook{
            bottom: -4.5%;
            right: -2%;
            transform: scale(0.45);
            display: block;
        }
    }
    @media (min-width: 1200px) {
        & li:nth-child(1){
            margin-top: 59%;
            margin-left: 0%;
            display: block;
        }
        & li:nth-child(2){
            width: 70%;
            margin-top: 67%;
            display: block;
        }
        .BackofBook{
            display: none;
        }
    }
    @media (min-width: 1330px) {
        .BackofBook{
            bottom: -6%;
            right: -2%;
            transform: scale(0.45);
            display: block;
        }
    }
`

const StyledAppContent=styled.div`
    position: absolute;
    top:0;
    left: 20%;
    background-color: transparent;
    span{
        font-size: 24px;
        background-color: transparent;
        font-weight: 600;
        margin-left: 0px;
    }
    .para-1{
        margin-bottom: 20px;
    }
    @media (min-width: 576px) {
        left: 26%;
        span{
            font-size: 26px;
        }
    }
    @media (min-width: 700px) {
        .BackofBook{
            transform: scale(0.5);
            margin-top: -20%;
            margin-left: 42%;
            box-shadow: 0px 20px 10px -20px #000;
            display: block;
        }
    }
    @media (min-width: 769px) {
        left: 26%;
        span{
            font-size: 30px;
            white-space: break-spaces;
        }
        .para-1{
            margin-bottom: 20px;
        }
    }
    @media (min-width: 996px) {
        left: 26%;
        span{
            font-size: 32px;
            white-space: nowrap;
        }
    }
`

const LinkHover=styled(LinkStyle)`
    img{
        width: 100%;
        margin-bottom: 10px;
    }
    &:hover img{
        transform: scale(1.1);
    }
    @media (min-width: 576px) {
        img{
            width: 88%;
        }
    }
    @media (min-width: 769px) {
        img{
            width: 86%;
        }
    }
    @media (min-width: 996px) {
        img{
            width: 350px;
        }
    }
`

const Archives=()=>{
    return(
        <StyledAppContainer>
            <ClearfixTitle/>
            {/* Title Start */}
            <div className="title">檔案</div>
            {/* Title End */}

            {/* Picture Start */}
            <StyledAppPicContainer>
                <StyledAppBookshelf>
                    <li></li>
                    <li></li>
                    <img className="BackofBook" src={BackofBook} alt="" />
                </StyledAppBookshelf>

                {/* Content Start */}
                <StyledAppContent>
                    <div className="para-1">
                        <LinkHover to="#!">
                            <img src={archive1} width={350} alt=""/>
                            <span>2023 台北國際書展</span>
                        </LinkHover>
                    </div>
                    <div className="para-2">
                        <LinkHover to="#!">
                            <img src={archive2} width={350} alt=""/>
                            <span>2022 台北國際書展</span>
                        </LinkHover>
                    </div>
                </StyledAppContent>
                {/* Content End */}
            </StyledAppPicContainer>
            {/* Picture End */}


        </StyledAppContainer>
    )
}

export default Archives;

