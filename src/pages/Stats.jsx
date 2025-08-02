import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
function Stats() {
  const { id } = useParams();
  const jobs=useSelector((state)=>state.jobs.jobs)
  const job=jobs.find((job)=>job.id===id)
  return (
    <>
    <div>Stats for Job ID: {id}</div>
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Job Statistics</h2>
      {job ? (
        <div className="border p-4 rounded">
          <p><strong>Title:</strong> {job.title}</p>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Status:</strong> {job.status}</p>
          <p><strong>Created at:</strong> {job.createdAt}</p>
        </div>
      ) : (
        <p className="text-red-500">Job not found.</p>
      )}
</div>
          </>
  )

}
export default Stats