import { faTemperature1 } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import * as ScrollMagic from "scrollmagic"
import { ScrollMagicPluginIndicator } from "scrollmagic-plugins"
// import { ScrollMagicPluginGsap } from "scrollmagic-plugins";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import indexPage from '../../../image/index-page.jpg';
import wood from '../../../image/wood.jpg';
import LinkStyle from "../../Common/LinkStyle";

// Section1 Start \\
const StyledAppContainer=styled.div`
    display: block;
    height: 100vw;
`

const StyledSection1Container=styled.section`
  width: 80%;
  .info .para{
    width: 70%;
    position: absolute;
    bottom: -120px;
    left:45%;
    background-color: transparent;
    p{
      background-color: transparent;
    }
  }
  @media (min-width: 769px) {
    width: 90%;
    margin: 5%;
    .info .para{
      width: 65%;
      position: absolute;
      bottom: -120px;
      left:45%;
      background-color: transparent;
    }
  }
`
const StyledAppImgContainer=styled.div`
  width: 100%;
  border-radius: 2px;
  /* overflow: hidden; */
  margin-top:50px ;
  box-shadow: -14px 10px 4px rgba(115, 112, 70, 1);
  /* border: 1px solid #000; */
  &:before{
    content: '';
    display: block;
    width: 100%;
    padding-top: 75%;
  }
  img{
    position: absolute;
    top:0;
    left: 0;
    
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`
// Section1 End \\

// Section2 Start \\
const StyledSection2Container=styled.section`
  /* padding: 35% 0% 5% 0%; */
`
const Bulletin=styled.div`
  .line-1{
      width: 50%;
      height: 3px;
      transform: skewY(-10deg);
      background-color: black;
      
  }
  .line-2{
      width: 50%;
      height: 3px;
      transform: skewY(10deg);
      background-color: black;
      margin-left: 50%;
  }
  .drawing-pin{
      position: absolute;
      top:-8%;
      left: 0;
      background-color: rgb(175, 171, 171);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin:0% 0% 5% 47%;
      margin-bottom: 5%;
  }

  .board-1{
      width:800px;
      position: relative;
  }

  .board-1::before{
      content: '';
      display: block;
      width: 100%;
      padding-top: 80%;
      position: relative;
  }

  .board-1 .wood{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 10px;
  }

  .board-2{
      position: absolute;
      top:4.5%;
      left: 3%;
      width: 94%;
      height: 92%;
      background-color:rgb(204, 192, 184) ;
      border-radius: 10px;
  }

  .text{
    position: absolute ;
    top:5%;
    left: 5%;
    right: 5%;
    bottom:5%;
    background-color: transparent;
    font-size:30px;
  }
  .text span{
    background-color: transparent;
    font-size: 40px;
    font-weight: bold;
  }
`
// Section2 End \\

// Section3 Start \\
const StyledSection3Container=styled.section`
  height: 100vw;
  display: flex;
  flex-direction:row;
  flex-wrap: nowrap;
  /* padding: 30% 0%; */
  .pre-button{
    width: 0;
    height: 0;
    margin-top: 15%;
    border-style: solid;
    border-width: 50px 50px 50px 0;
    border-color: transparent #818B8C transparent transparent;
  }
  .next-button{
      width: 0;
      height: 0;
      margin-top: 15%;
      border-style: solid;
      border-width: 50px 0 50px 50px;
      border-color: transparent transparent transparent #818B8C;
  }
`
const WoodBookShelf=styled.div`
  width: 95%;
  .pic-container-1{
      width: 95%;
      position: relative;
      margin-left: 2.5%;
  }
  .pic-container-1::before{
      content: '';
      display: block;
      width: 100%;
      padding-top: 50%;
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

`
// Section3 End \\

// Animation-Section2 Start \\
var t1=gsap.timeline({onUpdate:updatePercentage});
t1.from('.bulletin',{duration:1,opacity:0});
t1.from('.text',{duration:.5,opacity:0,ease:"elastic(1, 0.5)"});
t1.from('.drawing-pin',{duration:.5,scale:2,opacity:0,ease:"elastic(1, 0.5)"});
function updatePercentage() {
  t1.progress();
}
// Animation-Section2 Start \\

// Animation-Section3 Start \\
var t2=gsap.timeline();
t2.from('.pic-container',{duration:1,opacity:0});
// Animation-Section3 End \\

