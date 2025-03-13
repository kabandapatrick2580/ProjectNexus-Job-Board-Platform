import React, { FC } from 'react';
import { JobProps } from '@/interfaces';
import { ImageProps } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';

interface JobCardProps {
  job: JobProps;
  children?: React.ReactNode;
  logo: ImageProps;
};


const Card: FC<JobCardProps> = ({ job,logo }) => {
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
        <p className="job-experience">
          {job.experience_level
            ? `${job.experience_level.charAt(0).toUpperCase()}${job.experience_level.slice(1)}-Level`
            : "not specified"}
</p>
      </div>
      <Link className="button" href={`/jobs/${job.id}`}>Job Details
      </Link>
    </div>
  );
};

export default Card;
