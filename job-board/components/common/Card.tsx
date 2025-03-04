import React, { FC } from 'react';
import { JobProps } from '@/interfaces';

interface JobCardProps {
  job: JobProps;
  children?: React.ReactNode; 
}

const Card: FC<JobCardProps> = ({ job, children }) => {
  return (
    <div className="job-card">
        <div className="logo">
          <i className="fi fi-rr-corporate-alt"></i>
        </div>
      <div className="company-info">

        <div className="company-informa">
          <div className="company-name">{job.company}</div>
          <div>
              <i className="fi fi-rr-marker"></i>
              <span className="location"> {job.location}</span>
          </div>
        </div>
      </div>
      <div className="job-title">
        <h3 className="job">{job.title}</h3>
        <p className='job-experience'>{job.experience}</p>
      </div>
      <button className="button">Job details</button>
    </div>
  );
};

export default Card;
