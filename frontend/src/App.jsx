
const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-400">
      <h1 className="text-white font-extrabold text-2xl">Local Shop</h1>
      <div>
        <div>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="phone" />
          <input type="text" placeholder="address" />
          <button onClick={createShop}>Create</button>
        </div>
      </div>
    </div>
  )
}

export default App