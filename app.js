const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");


const port = process.env.PORT || 2000
app.listen(port, () => {
    console.log(`Server in running on port ${port}`)
})
