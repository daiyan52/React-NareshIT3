import { useState,useEffect } from "react";
import $ from "jquery";
export default function JQueryAjaxDemo(){
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        $.ajax({
            method: "GET",
            url: "http://localhost:4000/getusers",
            success: function(response){
                setUsers(response);
            }
        })
    },[])
    return(
        <div className="container-fluid">
            <h2>User Details</h2>
            <ol>
                {
                    users.map(user =>
                        <li>${user.UserId}</li>
                        )
                }
            </ol>
        </div>
    )
}