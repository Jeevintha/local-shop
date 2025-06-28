import React from 'react';
import { ShoppingBag, Shield, ArrowRight, MapPin, Heart } from 'lucide-react';

const SimpleMarketplace = () => {
    const categories = [
        {
            title: "Fresh Produce",
            subtitle: "Farm-fresh fruits & vegetables",
            image: "https://images.pexels.com/photos/3025236/pexels-photo-3025236.jpeg",
            items: "120+ items"
        },
        {
            title: "Handmade Crafts",
            subtitle: "Unique artisan creations",
            image: "https://images.pexels.com/photos/8063888/pexels-photo-8063888.jpeg",
            items: "85+ items"
        },
        {
            title: "Baked Goods",
            subtitle: "Fresh from local bakers",
            image: "https://images.pexels.com/photos/10488747/pexels-photo-10488747.jpeg",
            items: "200+ items"
        },
        {
            title: "Local Services",
            subtitle: "Professional services nearby",
            image: "https://images.pexels.com/photos/8619014/pexels-photo-8619014.jpeg",
            items: "50+ services"
        }
    ];

    const features = [
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Verified Vendors",
            description: "All sellers are verified for quality and trust"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Local Focus",
            description: "Supporting businesses in your community"
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Quality First",
            description: "Curated selection of the finest products"
        }
    ];

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-blue-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Discover Amazing
                        <span className="text-blue-600 block">Local Products</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Connect with local vendors and discover unique products in your community.
                        Support small businesses while finding exactly what you need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/shops">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                            Start Shopping
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                        </a>
                        <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                            Become a Vendor
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">5,000+</div>
                            <div className="text-gray-600">Products</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">200+</div>
                            <div className="text-gray-600">Vendors</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">10,000+</div>
                            <div className="text-gray-600">Customers</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose LocalMarket?</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            We make it easy to discover and purchase from the best local businesses
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <div className="text-blue-600">{feature.icon}</div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Categories</h2>
                        <p className="text-gray-600 text-lg">
                            Browse our most popular product categories
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                <div className="aspect-square overflow-hidden rounded-t-xl">
                                    <img 
                                        src={category.image} 
                                        alt={category.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{category.subtitle}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-blue-600 text-sm font-medium">{category.items}</span>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Start Selling?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Join hundreds of local vendors who are growing their business with LocalMarket. 
                        It's free to get started.
                    </p>
                    <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
                        Start Selling Today
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                    <ShoppingBag className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold">LocalMarket</h3>
                            </div>
                            <p className="text-gray-400 mb-4 max-w-md">
                                Connecting communities through local commerce. Discover amazing products 
                                and support small businesses in your area.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} LocalMarket. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SimpleMarketplace;