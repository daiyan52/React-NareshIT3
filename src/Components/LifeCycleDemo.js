import React from "react";
class SuccessComponents extends React.Component {
    componentDidMount() {
        alert('Success Components will render')
    }
    componentWillUnmount() {
        alert("Success Components will Unmount")
    }
    render() {
        return (
            <div>
                <h2 className="text-primary">Login Success...</h2>
            </div>
        )
    }
}

class ErrorComponents extends React.Component {
    componentDidMount() {
        alert('Error Components will render')
    }
    componentWillUnmount() {
        alert("Error Components will Unmount")
    }
    render() {
        return (
            <div>
                <h2 className="text-danger">Invaid Login</h2>
            </div>
        )
    }
}
export default class LifeCycleDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails:{
                UserName:'Daiyan_nit',
                Password:'daiyan@123'
            },
            formDetails:{
                UserName:"",
                Password:''
            },
            result:''
        }
        this.handleUserName = this.handleUserName.bind(this)
        this.handleUserPassword = this.handleUserPassword.bind(this)
        this.handleLoginClick = this.handleLoginClick.bind(this)
    }
    handleUserName(event){
        this.setState({
            formDetails:{
                UserName:event.target.value,
                Password:this.state.formDetails.Password
            }
        })
    }
    handleUserPassword(event){
        this.setState({
            formDetails:{
                UserName:this.state.formDetails.UserName,
                Password:event.target.value
            }
        })
    }
    handleLoginClick(){
        if(this.state.formDetails.UserName==this.state.userDetails.UserName && this.state.formDetails.Password==this.state.userDetails.Password){
            this.setState({
                result:<SuccessComponents/>
            })
        }else{
            this.setState({
                result:<ErrorComponents/>
            })
        }
    }
    render() {
        return (
            <div className="container">
                <dl>
                    <dt>User Name</dt>
                    <dd><input onChange={this.handleUserName} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input onChange={this.handleUserPassword} type="password"/></dd>
                </dl>
                <button onClick={this.handleLoginClick} className="btn btn-primary">Login</button>
                <div>
                    {this.state.result}
                </div>
            </div>
        )
    }
}