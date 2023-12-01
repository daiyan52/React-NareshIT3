import { useState } from "react"
export default function FormComponents(){
    const [Users] = useState([
        {UserId:'daiyan52'},
        {UserId:'anish_62'},
        {UserId:'raju_55'},
        {UserId:'aditya_17'}

    ])
    const [userMsg,setUserMsg] = useState(" ")
    const [isUserValid,setUserValid] = useState(false)
    const [paaswordMsg,setPaaswordMsg] = useState('')
    const [capsStatus,setCapsStatus] = useState(false)
    const [cityMsg,setCityMsg] = useState('')
    const [userDetails,setUserDetils] = useState({UserId:"",Password:'',City:''})
    function verifyUserId(e){
        for(var user of Users){
            if(user.UserId == e.target.value){
                setUserMsg('User id Taken-try Another')
                setUserValid(true)
                break;
            }
            else{
                setUserMsg('User Id Available')
                setUserValid(false)
            }
        }
    }
    function HideUserMsg(e){
        if(e.target.value==''){
            setUserMsg("User Id Required")
        }
        else{
            setUserMsg('')
        }
    }
    function VerifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){
            setPaaswordMsg('Strong PassWord')
        }
        else {
            if(e.target.value.length<4){
                setPaaswordMsg('Poor Password')
            }else{
                setPaaswordMsg('Weak Password')
            }
        }
    }
    function HidePaasWordMsg(){
        setPaaswordMsg('')
        setCapsStatus(false)
    }
    function VarifyCaps(e){
        if(e.KeyCode>=65 && e.KeyCode<=90 || e.which>=65 && e.which<=90){
            setCapsStatus(true)
        }else{
            setCapsStatus(false)
        }
    }
    function VerifyCity(e){
        if(e.target.value=="notcity"){
            setCityMsg("Please Select City")
        }else{
            setCityMsg('')
        }
    }
    function HandleUserChange(e){
        setUserDetils({
            UserId:e.target.value,
            Password:userDetails.Password,
            City:userDetails.City,
        })
    }

    function HandlePassWordChange(e){
        setUserDetils({
            UserId:userDetails.UserId,
            Password:e.target.value,
            City:userDetails.City,
        })
    }
    function HandleCityChange(e){
        setUserDetils({
            UserId:userDetails.UserId,
            Password:userDetails.Password,
            City:e.target.value,
        })
    }
    function RegisterClicked(){
        alert(JSON.stringify(userDetails))
    }
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text"onBlur={HideUserMsg} onChange={HandleUserChange} onKeyUp={verifyUserId} className="form-control"/></dd>
                <dd className={isUserValid==true?'text-danger':'text-success'}>{userMsg}</dd>
                <dt>Password</dt>
                <dd><input onKeyPress={VarifyCaps} onChange={HandlePassWordChange} onBlur={HidePaasWordMsg} onKeyUp={VerifyPassword} type="password"/></dd>
                <dd>{paaswordMsg}</dd>
                <dd className={(capsStatus==true)?'d-block':'d-none'}>
                   <span className="text-warning"> <span className="bi bi-exclamation-triangle"></span>Caps On</span>
                </dd>
                <dt>Your City</dt>
                <dd>
                    <select onChange={VerifyCity}>
                        <option value="notcity">Select Your City</option>
                        <option value="Patna">Patna</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Delhi">Delhi</option>
                    </select>
                </dd>
                <dd className="text-danger">{cityMsg}</dd>
                <button onClick={RegisterClicked} className="btn btn-primary">Register</button>
            </dl>
        </div>
    )
}