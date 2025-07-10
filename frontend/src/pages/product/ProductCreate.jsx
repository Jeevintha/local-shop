import { useState } from "react"
import FormInput from "../../components/FormInput"

const ProductCreate = () => {

  const [name, setName] = useState("")
  const [stock, setStock] = useState(0)
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")

    const createProduct = async()=>{

        if(!name || !stock|| !price) {
            alert("All fields are required")
            return;
        }

      const rawResponse = await fetch(import.meta.env.VITE_API_URL+"/product/create",{
        method: "post",
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify({
          name : name,
          stock : stock,
          price : price,
          image : image
        })
      })
      const response = await rawResponse.json()
      alert(response.message)
      window.location.href = "/products"
    }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-extrabold text-center text-gray-800">Local Shop</h1>
        <h4 className="text-blue-500 text-center mb-6">Create Your Product</h4>

        <div className="flex flex-col space-y-4">
    
            <FormInput setFn={setName} placeholder="Product Name" />
            <FormInput setFn={setStock} type="Number" placeholder="Stock Available" />
            <FormInput setFn={setPrice} type="Number" placeholder="Product Price" />
            <FormInput setFn={setImage} placeholder="Image Url" />
            <button 
                onClick={createProduct}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer transition duration-200"
            >
                Create Product
            </button>
        </div>
    </div>
</div>
  )
}

export default ProductCreate