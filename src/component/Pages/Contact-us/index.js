import React from "react";
import styled from "styled-components";
import wood from '../../../image/wood.jpg'

const ContactUs=()=>{
    return(
        <StyledAppContainer>
            {/* Title Start */}
            <div className="title">聯絡我們</div>
            {/* Title End */}

            {/* Picture Start */}
            <StyledAppPicContainer>
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

const StyledAppContainer=styled.div`
    display: block;
    width: 70%;
    .title{
        color: white;
        background-color: #818B8C;
        line-height: 100px;
        padding-left: 22px;
        width: 24%;
        font-size: 50px;
    }
`
const StyledAppPicContainer=styled.div`
    margin-top: 10%;
    margin-left: 5%;
    .pic-container-1{
        width: 80%;
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
        width: 85%;
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
`