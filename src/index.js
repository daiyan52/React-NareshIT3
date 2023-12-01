import React from 'react';
import ReactDOM from 'react-dom/client';
 
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as Icon from 'react-bootstrap-icons';

// import '../node_modules/bootstrap/dist/css/bootstap.css';
// import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/css/bootstrap-icons.css";
// import '../node_modules/bootstrap-icons/font/bootstap-icons.css';

import "bootstrap-icons/font/bootstrap-icons.css";
import reportWebVitals from './reportWebVitals';
import NetflixIndex from './Components/NetflixIndex';
import NetflixRegisterComponents from './Components/netflixRegisterComponents';
import LoginUser from './Components/LoginUser';
import Register from './Components/Register';
import DataBinding from './Components/DataBinding';
import Shopping from './Components/ShoppingComponents';
import Cart from './Cart';
import EventBinding from './Components/EventBindingComp';
import TwoWayBinding from './Components/TwoWayBinding';
import ShoppingComponent from './Components/ShoppingComponents';
import ShoppingComponents from './Components/ShoppingComponents';
import TwowayClassDemo from './Components/TwowayClassDemo';
import ShoppingClassDemo from './Components/ShoppingClassDemo';
import LoginComponents from './Components/LoginComponents';
import FormComponents from './Components/FormComponents';
import FormikDemo from './Components/FormikDemo';
import FormikValidation from './Components/FormikValidation';
import YupValidation from './Components/YupValidation';
import YupValidationComponents from './Components/YupValidationComponents';
import LifeCycleDemo from './Components/LifeCycleDemo';
import ReactHooksDemo from './Components/ReactHooksDemo';
import ContextDemo from './Components/ContextDemo';
import { CookiesProvider } from 'react-cookie';
import UserLogin from './Components/UserLogin';
import ReducerDemo from './Components/ReducerDemo';
import CustomHooksDemo from './Components/CustomHooksDemo';
import JQueryAjaxDemo from './Components/JQueryAjaxDemo';
import SetReminder from './Components/SetReminder';
import ModifyReminder from './Components/ModifyReminder';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Register /> */}
    {/* <DataBinding /> */}
    {/* <Cart/> */}
    {/* <EventBinding/> */}
    {/* <TwoWayBinding/> */}
    {/* <ShoppingComponents/> */}
    {/* <TwowayClassDemo/> */}
    {/* <ShoppingClassDemo/> */}
    {/* <NetflixIndex/> */}
    {/* <LoginComponents/> */}
    {/* <FormComponents/> */}
    {/* <FormikDemo/> */}
    {/* <FormikValidation/> */}
    <SetReminder/>
    <ModifyReminder/>
    {/* <YupValidation/> */}
    {/* <YupValidationComponents/> */}
    {/* <ReactHooksDemo/> */}
    {/* <LifeCycleDemo/> */}
    {/* <ContextDemo/> */}
     {/* <CookiesProvider>
      <UserLogin/>
     </CookiesProvider> */}
     {/* <ReducerDemo/> */}
     {/* <CustomHooksDemo/> */}
     {/* <UserLogin/> */}
     {/* <JQueryAjaxDemo/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
