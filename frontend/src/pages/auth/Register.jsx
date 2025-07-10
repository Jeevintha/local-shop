import { useState } from "react"

const Register = ()=>{

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [phone , setPhone] = useState("")

    const handleRegister = async()=>{
        const rawResponse = await fetch(import.meta.env.VITE_API_URL+"/auth/register",{
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username,password,phone
            })
        })
        const response = await rawResponse.json()
        alert(response.message)
        window.location.href = "/users"
    }

    return(
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-extrabold text-center text-gray-800">Local Shop</h1>
                <h4 className="text-blue-500 text-center mb-6">Registration Page</h4>

                <div className="flex flex-col space-y-4">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        className="border border-gray-300 p-2 rounded focus:outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500" 
                        onChange={(e)=>{setUsername(e.target.value)}} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="border border-gray-300 p-2 rounded focus:outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500" 
                        onChange={(e)=>{setPassword(e.target.value)}} 
                    />
                    <input 
                        type="number" 
                        placeholder="Phone" 
                        className="border border-gray-300 p-2 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        onChange={(e)=>{setPhone(e.target.value)}} 
                    />
                    <button 
                        onClick={handleRegister} 
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer transition duration-200"
                    >
                        Register
                    </button>
                    <div className="text-center"><a href="/login" className="text-blue-600 cursor-pointer">Already have a account?</a></div>
                </div>
            </div>
        </div>
    )
}

export default Register