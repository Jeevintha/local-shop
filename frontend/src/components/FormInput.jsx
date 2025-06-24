const FormInput = ({placeholder,setFn, type = "text"}) =>{
    return(
        <>
            <input 
                type={type}
                placeholder= {placeholder}
                className="border border-gray-300 p-2 rounded focus:outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500" 
                onChange={(e)=>{setFn(e.target.value)}} 
            />
        </>
    )
}

export default FormInput