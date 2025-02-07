import mongoose from "mongoose";

const EmployeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
    default: 5000,
  },
});

const Employe =  mongoose.model("Employe", EmployeSchema);

export default Employe;
