# JobTracker

JobTracker is a simple React application for tracking job applications. It allows you to add, edit, delete, and view statistics for your job applications.

## Features

- Add new job applications
- Edit existing job details
- Delete jobs from the list
- View statistics for each job
- Responsive and clean UI built with Tailwind CSS
- State management using Redux Toolkit
- Routing with React Router

## Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/hs024/Jobtracker.git
   cd Jobtracker/jobTracker
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Project Structure

```
jobTracker/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── DeleteJob.jsx
│   │   └── EditJob.jsx
|   |   └── AddJob.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── AddJobPage.jsx
│   │   ├── DeleteJobPage.jsx
│   │   ├── EditJobPage.jsx
│   │   └── Stats.jsx
│   ├── redux/
│   │   └── jobSlice.js
|   |   └── store.js
│   ├── utils
│   │   └── localStorage.js
│   ├── App.jsx
│   └── index.css
│   └── main.jsx
├── package.json
├── .gitignore
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── README.md
```

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Repository

[https://github.com/hs024/Jobtracker](https://github.com/hs024/Jobtracker)

