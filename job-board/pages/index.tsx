import React from 'react';
import JobList from "@/components/jobs/JobList";
import Navbar from "@/components/common/NavBar";
import Image from "next/image";
import Link from "next/link";
const Home: React.FC = () => {
  return (
    <div>
        <Navbar/>
        <div className="hero-section">
          <div className="image">
            <Image src="/images/hero-image.jpg" height={500} width={500} alt="hero-image" />
          </div>
          <div className="contents">
            <h1>Where <span>Talent</span> Meets <span>Opportunity</span></h1>
            <h2>Turn Your Expertise into Success!</h2>
            <p>At our job portal, we believe that your talent and expertise are the keys to unlocking a world of opportunities. Our platform is dedicated to connecting skilled professionals with top employers, ensuring that your unique abilities are recognized and rewarded.</p>
            <Link href="/jobs/all_jobs" className="animated-button">Kickstart</Link>
          </div>
        </div>
    </div>
);
}

export default Home;
