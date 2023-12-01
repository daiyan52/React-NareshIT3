import { useState } from "react";
export default function EventBinding(){
    const [UserName,setUserName] = useState('Daiyan')

    function handleUserName(e){
        setUserName(e.target.value)
    }
    return(
        <div className="container-fluid">
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" value={UserName} onChange={handleUserName}/></dd>
            </dl>
            <h3>Hello! {UserName}</h3>
        </div>
    )
}