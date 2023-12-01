import { useState,useEffect } from "react";

export default function ReactHooksDemo(){
    const [msg,setMsg] = useState();

    function handleSuccessClick(){
        setMsg(<SuccessComponent/>)
    }
    function handleErrorClick(){
        setMsg(<ErrorComponent/>)
    }
    return(
        <div className="container-fluid">
            <h2>React Hooks</h2>
            <button onClick={handleSuccessClick} className="btn btn-primary" style={{width:100}}>Success</button>
            <button onClick={handleErrorClick} className="btn btn-danger" style={{width:100}}>Invaid </button>
            <hr/>
            <div>
                {msg}
            </div>
        </div>
    )
}

function SuccessComponent(){
    useEffect(()=>{
        alert("Success Components Will Mount");
        return(()=>{
            alert("Success Components Will Mount");
        })
    },[])
    return(
        <div>
            <h2>Login Success...</h2>
        </div>
    )
}

function ErrorComponent(){
    useEffect(()=>{
        alert("Error Components Will Mount");
        return(()=>{
            alert("Error Components Will unMount");
        })
    },[])
    return(
        <div>
            <h2>Invalid Credentials...</h2>
        </div>
    )
}