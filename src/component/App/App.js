import React from "react";
import{Routes,Route}from "react-router-dom";
import Layout from "../Layout/DefaultLayout";
import Index from '../Pages/Index';
import Exhibitor from '../Pages/Exhibitor';
import Trasport from '../Pages/Transport-info';
import TicketInfo from '../Pages/Ticket-info';
import Archives from '../Pages/Archives';
import ContactUs from '../Pages/Contact-us';

const App=()=>{
    return(
        // Content Start
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Index/>}></Route>
                <Route path='/exhibitor' element={<Exhibitor/>}></Route>
                <Route path='/ticketinfo' element={<TicketInfo/>}></Route>
                <Route path='/trasport' element={<Trasport/>}></Route>
                <Route path='/archives' element={<Archives/>}></Route>
                <Route path='/contact-us' element={<ContactUs/>}></Route>
            </Route>
        </Routes>
        // Content End
    );
}

export default App;