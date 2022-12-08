import {  Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

const Exhibitor=()=>{
    return (
        <StyledAppContainer>
            {/* Title Start */}
            <div className="title">參展商</div>
            {/* Title End */}

            {/* Picture Start */}
            <StyledAppPicContainer>
                {/* Content Start */}
                <div className="content">
                    <CardTitle>參展商名稱</CardTitle>
                    <div className="ExhName">
                        <RowStyle justify='center'>
                            <ColStyle xs={{span:6}} lg={{span:12}}>Michalis Pichler</ColStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>Miss Read</ColStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>16(Sixteen)</ColStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>1991 Books</ColStyle>
                        </RowStyle>
                        <RowStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>JAPAN PHOTO AWARD ＋ MASANAO HIRAYAM</ColStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>JAXA(Japan Aerospace Exploration Agency)</ColStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>BOOK MARÜTE</ColStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>NATSUMI KACHI</ColStyle>
                        </RowStyle>
                        <RowStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>EP Print</ColStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>Oven Universe</ColStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>DAMMIT</ColStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>Oficyna Peryferie</ColStyle>
                        </RowStyle>
                        {/* <RowStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>On Kino</ColStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>PHOTOBOOK AS OBJECT PHOTOBOOK WHO CARES</ColStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>Further Reading Press</ColStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>etc.books</ColStyle>
                        </RowStyle> */}
                        {/* <RowStyle>
                        </RowStyle>
                        <RowStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>flotsam books</ColStyle>
                            <ColStyle xs={{span:6}} lg={{span:12}}>Jane & Jeremy</ColStyle>
                        </RowStyle> */}
                    </div>
                </div>
                {/* Content End */}
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

export default Exhibitor

const StyledAppContainer=styled.div`
    height: 100vh;
    display: block;
    width: 70%;
    .title{
        line-height: 100px;
        padding-left: 25px;
        width: 20%;
        font-size: 50px;
        color: white;
        background-color: #737046;
        z-index: 2;
    }

    .content{
        border-radius: 30px;
        overflow: hidden;
        width: 80%;
        font-size: 35px;
        position: absolute;
        bottom:40%;
        left: 50%;
        transform: translateX(-55%);
        z-index: 1;
        background-color: white;
        box-shadow: -5px 5px 40px -15px rgba(0, 0, 0, 1);
        .ExhName{
            font-size: 30px;
            background-color: white;
            padding: 0px 20px 20px 20px;
        }
    }
`

const StyledAppPicContainer=styled.div`
    margin-top: 50%;
    .pic{
        /* width: 800px; */
        width: 89%;
        height: 60px;
        background-color: #818B8C;
        /* margin-left: 20px; */
        margin-left: 2%;
        /* box-shadow: inset 0px -3px 2px -4px rgba(0, 0, 0, 1); */
        box-shadow: inset 0px -40px 15px -40px rgba(0, 0, 0, 1);
    }
    .pic-bottom{
        /* width: 850px; */
        width: 94%;
        height: 40px;
        background-color: #818B8C;
        /* box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 1); */
        box-shadow: 0px 50px 50px 0px rgba(0, 0, 0, 1);
    }
`

const StyledAppBracket1=styled.div`
    position: absolute;
    left: 5%;
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
    /* left: 640px; */
    left: 80%;
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
const CardTitle=styled.div`
    font-weight:bold;
    font-size:36px;
    padding:16px 20px;
    background-color:white;
`
const RowStyle=styled(Row)`
    padding: 6px 0px;
    background-color: white;
`

const ColStyle=styled(Col)`
    font-size: 30px;
    background-color: white;
`