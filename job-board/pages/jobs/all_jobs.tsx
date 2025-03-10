import JobList from "@/components/jobs/JobList";
import Navbar from "@/components/common/NavBar";

const JobsPage = () => {
    return (
        <div style={{ margin: '0 auto' }}>
            <Navbar/>
            <JobList />
        </div>
    );
    }
export default JobsPage;