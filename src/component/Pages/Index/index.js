import { faBackspace, faTemperature1 } from "@fortawesome/free-solid-svg-icons";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import React from "react";
import styled from "styled-components";
import indexPage from "../../../image/index-page.jpg";
import wood from "../../../image/wood.jpg";
import Book1 from "../../../image/Book-1.jpg";
import Book2 from "../../../image/Book-2.jpg";
import Book3 from "../../../image/Book-3.jpg";
import Book4 from "../../../image/Book-4.jpg";
import Book5 from "../../../image/Book-5.jpg";
import LinkStyle from "../../Common/LinkStyle";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

// Section1 Start \\
const StyledAppContainer = styled.div`
  display: block;
`;

const StyledSection1Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  object-position: center center;
  font-family: "Ma Shan Zheng", cursive;
  .info{
    position:absolute;
    left: 44%;
    background-color: transparent;
    width: 70%;
    font-size: 18px;
  }
  .info .para {
    background-color: transparent;
    p {
      background-color: transparent;
    }
  }
  @media (min-width: 576px) {
    .info{
      left:50%;
      width: 70%;
      font-size: 20px;
    }

  }
  @media (min-width: 769px) {
    .info{
      left: 47%;
      width: 65%;
      font-size: 22px;
    }
  }
  @media (min-width: 996px) {
    .info{
      left: 47%;
      width: 65%;
      font-size: 30px;
    }
  }
