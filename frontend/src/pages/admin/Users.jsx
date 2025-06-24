import { useEffect, useState } from "react"

const Users = ()=>{

    const [users, setUsers] = useState([])
    
    async function fetchUsers(){
        try {
         const rawResponse = await fetch("http://localhost:3000/user/all")
         const response = await rawResponse.json()
         console.log(response.message)
         setUsers(response.data)
        } catch (error) {
         console.log("Error :",error)
        }
     }
        const deleteUser = async(id)=>{

            const confirmDelete = confirm("Are you sure you want to delete this user?")
            if(!confirmDelete){
                return
            }
            const rawResponse = await fetch("http://localhost:3000/user/delete/"+id, {
                "method" : "delete"
            })
            const response = await rawResponse.json()
            alert(response.message)
            fetchUsers()

        }

    useEffect(()=>{
        fetchUsers()
    },[])

    return(
        <div className="flex flex-col  items-center ">
            <h1 className="font-bold text-2xl m-4">List of Users</h1>
            {users.map((item)=>{
                return(
                    <div  className="border-b min-w-3xl flex justify-between">
                        <div key={item._id} className="flex flex-col items-center justify-center text-bold p-4 ">
                            <div className="m-2 text-xl">Username : {item.username}</div>
                            <div className="m-2 text-xl">Phone : {item.phone}</div>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="m-4 bg-blue-500 cursor-pointer hover:bg-blue-100 text-white hover:text-blue-600 font-bold rounded-sm p-3"
                            onClick={()=>window.location.href=`/user/detail/${item._id}`}>View Details</button>
                            <button className="m-4 bg-red-500 cursor-pointer hover:bg-red-100 text-white hover:text-red-600 font-bold rounded-sm p-3" onClick={()=>{
                                deleteUser(item._id)
                            }}>Delete User</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users