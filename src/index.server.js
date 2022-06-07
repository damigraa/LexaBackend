const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");

const path = require("path");
const cors = require("cors");

//routes
const authRoutes = require("./routes/auth")
const adminRoutes = require("./routes/admin/auth")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const cartRoutes = require("./routes/cart")
const initialDataRoutes = require("./routes/admin/initialData")
const pageRoutes = require("./routes/admin/page")
const addressRoutes = require("./routes/address")
const orderRoutes = require("./routes/order")
const adminOrderRoute = require("./routes/admin/order.routes")
const galleryRoute = require("./routes/gallery")
const applicationRoute = require("./routes/application")
const mainImageRoutes = require("./routes/components/mainImage")
const manufactureRoutes = require("./routes/components/manufacture")
const comeToUsRoutes = require("./routes/components/comeToUs")
const promotionsRoutes = require("./routes/components/promotions")
const weWorkOnlineRoutes = require("./routes/components/weWorkOnline")
const contactRoutes = require("./routes/components/contact")
const blogRoutes = require("./routes/components/blog")

const paymentListInstructionRoutes = require("./routes/components/paymentListInstruction")
const costDeliveryRoutes = require("./routes/components/costDelivery")




env.config();
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@lexclaster.zko55.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log('Database connected')
})


const port = process.env.PORT || 2000
app.use(cors())
app.use(express.json())
app.use("/public", express.static(path.join(__dirname, "uploads")))
app.use("/api", authRoutes)
app.use("/api", adminRoutes)
app.use("/api", categoryRoutes)
app.use("/api", productRoutes)
app.use("/api", cartRoutes)
app.use("/api", initialDataRoutes)
app.use("/api", pageRoutes)
app.use("/api", addressRoutes)
app.use("/api", orderRoutes)
app.use("/api", adminOrderRoute)
app.use("/api", galleryRoute)
app.use("/api", applicationRoute)
app.use("/api", mainImageRoutes)
app.use("/api", manufactureRoutes)
app.use("/api", comeToUsRoutes)
app.use("/api", promotionsRoutes)
app.use("/api", weWorkOnlineRoutes)
app.use("/api", contactRoutes)
app.use("/api", paymentListInstructionRoutes)
app.use("/api", blogRoutes)

app.use("/api", costDeliveryRoutes)



app.listen(port, () => {
  console.log(`Server in running on port ${port}`)
})
