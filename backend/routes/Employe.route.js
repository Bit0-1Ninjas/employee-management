import express from "express";
import {
  AddEmployee,
  deleteEmploye,
  getEmployee,
  updateEmployee,
} from "../controllers/employe.controller.js";
const EmployeRouter = express.Router();

EmployeRouter.get("/getall", getEmployee);
EmployeRouter.post("/add", AddEmployee);
EmployeRouter.put("/update/:id", updateEmployee);
EmployeRouter.delete("/delete/:id", deleteEmploye);
export default EmployeRouter;
