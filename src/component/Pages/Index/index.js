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
// import 'https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap';

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
    /* font-weight: 500; */
    /* position: absolute;
    bottom: 0;
    left: 0%; */
    background-color: transparent;
    p {
      background-color: transparent;
    }
  }
  @media (min-width: 576px) {
    width: 90%;
    margin: 5%;
    .info .para {
      font-size: 60px;
      width: 65%;
      position: absolute;
      bottom: 50px;
      left: 45%;
      background-color: transparent;
    }
  }
  @media (min-width: 769px) {
    width: 90%;
    margin: 5%;
    .info .para {
      font-size: 60px;
      width: 65%;
      position: absolute;
      bottom: 50px;
      left: 45%;
      background-color: transparent;
    }
  }
`;
const StyledAppImgContainer = styled.div`
  width:100%;
  border-radius: 2px;
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
    /* object-fit: contain; */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (min-width: 576px) {
    width: 100%;
    border-radius: 2px;
    /* overflow: hidden; */
    margin-top: 15%;
    box-shadow: -14px 10px 4px rgba(115, 112, 70, 1);
    /* border: 1px solid #000; */
    &:before {
      content: "";
      display: block;
      width: 100%;
      padding-top: 75%;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  @media (min-width: 769px) {
    width: 100%;
    border-radius: 2px;
    /* overflow: hidden; */
    margin-top: 15%;
    box-shadow: -14px 10px 4px rgba(115, 112, 70, 1);
    /* border: 1px solid #000; */
    &:before {
      content: "";
      display: block;
      width: 100%;
      padding-top: 75%;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
    }
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
    top: -8%;
    left: 0;
    background-color: rgb(175, 171, 171);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0% 0% 5% 47%;
    margin-bottom: 5%;
  }

  .board-1 {
    width: 800px;
    position: relative;
  }

  .board-1::before {
    content: "";
    display: block;
    width: 100%;
    padding-top: 80%;
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
    font-size: 30px;
  }
  .text span {
    background-color: transparent;
    font-size: 40px;
    font-weight: bold;
    color: #000;
  }
  .text div {
    background-color: transparent;
    font-weight: 550;
    color: #737046;
  }
  @media (min-width: 576px) {
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
      top: -8%;
      left: 0;
      background-color: rgb(175, 171, 171);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin: 0% 0% 5% 47%;
      margin-bottom: 5%;
    }

    .board-1 {
      width: 800px;
      position: relative;
    }

    .board-1::before {
      content: "";
      display: block;
      width: 100%;
      padding-top: 80%;
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
      font-size: 30px;
    }
    .text span {
      background-color: transparent;
      font-size: 40px;
      font-weight: bold;
      color: #000;
    }
    .text div {
      background-color: transparent;
      font-weight: 550;
      color: #737046;
    }
  }
  @media (min-width: 769px) {
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
      top: -8%;
      left: 0;
      background-color: rgb(175, 171, 171);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin: 0% 0% 5% 47%;
      margin-bottom: 5%;
    }

    .board-1 {
      width: 800px;
      position: relative;
    }

    .board-1::before {
      content: "";
      display: block;
      width: 100%;
      padding-top: 80%;
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
      font-size: 30px;
    }
    .text span {
      background-color: transparent;
      font-size: 40px;
      font-weight: bold;
      color: #000;
    }
    .text div {
      background-color: transparent;
      font-weight: 550;
      color: #737046;
    }
  }
`;
// Section2 End \\

// Section3 Start \\
const StyledSection3Container = styled.section`
  height: 100vh;
  /* display: flex; */
  /* flex-direction: row; */
  /* flex-wrap: nowrap; */
  padding: 15% 0%;
  .title{
    color: white;
    background-color: #818B8C;
    line-height: 100px;
    padding-left: 20px;
    margin-bottom:5%;
    width: 30%;
    font-size: 50px;
  }
  .Carousel {
    position: absolute;
    top: -27px;
    left: 50%;
    z-index: 1;
    background-color: transparent;
    transform: translateX(-50%);
  }
`;
const WoodBookShelf = styled.div`
  width: 100%;
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
`;
const PreButton=styled.div`
  width: 0;
  height: 0;
  margin-top: 15%;
  border-style: solid;
  border-width: 50px 50px 50px 0;
  border-color: transparent #818b8c transparent transparent;
`
const NextButton=styled.div`
  width: 0;
  height: 0;
  margin-top: 15%;
  border-style: solid;
  border-width: 50px 0 50px 50px;
  border-color: transparent transparent transparent #818b8c;

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
          {/* <div className='text'></div> */}
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
              <img src={Book1} width={250} alt="" />
            </Link>
            <Link to="#!">
              <img src={Book2} width={250} alt="" />
            </Link>
            <Link to="#!">
              <img src={Book3} width={250} alt="" />
            </Link>
            <Link to="#!">
              <img src={Book4} width={250} alt="" />
            </Link>
            <Link to="#!">
              <img src={Book5} width={250} alt="" />
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
                  ----------------------------------------------
                  <br />
                  <LinkStyle to="#!">
                    <div>2022年11月16日</div>
                    2023台北國際書展「城市在閱讀」活動開放線上報名
                  </LinkStyle>
                  <br />
                  ------------------------------------------------------------
                  <br />
                  <LinkStyle to="#!">
                    <div>2022年11月15日</div>
                    「2023金蝶獎-台灣出版設計大獎」13本入圍名單出爐 選紙、文字
                    單純設計搶眼
                  </LinkStyle>
                  <br />
                  ------------------------------------------------------------
                  <br />
                  <LinkStyle to="#!">
                    <div>2022年11月03日</div>
                    超越疫情！25萬人次一起閱讀趣！ 2022台北國際書展
                    中、英文紀錄片　Youtube上線！
                  </LinkStyle>
                  <br />
                  ------------------------------------------------------------
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
