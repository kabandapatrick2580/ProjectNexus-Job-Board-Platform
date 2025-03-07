import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import JobDetails from "@/components/jobs/JobDetails";

export default function JobDetailPage() {
    const router = useRouter();
    const { id } = router.query;

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch job details when the component mounts or id changes
    useEffect(() => {
        const fetchJob = async () => {
            if (!id) return;
            try {
                const response = await axios.get(`https://job-board-platform.onrender.com/api/job/${id}`);
                setJob(response.data);
            } catch (error) {
                console.error("Error fetching job details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchJob();
    }, [id]);

    if (loading) {
        console.log(`The link being loaded is ${router.asPath}`);
        return <p>Loading...</p>;
    }

    if (!job) {
        return <p>No job details available</p>;
    }

    return (
        <div className="container mx-auto p-6">
            <JobDetails job={job} />

            {/* Apply Now Button */}
            <div className="mt-6">
                <button
                    onClick={() => router.push(`/jobs/${id}/apply`)}>
                    Apply Now
                </button>
            </div>
        </div>
    );
}
