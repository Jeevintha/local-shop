import { useState } from "react"
import toast from "react-hot-toast"
import useAuthStore from "../../store/authStore"

const Login = ()=>{

    const [phone , setPhone] = useState("")
    const [password , setPassword] = useState("")
    const { setUser, setToken } = useAuthStore()

    const handleLogin = async () => {
        try {
            const rawResponse = await fetch(import.meta.env.VITE_API_URL+"/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phone: phone,
                    password: password
                })
            });
            const response = await rawResponse.json();
            if (!rawResponse.ok) {
                throw new Error(response.message || "Login failed");
            }
            toast.success(response.message);
            setUser(response.user);
            setToken(response.token);
            setTimeout(() => {
                window.location.href = "/shops";
            }, 1500);
        } catch (error) {
            toast.error(error.message);
        }
    }

    return(
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-extrabold text-center text-gray-800">Local Shop</h1>
                <h4 className="text-blue-500 text-center mb-6">Login Page</h4>

                <div className="flex flex-col space-y-4">
                    <input 
                        type="number" 
                        placeholder="Phone" 
                        className="border border-gray-300 p-2 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        onChange={(e)=>{setPhone(e.target.value)}} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="border border-gray-300 p-2 rounded focus:outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500" 
                        onChange={(e)=>{setPassword(e.target.value)}} 
                    />
                    <button 
                        onClick={handleLogin}
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer transition duration-200"
                    >
                        Login
                    </button>
                    <div  className="text-center"><a className=" text-blue-600 cursor-pointer" href="/register">Sign up for Local Shop</a></div>
                </div>
            </div>
        </div>
    )
}

export default Login