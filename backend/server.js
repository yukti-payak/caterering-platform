require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config'); 
const catererRoutes = require('./routes/catererRoutes');

const app = express();


connectDB();

app.use(cors());
app.use(express.json());


app.use('/api/caterers', catererRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));