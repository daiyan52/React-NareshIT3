import React,{useContext,useState} from "react"
var userDetailsContext = React.createContext(null);
export default function ContextDemo(){
    const [userDetails,setUserDetails] = useState({
        userName:'',
        email: ''
    })
    function handleUser(e){
        setUserDetails({
            userName:e.target.value,
            email:userDetails.email
        })
    }
    function handleEmail(e){
        setUserDetails({
            userName:userDetails.userName,
            email:e.target.value
        })
    }
    function handleSet(){
        setUserDetails({
            userName:userDetails.userName,
            email:userDetails.email
        })
    }
    return ( 
            <userDetailsContext.Provider value={userDetails}>
                <div className="container-fluid">
                    <h1>Site Index -{userDetails.userName}</h1>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input onChange={handleUser} type="text"/></dd>
                        <dt>Email</dt>
                        <dd><input onChange={handleEmail} type="text"/></dd>
                    </dl>
                    <button onClick={handleSet} className="btn btn-success">Set Data</button>
                    <HeaderComponent/>
                </div>
            </userDetailsContext.Provider>

    )
}

function HeaderComponent(){
    var userDetails = useContext(userDetailsContext);
    return (
        <div className="bg-info text-white" style={{height:'150px',padding:'10px'}}>
            <h2>Home -{userDetails.userName}</h2>
            <NavbarComponent/>
        </div>
    )
}

function NavbarComponent(){
    const userDetails = useContext(userDetailsContext);
    return (
        <div className="btn-toolbar bg-dark text-white justify-content-between">
            <div className="btn-group">
                <button className="btn btn-dark">Amazon</button>
            </div>
            <div className="btn-group">
                <button className="btn btn-dark">{userDetails.email}</button>
            </div>
        </div>
    )
}