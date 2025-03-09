import React from 'react';
import JobList from "@/components/jobs/JobList";
import Navbar from "@/components/common/NavBar";

const Home: React.FC = () => {
  return (
    <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
        <Navbar/>
        <JobList />
    </div>
);
}

export default Home;
