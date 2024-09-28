import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser" ;

import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app=express();
const PORT =process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// fetching the route
app.use("/api/auth", authRoutes);   
app.use("/api/products", productRoutes);  
app.use("/api/cart", cartRoutes);  
app.use("/api/coupons", couponRoutes);  
app.use("/api/payments", paymentRoutes);


// intialize the local host
app.listen(PORT, ()=>{
    console.log("Server is running on port http://localhost:" + PORT);

    connectDB();
});
