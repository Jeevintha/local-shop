import { ShoppingBag } from 'lucide-react';

const Header = ()=>{
    return(
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <ShoppingBag className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">LocalMarket</h1>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                    <a href="/shops" className="text-gray-700 hover:text-blue-600 font-medium">Shops</a>
                    <a href="/products" className="text-gray-700 hover:text-blue-600 font-medium">Products</a>
                    <a href="/users" className="text-gray-700 hover:text-blue-600 font-medium">Users</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <a href="/login" className="text-gray-700 hover:text-blue-600 font-medium">Sign In</a>
                    <a href="/shops" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                        Get Started
                    </a>
                </div>
            </div>
        </div>
        </header>
    )
}

export default Header