`;
const StyledAppImgContainer = styled.div`
  width:100%;
  margin:0% 10%;
  box-shadow: -14px 10px 4px rgba(115, 112, 70, 1);
  &:before {
    content: "";
    display: block;
    width: 100%;
    padding-top: 75%;
    margin:0 auto;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (min-width: 576px) {
    width:100%;
    margin: 0 0% 0 10%;
  }
  @media (min-width: 769px) {
    width: 100%;
    margin: 0% 0% 0 10%;
  }
  @media (min-width: 996px) {
    width: 100%;
    margin: 0% 0% 0 0%;
  }
`;
// Section1 End \\

// Section2 Start \\
const StyledSection2Container = styled.section`
  height: 100vh;
`;
const Bulletin = styled.div`
  .line-1 {
    width: 50%;
    height: 3px;
    transform: skewY(-10deg);
    background-color: black;
  }
  .line-2 {
    width: 50%;
    height: 3px;
    transform: skewY(10deg);
    background-color: black;
    margin-left: 50%;
  }
  .drawing-pin {
    position: absolute;
    top: -5%;
    left: 0;
    background-color: rgb(175, 171, 171);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0% 0% 5% 47%;
    margin-bottom: 5%;
  }

  .board-1 {
    /* width: 550px; */
    position: relative;
  }

  .board-1::before {
    content: "";
    display: block;
    width: 100%;
    padding-top: 150%;
    position: relative;
  }

  .board-1 .wood {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
  }

  .board-2 {
    position: absolute;
    top: 4.5%;
    left: 3%;
    width: 94%;
    height: 92%;
    background-color: rgb(204, 192, 184);
    border-radius: 10px;
  }

  .text {
    opacity: 0;
    position: absolute;
    top: 5%;
    left: 5%;
    right: 5%;
    bottom: 5%;
    background-color: transparent;
    font-size: 28px;
  }
  .text span {
    background-color: transparent;
    font-size: 32px;
    font-weight: bold;
    color: #000;
  }
  .text div {
    background-color: transparent;
    font-weight: 550;
    color: #737046;
  }
  .text sub{
    background-color: transparent;
    &:nth-of-type(1){
      display: block;
    }
    &:nth-of-type(2){
      display: block;
    }
    &:nth-of-type(3){
      display: none;
    }
  }
  ${LinkStyle}{
    &:nth-of-type(3){
      display: block;
    }
    &:nth-of-type(4){
      display: none;
    }
  }
  @media (min-width: 576px) {
    .drawing-pin {
      top: -6%;
    }

    .board-1 {
      width: 415px;
      position: relative;
    }

    .board-1::before {
      content: "";
      display: block;
      width:100%;
      padding-top: 130%;
      position: relative;
    }

    .text {
      top: 3%;
    }
    .text span {
      font-size: 32px;
    }
    .text sub{
      background-color: transparent;
      &:nth-of-type(2){
        display: block;
      }
      &:nth-of-type(3){
        display: none;
      }
    }
    ${LinkStyle}{
      &:nth-of-type(3){
        display: block;
      }
      &:nth-of-type(4){
        display: none;
      }
    }
  }
  @media (min-width: 769px) {
    .text sub{
      background-color: transparent;
      &:nth-of-type(2){
        display: block;
      }
      &:nth-of-type(3){
        display: none;
      }
    }
    ${LinkStyle}{
      &:nth-of-type(3){
        display: block;
      }
      &:nth-of-type(4){
        display: none;
      }
    }
  }
  @media (min-width: 996px) {
    .drawing-pin {
      top: -5%;
    }

    .board-1 {
      width: 600px;
      position: relative;
    }

    .board-1::before {
      content: "";
      display: block;
      width: 100%;
      padding-top: 115%;
      position: relative;
    }

    .text {
      top: 4%;
      font-size: 30px;
    }
    .text span {
      font-size: 40px;
    }
    .text sub{
      background-color: transparent;
      &:nth-of-type(2){
        display: block;
      }
      &:nth-of-type(3){
        display: block;
      }
    }
    ${LinkStyle}{
      &:nth-of-type(3){
        display: block;
      }
      &:nth-of-type(4){
        display: block;
      }
    }
  }
`;
// Section2 End \\

// Section3 Start \\
const StyledSection3Container = styled.section`
  height: 100vh;
  padding: 15% 0% 5% 0;
  .title{
    color: white;
    background-color: #818B8C;
    line-height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top:15%;
    margin-bottom:5%;
    width: 30%;
    font-size: 30px;
  }
  .Carousel {
    position: absolute;
    top: 10px;
    left: 50%;
    z-index: 1;
    background-color: transparent;
    transform: translateX(-50%);
    img{
      width: 100%;
    }
  }
  @media (min-width:576px){
    padding: 15% 0%;
    .title{
      line-height: 60px;
      width: 48%;
      font-size: 38px;
    }
    .Carousel {
      top: 7px;
    }
  }
  @media (min-width:796px){
    padding: 0% 0%;
    .Carousel {
      position: absolute;
      top: 6px;
      left: 50%;
      z-index: 1;
      background-color: transparent;
      transform: translateX(-50%);
    }
  }
  @media (min-width:996px){
    padding: 0% 0%;
    .title{
      line-height: 70px;
      width: 38%;
      font-size: 45px;
    }
    .Carousel {
      position: absolute;
      top: 10px;
      left: 50%;
      z-index: 1;
      background-color: transparent;
      transform: translateX(-50%);
    }
  }
`;
const WoodBookShelf = styled.div`
  width: 100%;
  margin: 25% 0 10% 0;
  .pic-container-1 {
    width: 95%;
    position: relative;
    margin-left: 2.5%;
  }
  .pic-container-1::before {
    content: "";
    display: block;
    width: 100%;
    padding-top: 50%;
    position: relative;
  }
  .pic-container-1 .pic-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 1px 0px 20px 1px rgba(0, 0, 0, 1);
    z-index: 0;
  }

  .pic-container-2 {
    width: 100%;
    position: relative;
  }
  .pic-container-2::before {
    content: "";
    display: block;
    width: 100%;
    padding-top: 10%;
    position: relative;
  }
  .pic-container-2 .pic-bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: repeat;
    box-shadow: 0px 20px 120px 0px rgba(0, 0, 0, 1),
      0px -5px 200px -10px rgba(0, 0, 0, 1);
  }
  @media (min-width: 576px){
    width: 96%;
    margin: 30% 0 0 2%;
    .pic-container-1 {
      width: 94%;
      position: relative;
      margin-left: 3%;
    }
  }
  @media (min-width:769px) {
    width: 100%;
    margin: 50% 0 0 2%;
  }
  @media (min-width:996px) {
    width: 100%;
    margin: 40% 0 0 2%;
  }
`;
const PreButton=styled.div`
  width: 0;
  height: 0;
  margin-top: 15%;
  border-style: solid;
  border-width: 20px 20px 20px 0;
  border-color: transparent #818b8c transparent transparent;
  @media (min-width: 576px) {
    width: 0;
    height: 0;
    margin-top: 15%;
    border-style: solid;
    border-width: 30px 30px 30px 0;
    border-color: transparent #818b8c transparent transparent;
  }
`
const NextButton=styled.div`
  width: 0;
  height: 0;
  margin-top: 15%;
  border-style: solid;
  border-width: 20px 0 20px 20px;
  border-color: transparent transparent transparent #818b8c;
  @media (min-width: 576px) {
    width: 0;
    height: 0;
    margin-top: 15%;
    border-style: solid;
    border-width: 30px 0 30px 30px;
    border-color: transparent transparent transparent #818b8c;
  }
