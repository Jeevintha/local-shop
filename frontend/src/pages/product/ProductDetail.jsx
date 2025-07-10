import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    async function fetchProduct(){
        try{
            const rawResponse = await fetch(import.meta.env.VITE_API_URL+"/product/"+id)
            const response = await rawResponse.json()
            setProduct(response.data)
        }
        catch(err){
            console.error("Error :",err)
            alert(err)
        }
    }

    useEffect(()=>{
        fetchProduct()
    }, [])

  return (
    product ? (
        <div className="border p-4 m-4">
        <h1>Name : {product.name}</h1>
        <h1>Price : {product.price}</h1>
        <h1>Stock : {product.stock}</h1>
    </div>
    ) : (
        <div>Loading ... </div>
    )
  )
}

export default ProductDetail