import React from "react";
//  export default class TwowayClassDemo extends React.Component
// {
//     constructor(props){
//         super(props);
//         this.state = {
//             title:'Product Details',
//             Name:'MacOs',
//             Price:60000,
//             Stock:false,
//             Cities:["Patna",'Kolkata','Delhi'],
//             Rating:{rate:4.5,count:6500}
//         }
//     }
//     render(){
//         return (
//             <div className="container-fluid">
//                 <h2>{this.state.title}</h2>
//                 <dl>
//                     <dt>Name</dt>
//                     <dd>{this.state.Name}</dd>
//                     <dt>Price</dt>
//                     <dd>{this.state.Price}</dd>
//                     <dt>Stock</dt>
//                     <dd>{this.state.Stock===true?"Available":"Out Of Stock"}</dd>
//                     <dt>City</dt>
//                     <dd>
//                         <ol>
//                             {
//                             this.state.Cities.map(city =>
//                             <li key={city}>{city}</li>
//                             )
//                            }
//                         </ol>
//                     </dd>
//                     <dt>Rating</dt>
//                     <dd>
//                         <span className="bi bi-star-fill text-success"></span>{this.state.Rating.rate} [{this.state.Rating.count}]
//                     </dd>
//                 </dl>
//             </div>
//         )
//     }
// }


export default class TwowayClassDemo extends React.Component {
    constructor(props) {
        super(props);   
        this.state = {
            userName:'Daiyan'
        }
        // this.HandleUserChange = this.handleUserChange.bind(this)
    }

    HandleUserChange(e){
        this.setState({
            userName:e.target.value
        })
    }
    render() {
        return (
            <div className="container-md">
                <h2>User Details</h2>
                <input type="text" onChange={this.HandleUserChange.bind(this)} className="form-control"/>
                <h3>Hello! {this.state.userName}</h3>

            </div>
        )
    }
}