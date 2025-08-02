import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddJobPage from "./pages/AddJobPage";
import Stats from "./pages/Stats";
import DeleteJobPage from "./pages/DeleteJobPage";
import Navbar from "./components/Navbar";
import EditJobPage from "./pages/EditJobPage";
export default function App() {
  return (
    <div className="container mx-auto p-4">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddJobPage />} />
        <Route path="/delete" element={<DeleteJobPage />} />
        <Route path="/edit" element={<EditJobPage />} />
        <Route path="/stats/:id" element={<Stats />} />
        <Route
          path="*"
          element={
            <h1 className="text-center mt-10 text-red-500">
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>
    </Router>
    </div>
  );
}
