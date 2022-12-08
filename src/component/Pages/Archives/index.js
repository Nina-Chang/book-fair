import React from "react";
import styled from "styled-components";
import archive2 from '../../../image/archive1.webp'
import archive1 from '../../../image/archive2.webp'
import LinkStyle from "../../Common/LinkStyle";
import BackofBook from "../../../image/Book-background.png"

const Archives=()=>{
    return(
        <StyledAppContainer>
            {/* Title Start */}
            <div className="title">檔案</div>
            {/* Title End */}

            {/* Picture Start */}
            <div className="pic-container">
                <StyledAppBookshelf>
                    <li></li>
                    <li></li>
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
                    <img className="BackofBook" src={BackofBook} width={300} alt="" />
                </StyledAppContent>
                {/* Content End */}
            </div>
            {/* Picture End */}


        </StyledAppContainer>
    )
}

export default Archives;

const StyledAppContainer=styled.div`
    display: block;
    width: 70%;

    .title{
        color: white;
        background-color: #818B8C;
        line-height: 100px;
        padding-left: 20px;
        width: 15%;
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
    left: 20%;
    font-size: 38px;
    background-color: transparent;
    span{
        background-color: transparent;
        font-weight: 600;
        margin-left: 16px;
    }
    .para-1{
        margin-bottom: 30px;
    }
    .BackofBook{
        margin-top: 13px;
        margin-left: 60%;
        box-shadow: 0px 20px 10px -20px #000;
    }
`

const LinkHover=styled(LinkStyle)`
    &:hover img{
        transform: scale(1.1);
    }
`