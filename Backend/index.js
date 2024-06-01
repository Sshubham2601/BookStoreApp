import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8001;
const URI = process.env.MongoDBURI;
// Connect to MongoDB

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true // Corrected typo here
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(error => {
    console.error("Error connecting to MongoDB:");
});

//defining route
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});




