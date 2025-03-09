import react from 'react';
interface job {
    id: string;
    title: string;
    company: string;
    location: string;
    experience_level: string;
    wage: number | string;
    description: string;
    picture: string;
    type: string[] | string;
    responsibilities: string[];
    required_skills: string[];
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
        <div className="job-contents">
            <div className="job-header">
                <img src={job.picture} alt={job.title} className="" />
            <div className="job-title">
                <div className="job-head">
                    <h1 className="">{job.title}</h1> <span className="co-name">at {job.company} - {job.location}</span>

                </div>
                <div className="short-description">
                    <i className="fi fi-rr-time-quarter-past"></i>          
                    <div className="job-type">
                        {Array.isArray(job.type) ? job.type.join(', ') : job.type}
                    </div>
                </div>
            </div>
            </div>
            <p className="text-gray-600 mt-2">
                <strong>Experience Level:</strong> {capitalizeFirstLetter(job.experience_level)}-Level
            </p>
            <p className="text-gray-600">
                <strong>Salary:</strong> {typeof job.wage === "number" ? `$${job.wage.toLocaleString()}` : job.wage}
            </p>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Job Description</h2>
                <p className="text-gray-700 mt-2">{job.description}</p>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Responsibilities</h2>
                <ul className="list-disc list-inside">
                    {job.responsibilities.map((responsibility, index) => (
                        <li key={index} className="text-gray-700 mt-1">{responsibility}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Required Skills</h2>
                <ul className="list-disc list-inside">
                    {job.required_skills.map((skill, index) => (
                        <li key={index} className="text-gray-700 mt-1">{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
            

    );
}

export default JobDetails;