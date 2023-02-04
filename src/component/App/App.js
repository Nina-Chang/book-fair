import React from "react";
import{Routes,Route}from "react-router-dom";
import Layout from "../Layout/DefaultLayout";
import Index from '../Pages/Index';
import Exhibitor from '../Pages/Exhibitor';
import Transport from '../Pages/Transport-info';
import TicketInfo from '../Pages/Ticket-info';
import Archives from '../Pages/Archives';
import ContactUs from '../Pages/Contact-us';
import 'antd/dist/reset.css';
import ScrollToTop from "../Common/ScrollToTop";
import {ContextProvider} from "../Common/TicketState";

const App=()=>{
    return(
        // Content Start
        <ContextProvider>
            <ScrollToTop>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/' element={<Index/>}></Route>
                        <Route path='/exhibitor' element={<Exhibitor/>}></Route>
                        <Route path='/ticketinfo' element={<TicketInfo/>}></Route>
                        <Route path='/transport' element={<Transport/>}></Route>
                        <Route path='/archives' element={<Archives/>}></Route>
                        <Route path='/contact-us' element={<ContactUs/>}></Route>
                    </Route>
                </Routes>
            </ScrollToTop>
        </ContextProvider>
        // Content End
    );
}

export default App;