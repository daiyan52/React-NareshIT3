import { useState } from "react";
export default function TwoWayBinding(){
    const [Product, setProduct] = useState({Name:'', Price:0, City:'',Stock:false});
    const [newProduct,newSetProduct] = useState({Name:'',Price:0,City:'',Stock:false});

    function handleName(e){
        setProduct({
            Name:e.target.value,
            Price:Product.Price,
            City:Product.City,
            Stock:Product.Stock
        })
    }
    function handlePrice(e){
        setProduct({
            Name:Product.Name,
            Price:e.target.value,
            City:Product.City,
            Stock:Product.Stock
        })
    }
    function handleCity(e){
        setProduct({
            Name:Product.Name,
            Price:Product.Price,
            City:e.target.value,
            Stock:Product.Stock
        })
    }
    function handleStock(e){
        setProduct({
            Name:Product.Name,
            Price:Product.Price,
            City:Product.City,
            Stock:e.target.checked
        })
    }

    function HandleRegisterClicked(){
        newSetProduct(Product)
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h2>Register Product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input className="form-control" onChange={handleName} type="text"/></dd>
                        <dt>Price</dt>
                        <dd><input className="form-control" onChange={handlePrice} type="text"/></dd>
                        <dt>City</dt>
                        <dd>
                            <select onChange={handleCity} className="form-select">
                                <option>Bihar</option>
                                <option>West Bengal</option>
                                <option>Delhi</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input className="form-check-input" onChange={handleStock} type="checkbox"/>Available
                        </dd>
                    </dl>
                    <button onClick={HandleRegisterClicked} className="btn btn-primary w-100">Register</button>
                </div>
                <div className="col-9">
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{newProduct.Name}</dd>
                        <dt>Price</dt>
                        <dd>{newProduct.Price}</dd>
                        <dt>City</dt>
                        <dd>{newProduct.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(newProduct.Stock==true)?"Available":"Out Of Stock"}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}