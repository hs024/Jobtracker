import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadJobs, saveJobs } from "../utils/localStorage";

const initialState = {
  jobs: loadJobs(),
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob: (state, action) => {
      const newJob = {
        id: nanoid(),
        createdAt: new Date().toISOString(),
        ...action.payload,
      };
      state.jobs.push(newJob);
      saveJobs(state.jobs);
    },
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload.id);
      saveJobs(state.jobs);
    },
    editJob: (state, action) => {
      const index = state.jobs.findIndex((job) => job.id === action.payload.id);
      if (index !== -1) {
        state.jobs[index] = { ...state.jobs[index], ...action.payload };
        saveJobs(state.jobs);
      }
    },
  },
});

export const { addJob, deleteJob, editJob } = jobSlice.actions;
export default jobSlice.reducer;
