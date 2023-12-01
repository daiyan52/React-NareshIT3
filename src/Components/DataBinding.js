// export default function DataBinding(){
//     var Product ={
//         Name:'Samsung',
//         price:'45000',
//         stock: true
//     }
//     return(
//         <div className="container">
//             <h2>Product Details</h2>
//             <dl>
//                 <dt>Name</dt>
//                 <dd>{Product.Name}</dd>
//                 <dt>Price</dt>
//                 <dd>{Product.price}</dd>
//                 <dt>Stock</dt>
//                 <dd>{Product.stock==true?"Available":"Out of Stock"}</dd>
//             </dl>
//         </div>
//     )
// }

import { type } from "@testing-library/user-event/dist/type"
import { useState } from "react"

// export default function DataBinding(){
//     var categories = ["All","Electronic","Footwear","Fashion"]
//     return(
//         <div className="container">
//             <h2>Categories</h2>
//             <ol>
//                 {
//                     categories.map(category=>{
//                         return(
//                             <li key={category}>{category}</li>
//                         )
//                     })
//                 }
//             </ol>
//             <h2>Seclect Categories</h2>
//             <select>
//                 {
//                     categories.map(category=>
//                         <option key={category} value={category}>{category}</option>
//                         )
//                 }
//             </select>
//         </div>
//     )
// }


// export default function DataBinding(){
//     var Studets = [
//         {Name:'Daiyan Alam',roll:52},
//         {Name:'Raju',roll:55}
//     ];
//     return(
//         <div className="container">
//             <h2>Student List</h2>
//             <table className="table table-hover">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Roll</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         Studets.map(stu=>
//                             <tr>
//                                 <td key={stu}>{stu.Name}</td>
//                                 <td key={stu}>{stu.roll}</td>
//                             </tr>
//                             )
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }

//Nested Iteration
// export default function DataBinding(){
//     var Skills = [
//         {Categories:"Language",Type:["C","C++","Java","Python"]},
//         {Categories:"S-Language",Type:["html","css","javaScript","React"]}
//     ]
//     return(
//         <div className="container">
//             <h2>Skills</h2>
//             <ol>
//                 {
//                     Skills.map(items =>
//                         <li key={items.Categories}>{items.Categories}
//                         <ul>
//                             {
//                                 items.Type.map(type => 
//                                     <li key={type}>{type}</li>
//                                     )
//                             }
//                         </ul>
//                         </li>
//                         )
//                 }
//             </ol>
//             <h2>select Skills</h2>
//             <select>
//                 {
//                     Skills.map(items =>
//                         <optgroup key={items.Categories} label={items.Categories}>
//                             {
//                                 items.Type.map(type =>
//                                     <option key={type}>{type}</option>
//                                     )
//                             }

//                         </optgroup>
//                         )
                        
//                 }
//             </select>
//         </div>
//     )
// }


 
import { useEffect } from "react";
export default function DataBinding(){
    const [Mars,setMars] = useState();
    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response=> response.json())
        .then(data=>{
            setMars(data);
        })
    },[])
    return(
        <div className="container">
            <h2>Mars Photos</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Mars.photos.map(Photo=>
                            <tr>
                                <td>{Photo.id}</td>
                                <td>{Photo.camera.full_name}</td>
                                <td>{Photo.rover.name}</td>
                                <td>
                                    <img src={Photo.img_src} width="100" height="100"/>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}