const express = require("express");
const app = express();
const dotenv = require("dotenv")
const PORT = process.env.PORT || 5000;
const contactRoutes = require("./routes/contactRoutes.js")
const errorHandler = require("./middlewares/errorHandler.js");

dotenv.config();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use("/api/contacts", contactRoutes)
app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
})