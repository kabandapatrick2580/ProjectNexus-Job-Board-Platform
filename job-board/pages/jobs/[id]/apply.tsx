import JobApplicationForm from "@/components/forms/JobApplicationForm";

const JobDetailsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Job Details</h1>
      {/* Job details content here */}
      <JobApplicationForm/>
    </div>
  );
};

export default JobDetailsPage;
