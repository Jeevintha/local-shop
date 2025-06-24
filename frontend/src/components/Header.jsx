const Header = ()=>{
    return(
        <nav className="flex justify-between bg-blue-400 text-white font-bold">
            <h1 className="m-4 font-bold text-2xl">Local Shop</h1>
            <ul className="flex ">
                <li className="m-4"><a href="/"  className="hover:text-blue-400 hover:bg-white p-2 rounded-sm">Home</a></li>
                <li className="m-4"><a href="/shops" className="hover:text-blue-400 hover:bg-white p-2 rounded-sm">Shops</a></li>
                <li className="m-4"><a href="/users" className="hover:text-blue-400 hover:bg-white p-2 rounded-sm">Users</a></li>
                <li className="m-4"><a href="/register" className="hover:text-blue-400 hover:bg-white p-2 rounded-sm">Register</a></li>
                <li className="m-4"><a href="/products" className="hover:text-blue-400 hover:bg-white p-2 rounded-sm">Products</a></li>
            </ul>
        </nav>
    )
}

export default Header