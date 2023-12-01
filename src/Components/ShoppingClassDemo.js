import { render } from "@testing-library/react";
import React from "react";
import { CardComponents } from "./CardComponents";
export default class ShoppingClassDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:[],
            products:[]
        }
        this.HandleCategoriesChange = this.HandleCategoriesChange.bind(this);
    }
    GetCategories(){
        fetch('https://fakestoreapi.com/products/categories')
        .then(response=> response.json())
        .then(data=>{
            this.setState({
                categories:data
            })
        })
    }
    GetProducts(url){
        fetch(url)
        .then(response=> response.json())
        .then(data=> {
            this.setState({
                products:data
            })
        })
    }
    componentDidMount(){
        this.GetCategories();
        this.GetProducts('https://fakestoreapi.com/products');
    }

    HandleCategoriesChange(e){
        this.GetProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
    }
    render() {
        return (
            <div className="container-fluid">
                <header className="bg-danger p-2 text-white text-center">
                    <h2><span className="bi bi-cart"></span>Shopping From Home</h2>
                </header>
                <section onChange={this.HandleCategoriesChange} className="row">
                    <nav className="col-3">
                        <h2>Select Category</h2>
                        <select  className="form-select">
                            {
                                this.state.categories.map(category =>
                                    <option key={category}>{category}</option>)
                            }
                        </select>
                    </nav>
                    <main className="col-9">
                        <div className="d-flex flex-wrap">
                            {
                                this.state.products.map(product =>
                                     <CardComponents key={product.id} product={product}/>
                                    )
                            }
                        </div>
                    </main>
                </section>
            </div>
        )
    }
}