import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/src/store";
import { fetchJobs } from "@/src/store/slices/jobSlice";
import Card from "@/components/common/Card";

const JobList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { jobs, status, error } = useSelector((state: RootState) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="job-list">
      <h1>Job Listings</h1>

      {status === "loading" && <p>Loading jobs...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      {/* ✅ Apply grid container */}
      <div className="grid-container">
        {jobs.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
