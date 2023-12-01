import UseFetchData from "./Hooks/UseFetchData";

export default function CustomHooksDemo(){
    const [data] = UseFetchData('http://fakestoreapi.com/products');
    return (
        <div className="container-fluid">
            <h2>Products</h2>
            <ol>
                {
                    data.map(product=>
                        <li>{product.title}</li>
                        )
                }
            </ol>
        </div>
    )
}