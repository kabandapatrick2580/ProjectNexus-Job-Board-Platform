import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/src/store";
import { fetchJobs } from "@/src/store/slices/jobSlice";
import Card from "@/components/common/Card";
import { SAMPLEIMAGES } from "@/constants";

const JobList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { jobs, status, error } = useSelector((state: RootState) => state.jobs);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10); // You can adjust the number of jobs per page

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // Calculate the index of the last and first job in the current page
  const lastJobIndex = currentPage * jobsPerPage;
  const firstJobIndex = lastJobIndex - jobsPerPage;

  // Slice the jobs array to display only the jobs for the current page
  const currentJobs = jobs.slice(firstJobIndex, lastJobIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  return (
    <div className="job-list">
      <h1>Job Listings</h1>

      {status === "loading" && <p>Loading jobs...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      {/* Job Cards */}
      <div className="grid-container">
        {currentJobs.map((job, index) => {
          const logo = SAMPLEIMAGES[index % SAMPLEIMAGES.length]; // Loop through images if more jobs than images
          return <Card key={job.id} job={job} logo={logo} />;
        })}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {/* Previous Page Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <i className="fi fi-rr-arrow-left"></i> 
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={currentPage === pageNumber + 1 ? "active" : ""}
          >
            {pageNumber + 1}
          </button>
        ))}

        {/* Next Page Button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <i className="fi fi-rr-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default JobList;
