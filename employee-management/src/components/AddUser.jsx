import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState(0);
  const [age, setAge] = useState(0);

  const navigate = useNavigate();

  function cleanUp() {
    setAge(0);
    setSalary(0);
    setEmail("");
    setName("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || age <= 0 || salary <= 0) {
      toast.error("All fields are required and must be greater than 0");
      return;
    }
    
    try {
      const res = await fetch("http://localhost:8080/v1/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, age, salary }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to add user");
      }

      toast.success(data.message || "User added successfully");
      cleanUp();
    } catch (error) {
      console.error("Error: ", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-9/12 mx-auto">
      <button
        className="btn btn-success my-5 w-32 text-gray-100 font-bold text-xl hover:text-gray-300"
        onClick={(e) => {
          e.preventDefault();
          navigate("/all");
        }}
      >
        Home
      </button>
      <div className="w-2/4 mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 items-center justify-center bg-gray-300 p-5 rounded-md"
        >
          <input
            type="text"
            placeholder="Name"
            className="input text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="input text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            className="input text-white"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Salary"
            className="input text-white"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
          />
          <button type="submit" className="btn btn-success w-52">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
