import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cmw = (req, res, next) => {
    try {
        res.send("yeah you passed it");
        next();
    } catch (error) {
        res.status(500).send(`Internal server${error}`);
    }
}
 
export default cmw