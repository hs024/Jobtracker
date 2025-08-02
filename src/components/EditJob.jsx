import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editJob } from "../redux/jobSlice";

function EditJob() {
  const dispatch = useDispatch();
  const jobList = useSelector((state) => state.jobs.jobs);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobList);
  }, [jobList]);

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === id ? { ...job, [name]: value } : job))
    );
  };

  const handleEdit = (job) => {
    dispatch(editJob(job));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Edit Jobs</h2>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between border p-4 rounded"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-1 w-full">
              <input
                type="text"
                name="title"
                value={job.title}
                onChange={(e) => handleInputChange(e, job.id)}
                className="border p-2 rounded w-full md:w-auto"
              />
              <input
                type="text"
                name="company"
                value={job.company}
                onChange={(e) => handleInputChange(e, job.id)}
                className="border p-2 rounded w-full md:w-auto"
              />
              <input
                type="text"
                name="location"
                value={job.location}
                onChange={(e) => handleInputChange(e, job.id)}
                className="border p-2 rounded w-full md:w-auto"
              />
            </div>
            <div className="mt-2 md:mt-0 md:ml-4">
              <button
                onClick={() => handleEdit(job)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>


          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditJob;
