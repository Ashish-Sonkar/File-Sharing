const express = require("express");
const app = express();
const router = require("./routes/routes.js")
const cors = require("cors")
const dbConnection = require("./database/db.js")
require('dotenv').config()

app.use(cors())
app.use("/", router)

dbConnection()
    .then(() => {
        console.log("Connected Database")
        app.listen(process.env.PORT, () => {
            console.log("Server is running at port no 4000")
        })
    })
    .catch((err)=>console.log("Error:"+err.message))
