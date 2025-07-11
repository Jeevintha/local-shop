import { useState, useEffect } from "react"
import FormInput from "../../components/FormInput"
import useAuthStore from "../../store/authStore"
import { toast } from "react-hot-toast"
const ProductCreate = () => {
  const { token } = useAuthStore()
  const [name, setName] = useState("")
  const [stock, setStock] = useState(0)
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")
  const [shopId, setShopId] = useState("")
  const [shops, setShops] = useState([])

  const fetchOwnedShops = async () => {
    const raw = await fetch(import.meta.env.VITE_API_URL+"/shop/owned", {
        headers: {
            "authorization": `Bearer ${token}`
        }
    })
    const response = await raw.json()
    setShops(response.data)
}

useEffect(() => {
    fetchOwnedShops()
}, [])
  const createProduct = async() => {
    if(!name || !stock || !price || !image || !shopId) {
      toast.error("All fields are required")
      return;
    }

    const rawResponse = await fetch(import.meta.env.VITE_API_URL + "/product/create", {
      method: "post",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        stock: stock,
        price: price,
        image: image,
        shop: shopId
      })
    })
    const response = await rawResponse.json()
    toast.success(response.message)
    setTimeout(()=>{
      window.location.href = "/products"
    },1500)
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

          <select onChange={(e) => setShopId(e.target.value)} className="p-2 border rounded">
            <option value="">Select Shop</option>
            {shops.map(shop => (
              <option key={shop._id} value={shop._id}>{shop.name}</option>
            ))}
          </select>

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