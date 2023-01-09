import {  Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import ClearfixTitle from "../../Common/ClearfixTitle";
import ClearfixBottom from "../../Common/ClearfixBottom";

const StyledAppContainer=styled.div`
    height: 100vh;
    display: block;
    width: 85%;
    .title{
        line-height: 60px;
        padding: 0px 10px;
        margin: 0% 10% 0 10%;
        width: fit-content;
        font-size: 30px;
        color: white;
        background-color: #737046;
    }
    .content{
        border-radius: 30px;
        overflow: hidden;
        width: 90%;
        top:0%;
        left: 15%;
        background-color: white;
        box-shadow: -5px 5px 40px -15px rgba(0, 0, 0, 1);
        .ExhName{
            font-size: 30px;
            background-color: white;
            padding: 0px 20px 20px 20px;
        }
    }
    @media (min-width: 576px) {
        width: 90%;
        .title{
            line-height: 90px;
            padding:0px 20px;
            margin: 0% 0% 0 10%;
            font-size: 45px;
        }
        .content{
            width: 80%;
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
        .content{
            width: 75%;
            left: 15%;
        }
    }
    @media (min-width: 996px) {
        width: 76%;
    }

`

const StyledAppContentContainer=styled.div`
    margin-top: 5%;
`

const CardTitle=styled.div`
    font-weight:bold;
    font-size:30px;
    padding:16px 20px 0px 20px;
    background-color:white;
    @media (min-width: 576px) {
        font-size:36px;
    }
`
const RowStyle=styled(Row)`
    background-color: white;
`

const ColStyle=styled(Col)`
    font-size: 26px;
    background-color: white;
    padding: 10px 0px;
    @media (min-width: 576px) {
        font-size: 30px;
    }
`

const Exhibitor=()=>{
    return (
        <StyledAppContainer>
            <ClearfixTitle/>
            {/* Title Start */}
            <div className="title">參展商</div>
            {/* Title End */}

            {/* Picture Start */}
            <StyledAppContentContainer>
                {/* Content Start */}
                <div className="content">
                    <CardTitle>參展商名稱</CardTitle>
                    <div className="ExhName">
                        <RowStyle justify='center'>
                            <ColStyle span={24} md={{span:12}} >Michalis Pichler</ColStyle>
                            <ColStyle span={24} md={{span:12}} >Miss Read</ColStyle>
                            <ColStyle span={24} md={{span:12}} >16(Sixteen)</ColStyle>
                            <ColStyle span={24} md={{span:12}} >1991 Books</ColStyle>
                        </RowStyle>
                        <RowStyle>
                            <ColStyle span={24} md={{span:12}} >JAPAN PHOTO AWARD ＋ MASANAO HIRAYAM</ColStyle>
                            <ColStyle span={24} md={{span:12}} >JAXA(Japan Aerospace Exploration Agency)</ColStyle>
                            <ColStyle span={24} md={{span:12}} >BOOK MARÜTE</ColStyle>
                            <ColStyle span={24} md={{span:12}} >NATSUMI KACHI</ColStyle>
                        </RowStyle>
                        <RowStyle>
                            <ColStyle span={24} md={{span:12}} >EP Print</ColStyle>
                            <ColStyle span={24} md={{span:12}} >Oven Universe</ColStyle>
                            <ColStyle span={24} md={{span:12}} >DAMMIT</ColStyle>
                            <ColStyle span={24} md={{span:12}} >Oficyna Peryferie</ColStyle>
                        </RowStyle>
                        <RowStyle>
                            <ColStyle span={24} md={{span:12}} >On Kino</ColStyle>
                            <ColStyle span={24} md={{span:12}} >PHOTOBOOK AS OBJECT PHOTOBOOK WHO CARES</ColStyle>
                            <ColStyle span={24} md={{span:12}} >Further Reading Press</ColStyle>
                            <ColStyle span={24} md={{span:12}} >etc.books</ColStyle>
                        </RowStyle>
                    </div>
                </div>
                {/* Content End */}

                <ClearfixBottom/>
            </StyledAppContentContainer>
            {/* Picture End */}
        </StyledAppContainer>
    )
}

export default Exhibitor

