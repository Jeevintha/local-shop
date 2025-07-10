import Shop from "../models/shop.model.js"

export const createShop = async(req, res)=>{
  try {
    const { name, address, phone, image } = req.body

    if(!name || !address || !phone || !image){
        res.status(400).json({
            message: "name, address, phone and image are required"
        })
    }

    const shop = await Shop.create({
        name : name,
        phone : phone,
        address : address,
        image : image,
        owner : req.user.id
    })

    res.status(201).json({
        message : "Shop created successfully",
        data : shop
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
        message : "Internal Server Error"
    })
  }
}

export const getAllShop = async(req,res)=>{
      try {
        const shops = await Shop.find()
        res.status(200).json({
          message: "Shop received successfully",
          data: shops
        })
      } catch (error) {
        res.status(500).json({
           message: "Internal Server Error"
        })
      }
}

export const createManyShops = async (req, res) => {
  try {
    const shops = req.body.shops;

    if (!Array.isArray(shops) || shops.length === 0) {
      return res.status(400).json({ message: "Invalid input. Provide an array of shops." });
    }

    const insertedShops = await Shop.insertMany(shops, { ordered: false });
    res.status(201).json({
      message: "Shops created successfully",
      data: insertedShops
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while creating shops",
      error: error.message
    });
  }
};

export const getOneShop = async(req,res)=>{
  try {
    const {id} = req.params
    if(!id){
      return res.status(400).json({
        message : "Id Required"
      })
    }
    const shop = await Shop.findById(id)
    if(!shop){
      return res.status(404).json({
        message : "Shop Not Found"
      })
    }
    res.status(200).json({
      message : "Received Shop Successfully",
      data : shop
    })
  } catch (error) {
    res.status(500).json({
      message : "Internal Server Error"
    })
  }
  
}

export const updateShop = async(req,res)=>{
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

    const updatedShop = await Shop.findByIdAndUpdate(id, updates)

    if(!updatedShop){
      return res.status(404).json({
        message : "Shop Not Found"
      })
    }
    res.status(200).json({
      message : "Updated Shop Successfully"
    })

  } catch (error) {
    res.status(500).json({
      message : "Internal Server Error"
    })
  }
}

export const deleteShop = async(req,res)=>{
  try {

    const {id} = req.params

    if(!id){
      return res.status(400).json({
        message : "Id Required"
      })
    }

    const deletedShop = await Shop.findByIdAndDelete(id)

    if(!deletedShop){
      return res.status(404).json({
        message : "Shop Not Found"
      })
    }
    res.status(200).json({
      message : "Deleted Successfully",

    })

  } catch (error) {
    res.status(500).json({
      message : "Internal Server Error"
    })
  }
  
}

export const ShopsOwned = async(req,res)=>{
  try {
    const shops = await Shop.find({
      owner : req.user.id
    })
    res.status(200).json({
      message: "Shop received successfully",
      data: shops
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
       message: "Internal Server Error"
    })
  }
}

