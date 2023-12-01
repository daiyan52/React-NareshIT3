import { Formik,useFormik } from "formik"
export default function FormikDemo(){

    const formik = useFormik({
        initialValues: {
            UserName:'',
            Password:'',
            City:''
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
    return (
        <div className="container-md">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} value={formik.values.UserName}/></dd>
                    <dt>PassWord</dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange} value={formik.values.Password}/></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} value={formik.values.City}>
                            <option>Patna</option>
                            <option>Kolkata</option>
                            <option>Delhi</option>
                        </select>
                    </dd>
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
            <h2>User Details</h2>
            {formik.values.UserName}
            {formik.values.Password}
            {formik.values.City}
        </div>
    )
}