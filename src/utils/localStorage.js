const STORAGE_KEY = "job-tracker-jobs";

export const saveJobs = (jobs) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
};

export const loadJobs = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};
