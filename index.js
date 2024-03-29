const express = require("express")
const mongoose = require('mongoose');
const ProductRouter = require("./routes/product.route.js")

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use("/api/products" , ProductRouter)


app.get("/", (req , res) => {
    res.send("Hello from NODE API")
})


mongoose.connect('link is hidden')
    .then(() => {
        console.log('Connected to Database')
        app.listen(3000, () => {
            console.log(`Server running on PORT 3000`);
        })
    })
    .catch(() => console.log("Connection Failed"))

