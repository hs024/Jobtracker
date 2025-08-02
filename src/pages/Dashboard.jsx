
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const navigate = useNavigate();
  const handleclick = (id) => {
    // Navigate to the stats page for the job with the given id
    console.log(`Navigating to stats page for job ID: ${id}`);
    navigate(`/stats/${id}`);
  };
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center my-4">Job List</h1>
      {jobs.length === 0 ? (
        <p className="text-center">No jobs added yet.</p>
      ) : (
        <ul className="space-y-4">
          {jobs.map((job, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <h3 className="font-bold">{job.title}</h3>
              <p>{job.company}</p>
              <p className="text-sm text-gray-600">{job.location}</p>
              <button onClick={()=>{handleclick(job.id)}} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                View Stats
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
