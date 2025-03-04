import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/src/store";
import { fetchJobs } from "@/src/store/slices/jobSlice";
import Card from "@/components/common/Card";
import { SAMPLEIMAGES } from "@/constants"; // Import your image paths

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

      <div className="grid-container">
        {jobs.map((job, index) => {
          // Assign image from SAMPLEIMAGES using the index of the job
          const logo = SAMPLEIMAGES[index % SAMPLEIMAGES.length]; 

          return <Card key={job.id} job={job} logo={logo} />;
        })}
      </div>
    </div>
  );
};

export default JobList;
