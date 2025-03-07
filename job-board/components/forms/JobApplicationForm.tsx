import { useState } from "react";
import { useRouter } from "next/router";
import { JobApplication } from "@/interfaces";

const JobApplicationForm = () => {
  const router = useRouter();
  const { id: jobId } = router.query; // Get job ID from URL

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    resume_link: "",
    cover_letter: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const applicationData: JobApplication = {
      id: crypto.randomUUID(),
      applicant: {
        id: crypto.randomUUID(),
        ...formData,
      },
      resume_link: formData.resume_link,
      cover_letter: formData.cover_letter,
      status: "pending",
      applied_at: new Date().toISOString(),
      job: jobId as string,
    };

    try {
      const response = await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(applicationData),
      });

      if (response.ok) {
        setMessage("Application submitted successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          resume_link: "",
          cover_letter: "",
        });
      } else {
        setMessage("Failed to submit application.");
      }
    } catch (error) {
      setMessage("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Apply for this Job</h2>
      {message && <p className="mb-4 text-gray-700">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" className="w-full p-2 border rounded" required />
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" className="w-full p-2 border rounded" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" required />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full p-2 border rounded" required />
        <input type="url" name="resume_link" value={formData.resume_link} onChange={handleChange} placeholder="Resume Link" className="w-full p-2 border rounded" required />
        <textarea name="cover_letter" value={formData.cover_letter} onChange={handleChange} placeholder="Cover Letter" className="w-full p-2 border rounded h-24" required></textarea>

        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
