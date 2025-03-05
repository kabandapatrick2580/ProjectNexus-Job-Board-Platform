import react from 'react';
interface job {
    id: string;
    title: string;
    company: string;
    location: string;
    experience_level: string;
    salary: number | string;
    description: string;
}

interface JobDetailsProps {
    job: job;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
    if(!job)
        return <p>No job details available</p>;
    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
            <p className="text-gray-700 mt-1">
                <span className="font-semibold">{job.company}</span> - {job.location}
            </p>
            <p className="text-gray-600 mt-2">
                <strong>Experience Level:</strong> {capitalizeFirstLetter(job.experience_level)}-Level
            </p>
            <p className="text-gray-600">
                <strong>Salary:</strong> {typeof job.salary === "number" ? `$${job.salary.toLocaleString()}` : job.salary}
            </p>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Job Description</h2>
                <p className="text-gray-700 mt-2">{job.description}</p>
            </div>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Apply Now
            </button>
        </div>
    );
}

export default JobDetails;