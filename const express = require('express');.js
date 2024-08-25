const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid'); // For generating unique IDs
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

let customers = []; // Array to store customer details
let purchaseOrders = []; // Array to store purchase order details

// Routes for managing customers
app.get('/api/customers', (req, res) => {
  res.json(customers);
});

app.post('/api/customers', (req, res) => {
  const { name, email, mobile, city } = req.body;
  const customer = { id: uuid.v4(), name, email, mobile, city };
  customers.push(customer);
  res.status(201).json(customer);
});

// Routes for managing purchase orders
app.get('/api/purchase-orders', (req, res) => {
  res.json(purchaseOrders);
});

app.post('/api/purchase-orders', (req, res) => {
  const { productName, quantity, pricing, mrp, customerId } = req.body;
  const purchaseOrder = { id: uuid.v4(), productName, quantity, pricing, mrp, customerId };
  purchaseOrders.push(purchaseOrder);
  res.status(201).json(purchaseOrder);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