`
// Section3 End \\



const Section1 = () => {
  return (
    <React.Fragment>
      {/*Index-Content Section1 Start  */}
      <StyledSection1Container>
        <StyledAppImgContainer>
          <img src={indexPage} alt="" />
        </StyledAppImgContainer>
        <div className="info">
          <h2 className="para">
            <p>一起和文字漫步</p>
          </h2>
        </div>
      </StyledSection1Container>
      {/* Index-Content Section1 End */}
    </React.Fragment>
  );
};

const Section2 = () => {
  return (
    <React.Fragment>
      <StyledSection2Container>
        <Bulletin>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="drawing-pin"></div>
          <div className="board-1">
            <img className="wood" src={wood} alt="" />
          </div>
          <div className="board-2"></div>
          <div className="button"></div>
        </Bulletin>
      </StyledSection2Container>
    </React.Fragment>
  );
};



const Section3 = () => {
  return (
    <React.Fragment>
      <StyledSection3Container>
        <div className="title">新書推薦</div> 

        <WoodBookShelf>
          <Carousel
            className="Carousel"
            style={{ width: "31%", justifyContent: "center" }}
            arrows={true}
            prevArrow={<PreButton />}
            nextArrow={<NextButton/>}
            autoplay
            dots={false}
          >
            <Link to="#!">
              <img src={Book1} alt="" />
            </Link>
            <Link to="#!">
              <img src={Book2} alt="" />
            </Link>
            <Link to="#!">
              <img src={Book3}alt="" />
            </Link>
            <Link to="#!">
              <img src={Book4} alt="" />
            </Link>
            <Link to="#!">
              <img src={Book5} alt="" />
            </Link>
          </Carousel>
          <div className="pic-container pic-container-1">
            <img className="pic-top" src={wood} alt="" />
          </div>
          <div className="pic-container pic-container-2">
            <img className="pic-bottom" src={wood} alt="" />
          </div>
        </WoodBookShelf>

      </StyledSection3Container>
    </React.Fragment>
  );
};

const Index = () => {
  return (
    <StyledAppContainer>
      <Controller globalSceneOptions={{ triggerHook: "onCenter" }}>
        {/* Index-Content Section1 Start */}
        <div className="sec1"></div>
        <Scene pin={true} duration={100} triggerElement=".sec1">
          <Section1 />
        </Scene>
        {/* Index-Content Section1 End */}

        {/* Index-Content Section2 Start */}
        <div className="sec2"></div>
        <Scene pin={true} duration={100} triggerElement=".sec2">
          {(progress) => (
            <Timeline wrapper={<Bulletin />} totalProgress={progress} paused>
              <Tween>
                <Section2 />
              </Tween>
              <Tween
                from={{ opacity: 0 }}
                to={{ opacity: 1, ease: "Power4.easeInOut" }}
                duration={4000}
              >
                <div className="text">
                  <span>最新消息</span>
                  <br />
                  <LinkStyle to="#!">
                    <div>2022年11月16日</div>
                    2023台北國際書展「城市在閱讀」活動開放線上報名
                  </LinkStyle>
                  <br />
                  <sub>------------------------------------------------------------</sub>
                  <br />
                  <LinkStyle to="#!">
                    <div>2022年11月15日</div>
                    「2023金蝶獎-台灣出版設計大獎」13本入圍名單出爐 選紙、文字
                    單純設計搶眼
                  </LinkStyle>
                  <br />
                  <sub>------------------------------------------------------------</sub>
                  <br />
                  <LinkStyle to="#!">
                    <div>2022年11月03日</div>
                    超越疫情！25萬人次一起閱讀趣！ 2022台北國際書展
                    中、英文紀錄片　Youtube上線！
                  </LinkStyle>
                  {/* <br /> */}
                  <sub>------------------------------------------------------------</sub>
                  <br />
                  <LinkStyle to="#!">
                    <div>2022年11月01日</div>
                    2023台北國際書展 主視覺出爐 引爆閱讀的多重宇宙
                  </LinkStyle>
                  <br />
                </div>
              </Tween>
            </Timeline>
          )}
        </Scene>
        {/* Index-Content Section2 End */}

        {/* Index-Content Section3 Start */}
        <div className="sec3">
          <Scene pin={true} duration={100} triggerElement=".sec3">
            <Section3 />
          </Scene>
        </div>
        {/* Index-Content Section3 End */}
      </Controller>
    </StyledAppContainer>
  );
};

export default Index;
