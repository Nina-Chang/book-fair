import { EditOutlined, EllipsisOutlined, EnvironmentFilled, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from "react";
import LinkStyle from '../../Common/LinkStyle';
import styled from "styled-components";
// import venue from '../../../image/venue.jfif'

const Trasport=()=>{
    return (
        <StyledAppContainer>
            {/* Title Start */}
            <div className="title">交通資訊</div>
            {/* Title End */}

            {/* Picture Start */}
            <StyledAppPicContainer>
                {/* Content Start */}
                <div className="content">
                    <a className='venue' href='https://www.google.com.tw/maps/place/%E5%8F%B0%E5%8C%97%E4%B8%96%E7%95%8C%E8%B2%BF%E6%98%93%E4%B8%AD%E5%BF%83+%E5%B1%95%E8%A6%BD%E5%A4%A7%E6%A8%93+(%E4%B8%96%E8%B2%BF%E4%B8%80%E9%A4%A8)/@25.0334826,121.5601883,17z/data=!3m2!4b1!5s0x3442a9bdf8420751:0xdfca86753a9568ca!4m6!3m5!1s0x3442abb63987eacb:0x7cf919c84632e976!8m2!3d25.0334826!4d121.562377!16s%2Fm%2F026wkc_?hl=zh-TW&authuser=0'>
                        <div>
                            台北世界貿易中心展覽一館 
                            <h6>台北市信義路五段五號1樓</h6>
                        </div>
                    </a>
                    <div className='transportation'>
                        【台北市大眾運輸】
                        <br/>
                        <span>
                            1、捷運：搭乘捷運信義線至台北101/世貿站即抵；
                                或搭乘捷板南線往昆陽方向至市府站下車，步行即可到達。
                        </span>
                        <br/>
                        <span>
                            2、公車：搭乘20、28、202、245、270(區)、281、284、611、612、
                                            621、650、651、665、678即可到達。
                        </span>
                        <br/>
                        <span>
                            3、Ubike租賃站：

                            捷運台北101/世貿站：莊敬路/信義線五段(東南側)
                            信義廣場(台北101)：松智路/信義路(東北側)
                        </span>
                        <br/>
                        <div></div>
                        【機場往台北世貿】
                        <br/>
                        <span>
                            1、桃園國際機場
                            搭乘高鐵：於機場搭乘高鐵專用接駁車→桃園高鐵→台北高鐵站→
                            捷運信義線(往象山)→臺北世貿一館
                            客運：大有巴士1960路往君悅飯店(近台北世貿)
                        </span>
                        <br/>
                        <span>
                            2、松山機場

                            捷運松山機場站搭乘文湖線至大安站後，轉搭信義線(往象山方向)
                            至台北101世貿站即可抵達。
                        </span>
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

export default Trasport

const StyledAppContainer=styled.div`
    display: block;
    width: 70%;
    .title{
        position: fixed;
        top:0;
        left: 12%;
        z-index: 99;
        line-height: 100px;
        padding-left: 22px;
        width: 17%;
        font-size: 50px;
        color: white;
        background-color: #737046;
    }

    .content{
        border-radius: 20px;
        overflow: hidden;
        width: 85%;
        position: absolute;
        bottom:40%;
        left: 50%;
        transform: translateX(-55%);
        z-index: 2;
        box-shadow: -5px 5px 40px -15px rgba(0, 0, 0, 1);
        .venue{
            color: black;
            text-decoration: none;
            &:active{
                color: black;
            }
            div{
                font-weight:bold;
                font-size:38px;
                display:flex;
                align-items: baseline;
                background-color:white;
                padding: 16px 20px;
            }
            h6{
                background-color:white;
            }
        }
        .transportation{
            background-color:white;
            font-size: 30px;
            padding:0px 20px 20px 20px;
            span{
                background-color:white;
                line-height: 36px;
            }
            div{
                background-color:white;
                padding:8px;
            }
        }
    }
`

const StyledAppPicContainer=styled.div`
    margin-top: 60%;
    .pic{
        /* width: 800px; */
        width: 89%;
        height: 60px;
        background-color: #818B8C;
        /* margin-left: 20px; */
        margin-left: 2%;
        /* box-shadow: inset 0px -3px 2px -4px rgba(0, 0, 0, 1); */
        box-shadow: inset 0px -40px 15px -40px rgba(0, 0, 0, 1);
        z-index: 1;
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