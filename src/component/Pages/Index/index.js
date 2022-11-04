import React from "react";
import styled from "styled-components";
import indexPage from '../../../image/index-page.jpg';
import wood from '../../../image/wood.jpg';

const Index=()=>{
    return(
        <StyledAppContainer>
          {/*Index-Content Section1 Start  */}
            <StyledSection1Container>
                <StyledAppImgContainer>
                    <img src={indexPage} alt=""/>
                </StyledAppImgContainer>
                <div className='info'>
                <h2 className='para'>個的學，露好看好像真物難出。
                    透很喜參拆後的你們：是這樣寶貝臉的，
                    學的人，日快的本你還才的公打因還真，
                    好了起來還他的一靜的讓他⋯還騙要這麼才有。
                    <p/>一直覺可以吃以買您好，我已經死星期來找來就不
                    ，最近的的圖心裡，不是會覺得為了。
                    年的抽為今晚將自己朋友的都面，沒有人很很棒的
                    ，現己覺得狗第天占，還不起來洗雖然該就，
                    緊在攻擊實現疾啊發現了，我來說。好厲害不過
                    怎麼太的眼神原本話，他絕英文每歌喜歡的，的認適合。
                </h2>
                </div>
            </StyledSection1Container>
            {/* Index-Content Section1 End */}

            {/* Index-Content Section2 Start */}
            <StyledSection2Container>
                <Bulletin>
                  <div className='line-1'></div>
                  <div className='line-2'></div>
                  <div className='drawing-pin'></div>
                  <div className='board-1'>
                      <img className='wood' src={wood} alt=""/>
                  </div>
                  <div className='board-2'></div>
                  <div className='text'></div>
                  <div className='button'></div>
                </Bulletin>
            </StyledSection2Container>
            {/* Index-Content Section2 End */}

            {/* Index-Content Section3 Start */}
            <StyledSection3Container>
                <div className='pre-button'></div>

                <WoodBookShelf>
                  <div className="pic-container-1">
                      <img className="pic-top" src={wood} alt=""/>
                  </div>
                  <div className="pic-container-2">
                      <img className="pic-bottom" src={wood} alt=""/>
                  </div>
                </WoodBookShelf>

                <div className='next-button'></div>
            </StyledSection3Container>
            {/* Index-Content Section3 End */}
        </StyledAppContainer>
    );
}

export default Index;

// Section1 Start \\
const StyledAppContainer=styled.div`
    display: block;
`

const StyledSection1Container=styled.section`
  width: 100%;
  .info .para{
    width: 60%;
    position: absolute;
    bottom: 0;
    left:50%;
    background-color: transparent;
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
  margin: 35% 0% 5% 0%;
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

`
// Section2 End \\

// Section3 Start \\
const StyledSection3Container=styled.section`
  display: flex;
  flex-direction:row;
  flex-wrap: nowrap;
  margin: 30% 0%;
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