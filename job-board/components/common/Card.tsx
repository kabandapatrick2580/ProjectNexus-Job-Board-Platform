import React, { FC } from 'react';
import { JobProps } from '@/interfaces';
import { ImageProps } from '@/interfaces';
import Image from 'next/image';
import { SAMPLEIMAGES } from '@/constants';

interface JobCardProps {
  job: JobProps;
  children?: React.ReactNode;
  logo: ImageProps;
};


const Card: FC<JobCardProps> = ({ job,logo, children }) => {
  return (
    <div className="job-card">
        <div className="logo">
        {logo?.image ? (
          <Image src={logo.image} alt={`${job.company} logo`} width={50} height={50} className="company-logo" />
        ) : (
          <i className="fi fi-rr-corporate-alt"></i> // Default icon if no logo
        )}
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