// ScrollMagic \\
ScrollMagicPluginIndicator(ScrollMagic);
// ScrollMagicPluginGsap(ScrollMagic);
var controller=new ScrollMagic.Controller();
var scene=new ScrollMagic.Scene({
  triggerElement:".section2",
  triggerHook:"onLeave",
  duration:100,
  reverse:true
})
.setTween(t1)
.addTo(controller);

var scene2=new ScrollMagic.Scene({
  triggerElement:".section3",
  triggerHook:"onLeave",
  duration:"100%",
  reverse:true
})
.setPin(".section3")
.setTween(t2)
.addTo(controller);
// ScrollMagic \\


const Index=()=>{
    return(
        <StyledAppContainer>
          {/*Index-Content Section1 Start  */}
          <section className="section1" style={{height: "100vw"}}>
            <StyledSection1Container>
                <StyledAppImgContainer>
                    <img src={indexPage} alt=""/>
                </StyledAppImgContainer>
                <div className='info'>
                <h2 className='para'>
                  <p>台北國際書展絕對堪稱是最具活力、最具多元特色和國際風味的國際書展。</p>
                從另一個角度來看，一年一度的台北國際書展正是台灣出版市場的縮影，反映了此刻華文出版市場的變化與挑戰。就市場規模而言，台灣當然是「小」的，但，小反而具彈性，目標的設定和完成 能夠更為精準──台北國際書展的活力，正是此一事實的明證。<br/>
台北國際書展展現的活力，得自於台灣出版人的參與與經營，我們共同締造了此一亮麗成果。台北國際書展將透過更豐富的內容，彰顯台灣出版界 的魅力與實力：對外，具現台灣為華文出版樞紐的策略地位，以吸引期望開拓華文市場的全球出版人參與；對內，多層次的鋪陳台灣出版風貌，從文學／非文學、童 書、動漫等類型，到文字、圖像、聲音等形式，蒐羅紙本到數位等載體，持續打造最具文化視野的形象與口碑。
                </h2>
                </div>
            </StyledSection1Container>
          </section>
            {/* Index-Content Section1 End */}

            {/* Index-Content Section2 Start */}
            <section className="section2" style={{height: "100vw"}}>
              <StyledSection2Container>
                  <Bulletin>
                    <div className='bulletin line-1'></div>
                    <div className='bulletin line-2'></div>
                    <div className='drawing-pin'></div>
                    <div className='bulletin board-1'>
                        <img className='wood' src={wood} alt=""/>
                    </div>
                    <div className='bulletin board-2'></div>
                    <div className='text'>
                      <span>最新消息</span>
                      -------------------------------------------------------------
                      <br/>
                      1.
                      <LinkStyle to="#!">
                      2022年11月16日<br/>
                      2023台北國際書展「城市在閱讀」活動開放線上報名
                      </LinkStyle>
                      -------------------------------------------------------------
                      <br/>
                      2.
                      <LinkStyle to="#!">
                      2022年11月15日<br/>
                      「2023金蝶獎-台灣出版設計大獎」13本入圍名單出爐 選紙、文字 單純設計搶眼
                      </LinkStyle>
                      -------------------------------------------------------------
                      <br/>
                      3.
                      <LinkStyle to="#!">
                      2022年11月03日<br/>
                      超越疫情！25萬人次一起閱讀趣！ 2022台北國際書展 中、英文紀錄片　Youtube上線！
                      </LinkStyle>
                      -------------------------------------------------------------
                      
                    </div>
                    <div className='button'></div>
                  </Bulletin>
              </StyledSection2Container>
            </section>
            {/* Index-Content Section2 End */}

            {/* Index-Content Section3 Start */}
            <section className="section3" style={{height: "100vw"}}>
              <StyledSection3Container>
                  <div className='pre-button'></div>

                  <WoodBookShelf>
                    <div className="pic-container pic-container-1">
                        <img className="pic-top" src={wood} alt=""/>
                    </div>
                    <div className="pic-container pic-container-2">
                        <img className="pic-bottom" src={wood} alt="" />
                    </div>
                  </WoodBookShelf>

                  <div className='next-button'></div>
              </StyledSection3Container>
            </section>
            {/* Index-Content Section3 End */}
        </StyledAppContainer>
    );
}

export default Index;



