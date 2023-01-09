import { Button, FloatButton } from "antd";
import React from "react";
import styled from "styled-components";
import wood from '../../../image/wood.jpg'
import IG from '../../../image/IG-1-removebg.png'
import twitter from '../../../image/twitter.png'
import youtube from '../../../image/Youtube.png'
import facebook from '../../../image/facebook-logo.png'
import ClearfixTitle from "../../Common/ClearfixTitle";

const StyledAppContainer=styled.div`
    display: block;
    width: 94%;
    .title{
        color: white;
        background-color: #818B8C;
        line-height: 60px;
        padding: 0px 10px;
        margin: 0% 10% 0 10%;
        width: fit-content;
        font-size: 30px;
    }
    .content{
        width: 96%;
        position: absolute;
        top:29%;
        left: 2%;
        z-index: 1;
        background-color: transparent;
        border-radius:50px;
        overflow: hidden;
    }
    @media (min-width: 576px) {
        width: 90%;
        .title{
            line-height: 90px;
            padding: 0px 20px;
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
    margin-top: 25%;
    margin-left: 5%;
    .pic-container-1{
        width: 95%;
        position: relative;
        margin-left: 2.5%;
    }
    .pic-container-1::before{
        content: '';
        display: block;
        width: 100%;
        padding-top: 40%;
        position: relative;
    }
    .pic-container-1 .pic-top{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat:no-repeat;
        box-shadow: 1px 0px 20px 1px rgba(0, 0, 0, 1);
    }

    .pic-container-2{
        width: 100%;
        position: relative;
    }
    .pic-container-2::before{
        content: '';
        display: block;
        width: 100%;
        padding-top: 10%;
        position: relative;
    }
    .pic-container-2 .pic-bottom{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat:repeat;
        box-shadow: 0px 20px 120px 0px rgba(0, 0, 0, 1),0px -5px 200px -10px rgba(0, 0, 0, 1);
    }
    @media (min-width: 769px) {
        margin-left: 10%;
        width: 82%;
    }
    @media (min-width: 996px) {
        margin-top: 10%;
    }
`

const StyledContentContainer=styled.div`
    width: 100%;
    border-radius: 50px;
    overflow: hidden;
    &::before{
        content: '';
        display: block;
        width: 100%;
        padding-top:100%;
    }
`

const FlexBox=styled.div`
    display:flex;
`

const ContactLink=styled.a`
    display:block;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-image:url(${(props)=>props.url});
    background-position: center;
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
`

const ContactUs=()=>{
    return(
        <StyledAppContainer>
            <ClearfixTitle/>
            {/* Title Start */}
            <div className="title">聯絡我們</div>
            {/* Title End */}

            {/* Picture Start */}
            <StyledAppPicContainer>
                <div className="content">
                    <FlexBox>
                        <StyledContentContainer>
                            <ContactLink href="https://www.instagram.com/tbff_tibe/" url={IG} style={{transform:'scale(1.6)'}}>
                            </ContactLink>
                        </StyledContentContainer>

                        <StyledContentContainer>
                            <ContactLink href="https://twitter.com/" url={twitter} style={{transform:'scale(2)'}}>
                            </ContactLink>
                        </StyledContentContainer>

                        <StyledContentContainer>
                            <ContactLink href="https://www.youtube.com/channel/UCTYb38urqoUZuvtd9fm4a1g/videos" url={youtube} style={{transform:'scale(2)'}}>
                            </ContactLink>
                        </StyledContentContainer>

                        <StyledContentContainer>
                            <ContactLink href="https://www.facebook.com/taipeibookfair/" url={facebook} style={{transform:'scale(1.9)'}}>
                            </ContactLink>
                        </StyledContentContainer>
                    </FlexBox>
                </div>
                <div className="pic-container-1">
                    <img className="pic-top" src={wood} alt=""/>
                </div>
                <div className="pic-container-2">
                    <img className="pic-bottom" src={wood} alt=""/>
                </div>
            </StyledAppPicContainer>
            {/* Picture End */}
        </StyledAppContainer>
    )
}

export default ContactUs;

