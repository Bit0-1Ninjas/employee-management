import Employe from "../models/employe.model.js";

async function CheckEmployee(id) {
  const isEmployee = await Employe.findOne({ _id: id });
  return isEmployee;
}

export const getEmployee = async (req, res) => {
  const employees = await Employe.find();
  if (!employees) {
    return res.status(200).json({ message: "No Employees found!" });
  } else {
    return res.status(200).json({ employees });
  }
};

export const AddEmployee = async (req, res) => {
  const { name, email, age, salary } = req.body;
  const isEmployee = await Employe.findOne({ email });
  if (isEmployee) {
    return res
      .status(300)
      .json({ message: "Employe with email already exists" });
  }
  if (!name || !email || !age || !salary) {
    return res.status(300).json({ message: "All fields required" });
  }
  if (!email.includes("@gmail")) {
    return res.status(300).json({ message: "Not a valid email" });
  }
  const newEmploye = new Employe({
    name,
    email,
    age,
    salary,
  });
  await newEmploye.save().then(() => {
    console.log(`Entry saved`);
  });
  return res.status(200).json({ message: "Employee entry saved" });
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;

  const isEmployee = CheckEmployee(id);
  if (!isEmployee) {
    return res.status(404).json({ message: "Employe not found" });
  }
  const { name, email, age, salary } = req.body;
  const updatedEmploye = await Employe.findOneAndUpdate(
    { _id: id },
    { name, email, age, salary },
    { new: true }
  );

  return res.status(200).json({ message: updatedEmploye });
};

export const deleteEmploye = async (req, res) => {
  const { id } = req.params;

  const isEmployee = CheckEmployee(id);
  if (!isEmployee) {
    return res.status(404).json({ message: "Employee not found" });
  }
  await Employe.findOneAndDelete({ _id: id });
  return res.status(200).json({ message: "Employee deleted..." });
};
