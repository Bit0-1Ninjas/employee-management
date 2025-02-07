import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import Db from "./utility/Db.js";
import EmployeRouter from "./routes/Employe.route.js";

import Employe from "./models/employe.model.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use("/v1", EmployeRouter);

app.listen(PORT, async () => {
  await Db.connectToDb();

  console.log(`Server started: http://localhost/${PORT}`);
});
