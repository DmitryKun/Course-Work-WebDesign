const mongoose = require('mongoose');
const Order = require('./Models/Order');
const { Schema } = mongoose;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://DmitryKun:miru-mir@shopclaster.adul25t.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("StuffShop").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000
});

async function createOrder() {
    try {
        const newOrder = new Order({
            _id: new mongoose.Types.ObjectId(),
            productId: '4',
            fullName: 'John Doe',
            address: '123 Main Street',
            phoneNumber: '555-1234',
            cardNumber: '1234 5678 9012 3456',
            cardDetails: '12/25',
            cvv: '123',
        });

        await newOrder.save();
        console.log('Заказ успешно создан:', newOrder);
    } catch (error) {
        console.error('Ошибка при создании заказа:', error.message);
    } finally {
        mongoose.disconnect();
    }
}

createOrder();