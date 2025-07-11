    import Product from "../models/product.model.js"
    import Shop from "../models/shop.model.js"

    export const getAllProducts = async(req,res)=>{
        try {
            const products = await Product.find()
            res.status(200).json({
                message: "Fetched Products Successfully",
                data: products
            })
        } catch (error) {
            console.log("Internal Server Error :",error)
            res.status(500).json({
                message : "Internal server error"
            })
        }
    }

    export const getProduct = async(req,res)=>{
        try {
            const {id} = req.params
            const product = await Product.findById(id)
            res.status(200).json({
                message: "Fetched Product Detail Successfully",
                data: product
            })
        } catch (error) {
            console.log("Internal Server Error :",error)
            res.status(500).json({
                message : "Internal server error"
            })
        }
    }

    export const createProduct = async(req,res)=>{
        try {
            const {name, shop, stock, price, image} = req.body
            if(!name ||  !stock || !price || !image || !shop){
                return res.status(400).json({
                    message : "Name, Stock, Shop and price required"
                })
            }
            const shopExist = await Shop.findOne({_id: shop})
            if(!shopExist){
                return res.status(404).json({
                    message : "Shop not found"
                })
            }
            const product = await Product.create({
                name : name,
                stock : stock,
                price : price,
                image : image,
                shop : shop
            })
            res.status(201).json({
                message : "Product created successfully",
                data : product
            })

        } catch (error) {
            console.log("Internal Server Error :",error)
            res.status(500).json({
                message : "Internal server error"
            })
        }
    }

    export const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const deletedProduct = await Product.findByIdAndDelete(id)
        if(!deletedProduct){
            res.status(404).json({
                message : "product not found"
            })
        }
        res.status(200).json({
            message: "Product deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
        
    }

    export const updateProduct = async(req,res)=>{
        try {
        const {id} = req.params
        if(!id){
            return res.status(400).json({
            message : "Id Required"
            })
        }
        const updates = req.body
    
        if(!updates){
            return res.status(400).json({
            message : "No updates received"
            })
        }
    
        const updatedProduct = await Product.findByIdAndUpdate(id, updates)
    
        if(!updatedProduct){
            return res.status(404).json({
            message : "Product Not Found"
            })
        }
        res.status(200).json({
            message : "Updated Product Successfully"
        })
    
        } catch (error) {
        res.status(500).json({
            message : "Internal Server Error"
        })
        }
    }

