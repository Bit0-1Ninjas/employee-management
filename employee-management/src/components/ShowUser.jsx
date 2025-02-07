import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowUser = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8080/v1/getall", {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch employees");
        }

        const data = await res.json();
        setEmployees(data.employees || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto my-5 p-5 bg-gray-700 rounded-lg shadow-lg text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-orange-400">Employees List</h1>
        <button
          className="btn btn-primary px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
          onClick={() => navigate("/add")}
        >
          Add Employee
        </button>
      </div>

      {employees.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-500 text-lg">
            <thead>
              <tr className="bg-gray-800 text-orange-400">
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">Email</th>
                <th className="border border-gray-400 px-4 py-2">Age</th>
                <th className="border border-gray-400 px-4 py-2">Salary</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index} className="text-center bg-gray-600 hover:bg-gray-500">
                  <td className="border border-gray-400 px-4 py-2">{employee.name}</td>
                  <td className="border border-gray-400 px-4 py-2">{employee.email}</td>
                  <td className="border border-gray-400 px-4 py-2">{employee.age}</td>
                  <td className="border border-gray-400 px-4 py-2">${employee.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-orange-400 font-bold mt-4">No employees found</p>
      )}
    </div>
  );
};

export default ShowUser;
