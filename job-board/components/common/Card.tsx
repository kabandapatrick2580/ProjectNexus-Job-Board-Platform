import React, { FC } from 'react';
import { JobProps } from '@/interfaces';

interface JobCardProps {
  job: JobProps;
  children?: React.ReactNode; 
}

const Card: FC<JobCardProps> = ({ job, children }) => {
  return (
    <div className="job-card job-card-default">
      <div className="top-card">
        <div className="company-image">
          <i className="fi fi-rr-corporate-alt"></i>
        </div>
          <div className="company-details">
          
            <p className="text-gray-700">{job.company}</p>
            <p>
                <i className="fi fi-rr-marker"></i>
                <span> {job.location}</span>
            </p>
        </div>
      </div>
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-gray-500">Experience: {job.experience}</p>
      <div className="mt-2">{children}</div> 
    </div>
  );
};

export default Card;
