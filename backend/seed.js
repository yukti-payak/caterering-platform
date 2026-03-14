require('dotenv').config();
const mongoose = require('mongoose');
const Caterer = require('./models/Caterer'); // Check your path to the model

const dummyCaterers = [
  {
    name: "Royal Spice Catering",
    location: "Thane",
    pricePerPlate: 450,
    cuisines: ["North Indian", "Chinese"],
    rating: 4.5
  },
  {
    name: "Oceanic Flavors",
    location: "Mira Road",
    pricePerPlate: 800,
    cuisines: ["Seafood", "Continental"],
    rating: 4.8
  },
  {
    name: "Desi Tadka",
    location: "Bhayandar",
    pricePerPlate: 350,
    cuisines: ["Maharashtrian", "South Indian"],
    rating: 4.2
  },
  {
    name: "The Italian Garden",
    location: "Powai",
    pricePerPlate: 1200,
    cuisines: ["Italian", "Mexican"],
    rating: 4.9
  },
  {
    name: "Quick Bites",
    location: "Borivali",
    pricePerPlate: 250,
    cuisines: ["Fast Food", "Street Food"],
    rating: 3.9
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    
    await Caterer.deleteMany({});
    await Caterer.insertMany(dummyCaterers);
    
    console.log("Database uploaded Successfully!");
    process.exit();
  } catch (error) {
    console.error("Seeding Error:", error);
    process.exit(1);
  }
};

seedDB();