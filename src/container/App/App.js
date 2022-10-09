import React from 'react';
// import './App.css';
import ribbon from '../../image/ribbon-sm-1.png';
import indexPage from '../../image/index-page.jpg';
import ticketCompleted from '../../image/ticket-completed.png';
import styled from 'styled-components'
import{
  Routes,Route,Link,Outlet
}from "react-router-dom";
import Exhibitor from '../Exhibitor';

function Index(){
  return(
    <React.Fragment>
      {/* Index-Content Start */}
      <StyledAppContent>
        <StyledAppImgContainer>
          <img src={indexPage}/>
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
      </StyledAppContent>
      {/* Index-Content End */}
    </React.Fragment>
  )
}

function Layout(){
  return (
    <div className="App">
      <header className="App-header">
        <StyledAppContainer>
           {/* Title Start */}
          <StyledAppTitle>
            <img src={ribbon}/>
            <div className='title_text'><Link to='/'>台北國際書展</Link></div>
          </StyledAppTitle>
          {/* Title End */}

          {/* Content */}
          <Outlet/>
          {/* Content */}

          {/* NavBar Start */}
          <StyledAppNavBar>
            <StyledAppNavBarTicket>
              <img src={ticketCompleted}/>
              <span><Link to='/exhibitor'>參展商</Link></span>
            </StyledAppNavBarTicket>
            <StyledAppNavBarTicket>
              <img src={ticketCompleted}/>
              <span>購票資訊</span>
            </StyledAppNavBarTicket>
            <StyledAppNavBarTicket>
              <img src={ticketCompleted}/>
              <span>交通資訊</span>
            </StyledAppNavBarTicket>
            <StyledAppNavBarTicket>
              <img src={ticketCompleted}/>
              <span>檔案</span>
            </StyledAppNavBarTicket>
            <StyledAppNavBarTicket>
              <img src={ticketCompleted}/>
              <span>聯絡我們</span>
            </StyledAppNavBarTicket>
          </StyledAppNavBar>
          {/* NavBar End */}
        </StyledAppContainer>
      </header>
    </div>
  )
}

function App() {
  {/* Content Start */}
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route element={<Index/>}></Route>
        <Route path='/exhibitor' element={<Exhibitor/>}></Route>
      </Route>
    </Routes>
{/* Content End */}
}

export default App;

const StyledAppContainer=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`

const StyledAppTitle=styled.div`
  /* 需要修改一下排版 */
  .img{
    display: block;
    position: relative;
    top:-5%;
    transform: scale(0.75);
    transform: rotate(0.5turn);
  }
  /* 需要修改一下排版 */

  /* 字太大影響滾動條 */
  .title_text{
    writing-mode: vertical-lr;
    display: block;
    position: relative;
    top:-5%;
    left: 30px;
    font-size:5rem;
    font-weight: 800;
    margin: 0;
    padding: 0;
  }
  /* 字太大影響滾動條 */
`

const StyledAppContent=styled.div`
  width: 700px;
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
  overflow: hidden;
  margin-top:50px ;
  box-shadow: -10px 2px 4px rgba(115, 112, 70, 1);
  /* border: 1px solid #000; */
  &:hover{
    content: '';
    display: block;
    width: 100%;
    padding-top: 75%;
    /* border: 1px solid green; */
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
const StyledAppNavBar=styled.div`
  overflow: hidden;
  .img{
    width: 300px;
    /* display: block; */
  }
  
`

const StyledAppNavBarTicket=styled.div`
  position: relative;
  top:0;
  left: 20%;

  &:hover{
    left: 10%;
  }

  .span{
    position:absolute;
    top:40%;
    left:15%;
    font-size: 35px;
    background-color: #BF9B7A;
  }
`