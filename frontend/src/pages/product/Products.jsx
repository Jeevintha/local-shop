import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

const Products = ()=>{
    const [products, setProducts] = useState([])

    const fetchProducts = async()=>{
        try {
            const rawResponse = await fetch('http://localhost:3000/product/all')
            const response = await rawResponse.json()
            setProducts(response.data)
        } catch (error) {
            console.log("error :" ,error)
            alert(error)
        }
    }
    useEffect(()=>{
        fetchProducts()
    }, [])
    return(
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-semibold text-gray-800">Products</h1>
                <Link to={"/product/create"} className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"> + Create Product</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item)=>{
                return(
                    <div key={item._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-4">
                            <h1 className="text-xl font-semibold text-gray-800">{item.name}</h1>
                            <h3 className="text-lg text-gray-600">Rs.{item.price}</h3>
                            <h5 className="text-sm text-gray-500">Stock Available: {item.stock}</h5>
                            <Link to={`/product/detail/${item._id}` } className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"> View Details </Link>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Products