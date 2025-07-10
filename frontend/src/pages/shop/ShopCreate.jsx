import {  useState } from "react"
import { toast } from "react-hot-toast"
import useAuthStore from "../../store/authStore"

const ShopCreate = () => {
  const { token } = useAuthStore()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [image, setImage] = useState("https://placehold.co/300")

  const createShop = async () => {
   try{
     const response = await fetch(import.meta.env.VITE_API_URL+"/shop/create", {
      method: "post",
      headers: {
        "content-type": "application/json",
        "authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        address: address,
        image: image
      })
    })
    const data = await response.json()
    if(response.status == 201){
      toast.success(data.message)
    }
    else{
      toast.error(data.message)
    }
    setTimeout(()=>{
      window.location.href = "/shops"
    }, 1500)
   }
   catch(err){
    toast.error("Error Creating Shop")
   }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-300">
      <h1 className="text-white font-extrabold text-3xl mb-8">Create Your Local Shop</h1>
      <div className="border-2 border-gray-300 rounded-lg shadow-lg p-10 bg-white flex flex-col items-center justify-center w-full max-w-md">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-300 rounded-md m-4 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Shop Name"
        />
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          className="border-2 border-gray-300 rounded-md m-4 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Phone Number"
        />
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          className="border-2 border-gray-300 rounded-md m-4 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Address"
        />
        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          className="border-2 border-gray-300 rounded-md m-4 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Image Url"
        />
        <button
          onClick={createShop}
          className="bg-blue-600 text-white cursor-pointer font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Create Shop
        </button>
      </div>
    </div>
  )
}

export default ShopCreate