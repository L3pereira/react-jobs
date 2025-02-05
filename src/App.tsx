import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobloader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import { Job, JobCreate } from "./types/job";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  //Add New Job
  const addJob = async (newJob: JobCreate) => {
    await fetch(`/api/jobs/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    return;
  };

  //Update Job
  const updateJob = async (job: Job) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(job),
    });

    return;
  };

  const deleteJob = async (id: string) => {
    await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });

    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-jobs/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobloader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobloader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
