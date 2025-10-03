import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";




// Placing orders using COD Method

const placeOrder = async (req, res) => {
    try {

        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData:{}})

        res.json({success: true, message: 'Order Placed Successfully!'})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }



}


// Placing orders using Esewa Method
const placeOrderEsewa = async (req, res) => {
}



//Placing orders using Khalti Method
const placeOrderKhalti = async (req, res) => {

}


// All orders data for Admin Panel
const allOrders = async (req, res) => {

    try {

        const orders = await orderModel.find({})
        res.json({success: true, orders})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }
}



// User orders data for Frontend
const userOrders = async (req, res) => {
    try {

        const {userId} = req.body;
        const orders = await orderModel.find({userId})
        res.json({success: true, orders})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }


}



// Update Order Status from admin panel
const updateStatus = async (req, res) => {
    try {

        const{ orderId, status } = req.body

        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success: true, message: 'Order Status Updated!'})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }


}


export { placeOrder, allOrders, userOrders, updateStatus, placeOrderEsewa, placeOrderKhalti }