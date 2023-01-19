import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const history=useNavigate();
const Context=React.createContext({
    IsClick1: false,
    IsClick2: false,
    IsClick3: false,
    IsClick4: false,
    IsClick5: false,
    setIsClick1:(false),
    setIsClick2:(false),
    setIsClick3:(false),
    setIsClick4:(false),
    setIsClick5:(false)
});

export const TicketState=({children})=>{
    const [IsClick1, setIsClick1] = React.useState(false);
    const [IsClick2, setIsClick2] = React.useState(false);
    const [IsClick3, setIsClick3] = React.useState(false);
    const [IsClick4, setIsClick4] = React.useState(false);
    const [IsClick5, setIsClick5] = React.useState(false);
    useEffect(()=>{
        try{
            const State=JSON.parse(localStorage.getItem("bookfair:ticket.state"));
            console.log(State);
        }catch{}
    },[]);
    return(
       <Context.Provider
       value={{
        IsClick1: async()=>{
            if(IsClick1===false){
                localStorage.setItem("bookfair:ticket.state",JSON.stringify({token:"ticket1_isOpen"}));
                setIsClick1(true);
                console.log('1');
            }
        },
        IsClick2: async()=>{
            if(IsClick2===true){
                localStorage.setItem("bookfair:ticket.state",JSON.stringify({token:"ticket2_isOpen"}));
                setIsClick2(true);
                console.log('2');
            }
        },
        IsClick3: async()=>{
            if(IsClick3===true){
                localStorage.setItem("bookfair:ticket.state",JSON.stringify({token:"ticket3_isOpen"}));
                setIsClick3(true);
                console.log('3');

            }
        },
        IsClick4: async()=>{
            if(IsClick4===true){
                localStorage.setItem("bookfair:ticket.state",JSON.stringify({token:"ticket4_isOpen"}));
                setIsClick4(true);
                console.log('4');

            }
        },
        IsClick5: async()=>{
            if(IsClick5===true){
                localStorage.setItem("bookfair:ticket.state",JSON.stringify({token:"ticket5_isOpen"}));
                setIsClick5(true);
                console.log('5');
            }
        }
       }}
       >
        {children}
       </Context.Provider> 
    );
}

export default Context;
