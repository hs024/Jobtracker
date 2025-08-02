import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { deleteJob } from "../redux/jobSlice";
function DeleteJob() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);

  const handleDelete = (job) => {
    // Dispatch delete job action
    dispatch(deleteJob(job));
  }
    return (
      <div className="delete-job-container">
        <h2 className="text-xl mb-4">Delete Job</h2>
        <ul>
          {jobs.map((job) => (
            <li
              key={job.id}
              className="flex justify-between items-center border p-4 rounded shadow mb-2"
            >
                <div>
                    <h3 className="font-bold">{job.title}</h3>
                    <p>{job.company}</p>
                    <p className="text-sm text-gray-600">{job.location}</p>
                </div>
              
              <button
                onClick={() => handleDelete(job)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}



export default DeleteJob