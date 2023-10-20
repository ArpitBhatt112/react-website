import React,{useState} from "react";


const App=()=>{
    let time =new Date().toLocaleTimeString();

    const [ctime,setCtime]=useState(time);

   const UpdateTime=()=>{
let newtime =new Date().toLocaleTimeString();
setCtime(newtime);
    };
setInterval(UpdateTime,1000);

return (
    <>
        <h1>{ctime}</h1>
        
    </>

);
};
export default App;