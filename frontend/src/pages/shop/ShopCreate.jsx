import { useState } from "react"

const ShopCreate = () => {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState(0)
  const [address, setAddress] = useState("")

    const createShop = async()=>{
      const response = await fetch("http://localhost:3000/shop/create",{
        method: "post",
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify({
          name : name,
          phone : phone,
          address : address
        })
      })
      const data = await response.json()

    }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400">
      <h1 className="text-white font-extrabold text-2xl mb-6">Local Shop</h1>
        <div className="border-2 p-8 bg-white flex flex-col items-center justify-center">
          <input type="text" onChange={(e)=>setName(e.target.value)} className="border-2 rounded-md m-4 p-2 w-sm" placeholder="name" />
          <input type="text" onChange={(e)=>setPhone(e.target.value)} className="border-2 rounded-md m-4 p-2 w-sm" placeholder="phone" />
          <input type="text" onChange={(e)=>setAddress(e.target.value)} className="border-2 rounded-md m-4 p-2 w-sm" placeholder="address" />
          <button onClick={createShop}>Create</button>
        </div>
    </div>
  )
}

export default ShopCreate