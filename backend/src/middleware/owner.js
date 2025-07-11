import Shop from "../models/shop.model.js"
import Product from "../models/product.model.js"

const ownerCheck = async(req,res,next) => {
    const { shopId, productId } = req.body;
    const userId = req.user._id;

    try {
        let item;
        if (shopId) {
            item = await Shop.findById(shopId);
            if (!item) {
                return res.status(404).json({ message: "Shop not found" });
            }
        } else if (productId) {
            item = await Product.findById(productId);
            if (!item) {
                return res.status(404).json({ message: "Product not found" });
            }
        } else {
            return res.status(400).json({ message: "No shopId or productId provided" });
        }

        if (item.owner.toString() !== userId.toString() && req.user.role !== "admin") {
            return res.status(403).json({ message: "You do not own this item" });
        }

        next();
    } catch (err) {
        console.error("Error checking ownership:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default ownerCheck;