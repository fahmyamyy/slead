import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from './routes/routes.js'

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;
const URL = process.env.URL || 'mongodb://localhost:27017';

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(auth);
app.use('/api', routes);

mongoose.connect(URL).then(() => {
    app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));

}).catch((err) => {
    console.log('Error:', err.message);
});