import Shop from "../models/shop.model.js"

export const createShop = async(req, res)=>{
  try {
    const { name, address, phone } = req.body

    if(!name || !address || !phone){
        res.status(400).json({
            message: "name, address and phone are required"
        })
    }

    const shop = await Shop.create({
        name : name,
        phone : phone,
        address : address
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