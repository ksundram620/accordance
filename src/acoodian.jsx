import React,{useState} from "react";

const Accodian=({question,ans})=>{
    const [show,setShow]=useState(false);
    return(
        <>
           <h3> <span onClick={()=>setShow(!show)}>{show==false?"+":"-"}</span>{question}</h3>
            <p>{show && ans}</p>
        </>
    )
}

export default Accodian