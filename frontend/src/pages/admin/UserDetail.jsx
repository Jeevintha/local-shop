import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


 const UserDetail = () => {

    const {id} = useParams()
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

useEffect(()=>{
     async function fetchUser(){
        setLoading(true)
        const rawResponse = await fetch('http://localhost:3000/user/'+id)
        const response = await rawResponse.json()
        console.log(response.message)
        setUser(response.data)
        setLoading(false)
    }
    fetchUser()
},[])

  return (
    loading ? (
        <div>loading...</div>
    ): (
        <div>
            <h2>User detail</h2>
            <h1>Username : {user.username}</h1>
            <h1>Phone : {user.phone}</h1>
            <h1>Role : {user.role}</h1>
            <h1>Created At : {new Date(user.createdAt).toDateString()}</h1>
        </div>
    )
  )
}


export default UserDetail;