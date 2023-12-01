import { useState } from "react";
export default function LoginComponents(){
    const [theme,setTheme] = useState('');
    function HandleThemeChange(e){
         if(e.target.checked){
            setTheme('bg-dark text-white p-2 w-25')
         }
         else{
            setTheme('bg-light text-dark p-2 w-25')
         }
    }
    return(
        <div className="container-fluid">
             <div className={theme}>
             <h2>User Login</h2>
            <div className="form-switch">
                <input onChange={HandleThemeChange} className="form-check-input" type="checkbox"/>
            </div>
            <dl>
                <dt>User Name</dt>
                <dd><input className="form-control" type="text"/></dd>
                <dt>PassWord</dt>
                <dd><input className="form-control" type="texr"/></dd>
            </dl>
            <button className="btn btn-primary">Login</button>
             </div>
        </div>
    )
}