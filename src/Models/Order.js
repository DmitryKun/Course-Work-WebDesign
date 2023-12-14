const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    fullName: String,
    address: String,
    phoneNumber: String,
    cardNumber: String,
    cardDetails: String,
    cvv: String,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
