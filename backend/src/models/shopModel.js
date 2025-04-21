import mongoose from 'mongoose'
const {Schema} = mongoose

const shopSchema = new Schema({
    shopName : {
        type : String,
        required : true,
    },
    shopLocation : {
        type : String,
        required : true,
    },
    shopPhone : {
        type : String,
    },
})

const Shop = mongoose.model("Shop", shopSchema)

export default Shop