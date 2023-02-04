import React from "react";

export const Context=React.createContext({});

export const ContextProvider= ({children})=>{
    const [IsClick1, setIsClick1] = React.useState(false);
    const [IsClick2, setIsClick2] = React.useState(false);
    const [IsClick3, setIsClick3] = React.useState(false);
    const [IsClick4, setIsClick4] = React.useState(false);
    const [IsClick5, setIsClick5] = React.useState(false);

    // useEffect(()=>{
    //     try{
    //         const State=JSON.parse(localStorage.getItem("bookfair:ticket.state"));
    //         console.log(State);
    //     }catch{}
    // },[]);
    return(
       <Context.Provider
       value=
       {{IsClick1, setIsClick1
       ,IsClick2, setIsClick2
       ,IsClick3, setIsClick3
       ,IsClick4, setIsClick4
       ,IsClick5, setIsClick5}}>
        {children}
       </Context.Provider> 
    );
}

export default Context;

