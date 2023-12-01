import { useEffect, useState } from "react";
export default function Cart(){
    const [cart,setCart] = useState([]);

    function LoadCart(){
        fetch('https://fakestoreapi.com/carts')
        .then(respons=> respons.json())
        .then(data=>{
            setCart(data)
        })
    }
    useEffect(()=>{
        LoadCart();
    },[])
    return(
        <div className="container">
            <h2>Cart</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserId</th>
                        <th>Date</th>
                        <th>Product</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       cart.map(Cart=>
                        <tr>
                            <td>{Cart.id}</td>
                            <td>{Cart.userId}</td>
                            <td>{Cart.date}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}