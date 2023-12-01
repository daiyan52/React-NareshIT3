import { useFormik,Formik,Field,ErrorMessage,Form } from "formik"
import * as yup from 'yup'
export default function YupValidationComponents(){
    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={
                {
                    UserName:'',
                    Email:'',
                    Age:'',
                    City:''
                }}
                validationSchema={
                    yup.object({
                        UserName:yup.string().min(4,'Name too short').max(15,'Name too long').required('Name required'),
                        Email:yup.string().email('Invalid Email').required("Email Required"),
                        Age:yup.number().required("Age Required"),
                        City:yup.string()
                    })
                }
                onSubmit={
                    values=>{
                        alert(JSON.stringify(values))
                    }
                }
                >
                {
                    fields=>
                    <Form>
                        {
                    <div>
                        <dl>
                           <dt>User Name</dt>
                           <dd><Field name="UserName" type="text"></Field></dd>
                           <dd className="text-danger"><ErrorMessage name="UserName"></ErrorMessage></dd>
                           <dt>Email</dt>
                           <dd><Field name="Email" type="text"></Field></dd>
                           <dd className="text-danger"><ErrorMessage name="Email"></ErrorMessage></dd>
                           <dt>Age</dt>
                           <dd><Field name="Age" type="text"></Field></dd>
                           <dd className="text-danger"><ErrorMessage name="Age"></ErrorMessage></dd>
                           <dt>City</dt>
                           <dd><Field name="City" as="select">
                               <option>Patna</option>
                               <option>Kolkata</option>
                               <option>Delhi</option>
                               </Field></dd>
                        </dl>
                        <button disabled={(fields.isValid)?false:true} type="submit" className="btn btn-primary">Submit</button>
                   </div>
                      }
               </Form>
                }
            </Formik>
        </div>
    )
}