import {useState} from 'react';

function Registration() {

  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    name : "",
    email : "",
    phone : "",
    password : "",
    address : "",
    role : ""
  })

  const handleChange = (e) => {
    setFormData((oldData) => ({
      ...oldData,
      [e.target.name]: e.target.value
    }));
    console.log(formData)
  };
  
  const register = async(e)=>{
    e.preventDefault()
    try{
      
    const response = await fetch("http://localhost:3000/auth/register",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    const data = await response.json()
    data? setMessage("success") : pass
    }
    catch(err){
      console.log(err)
    }
  }


  return <center>
    <h1>Registration</h1>
    <form>
      <label>
          name : 
          <input type="text" name="name" onChange={handleChange} />
      </label>
      <br />  <br />
      <label>
          email : 
          <input type="email" name="email" onChange={handleChange}/>
      </label>
      <br />  <br />
      <label>
          password : 
          <input type="password" name="password" onChange={handleChange}/>
      </label>
      <br />  <br />
      <label>
          phone : 
          <input type="text" name="phone" onChange={handleChange}/>
      </label>
      <br />  <br />
      <label>
          address : 
          <input type="text" name="address" onChange={handleChange} />
      </label>
      <br />  <br />
      <label>
          role : 
          <label>user<input type="radio" value={"user"} name="role" onChange={handleChange} /></label>
          <label>shop owner<input type="radio" value={"shopOwner"}  name="role" onChange={handleChange} /></label>
      </label>
      <br />  <br />
      <button onClick={register}>Register</button>
    </form>
    {message}
  </center>
}

export default Registration;
