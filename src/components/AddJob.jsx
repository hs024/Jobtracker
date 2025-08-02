// src/components/AddJob.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../redux/jobSlice";

const AddJob = () => {
  const dispatch = useDispatch();
  const [job, setJob] = useState({ title: "", company: "", location: "" });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!job.title || !job.company || !job.location) {
      alert("All fields are required.");
      return;
    }

    dispatch(addJob(job)); // Dispatch to Redux
    setJob({ title: "", company: "", location: "" }); // Reset form
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border shadow rounded max-w-md mx-auto my-6"
    >
      <h2 className="text-xl font-semibold">Add a Job</h2>
      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={job.title}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={job.company}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={job.location}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Job
      </button>
    </form>
  );
};

export default AddJob;
