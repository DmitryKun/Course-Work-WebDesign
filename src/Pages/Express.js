const uri = "mongodb+srv://DmitryKun:miru-mir@shopclaster.adul25t.mongodb.net/?retryWrites=true&w=majority";
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Order = require('../Models/Order');

// Подключение к базе данных MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware для обработки JSON-запросов
app.use(express.json());

// Роут для создания заказа
app.post('/api/createOrder', async (req, res) => {
    try {
        const newOrder = new Order({
            fullName: req.body.fullName,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            cardNumber: req.body.cardNumber,
            cardDetails: req.body.cardDetails,
            cvv: req.body.cvv,
        });

        await newOrder.save();
        res.status(201).json({ message: 'Success!!!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Слушаем порт
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
