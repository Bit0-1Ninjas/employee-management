import { useEffect } from "react";
import ShowUser from "./components/ShowUser";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AddUser } from "./components/AddUser";
import { ToastContainer } from "react-toastify";
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/all");
  }, []);
  return (
    <h2 className=" w-full h-screen text-black p-10 bg-gray-900">
      <ToastContainer />
      <Routes>
        <Route path="all" element={<ShowUser />} />
        <Route path="add" element={<AddUser />} />
      </Routes>
    </h2>
  );
}

export default App;
