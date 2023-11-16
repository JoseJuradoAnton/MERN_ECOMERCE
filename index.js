const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")

//ejecutar Dotenv
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connection Successfull !")).catch((err) => { console.log(err) })

app.use("/api/user", userRoute)


app.listen(process.env.PORT || 5000, () => {
    console.log("backend Server is running")
})