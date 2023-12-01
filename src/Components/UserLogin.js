import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import UseCaptcha from "./Hooks/UseCaptcha";
export default function UserLogin(){
    const [cookies,setCookies,removeCookies] = useCookies(['userName']);
    const [userDetails,setUserDetails] = useState({UserName:'',Password:''})
    const code = UseCaptcha();
    function HandleUser(e){
        setUserDetails({
            UserName:e.target.value,
            Password:userDetails.Password
        })
    }

    function HandlePassword(e){
        setUserDetails({
            UserName:userDetails.UserName,
            Password:e.target.value
        })
    }
    function HandleLogin(){
        setCookies("userName",userDetails.UserName,{path:'/',expires: new Date("2023-04-24")})
        alert("Login Success");
    }
    function HandleSignOut(){
        removeCookies("userName")
        alert("Sign out Success Fully....")
    }
    useEffect(()=>{
        if(cookies.userName==undefined){
            alert("Please Login");
        }
    })
    function HandleCode(){
        
    }
    return (
        <div className="container-fluid">
            <h2>User Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input onChange={HandleUser} type="text"/></dd>
                <dt>Password</dt>
                <dd><input onChange={HandlePassword} type="password"/></dd>
                <dt>Verify Code<button>New Code</button></dt>
                <dd>{code.code}</dd>
            </dl>
            <button onClick={HandleLogin} className="btn btn-primary">Login</button>
            <hr/>
             <div>
                <h3>Home<button onClick={HandleSignOut} className="btn btn-link">Signout</button></h3>
                Hello! {cookies.userName}
             </div>
        </div>
    )
}