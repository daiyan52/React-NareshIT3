import { useFormik } from "formik";
export default function FormikValidation(){

    function VarifyUserDetails(userDetails){
        const errors={};
        if(userDetails.userName==''){
            errors.userName = "User Name Required";
        }else if(userDetails.userName.length<4){
            errors.userName = "User Name to Short...";
        }
        if(userDetails.age==''){
            errors.age = "Age Required";
        } else if(isNaN(userDetails.age)){
            errors.age = "Age must be a number";
        }else if(userDetails.age<18){
            errors.age = "You are under 18";
        }
        if(userDetails.Email==''){
            errors.Email = 'Email Required';
        }else if(userDetails.Email.indexOf('@')<=2){
            errors.Email = "Invalid Email";
        }
        if(userDetails.Mobile==''){
            errors.Mobile = "Mobile Number Required";
        }else if(userDetails.Mobile.match(/\+91\d{10}/)){
            errors.Mobile = "";
        }else{
            errors.Mobile = "Invalid Mobile Number";
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            userName: "",
            age:0,
            Email:'',
            Mobile:''
        },
        validate:VarifyUserDetails,
        onSubmit: values => {
            alert(JSON.stringify(values));
            // alert(Justify);
        }
    })
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input name="userName" onChange={formik.handleChange} type="text"/></dd>
                <dd className="text-danger">{formik.errors.userName}</dd>
                <dt>Age</dt>
                <dd><input name="age" onChange={formik.handleChange} type="text"/></dd>
                <dd className="text-danger">{formik.errors.age}</dd>
                <dt>Email</dt>
                <dd><input name="Email" onChange={formik.handleChange} type="text"/></dd>
                <dd className="text-danger">{formik.errors.Email}</dd>
                <dt>Mobile</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Mobile" /></dd>
                <dd className="text-danger">{formik.errors.Mobile}</dd>
            </dl>
            <button className="btn btn-success">Register</button>
            </form>
        </div>
    )
}