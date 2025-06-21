const Home = () => {
    return(
        <div>
            <div className="bg-blue-400 text-white flex flex-col justify-center items-center">
                <h1>Welcome to Local Shop</h1>
                <h4>Connect directly with local vendors</h4>
                <div>
                    <button className="bg-white text-blue-400 p-2 rounded-lg m-4 text-[12px]">Start Buying</button>
                    <button>Sell Your Products</button>
                </div>
            </div>
        </div>
    )
}

export default Home