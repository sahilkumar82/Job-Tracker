import { useState } from "react";

function Appli() {
    const [formData, setFormData] = useState({
        company: "",
        role: "",
        location: "",
        date: "",
        salary: "",
        status: "Applied",
        jobUrl: ""
    });

    const [applications, setApplications] = useState([]);

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newApplication = {
            id: Date.now(),
            ...formData
        };

        setApplications([...applications, newApplication]);

        setFormData({
            company: "",
            role: "",
            location: "",
            date: "",
            salary: "",
            status: "Applied",
            jobUrl: ""
        });
    }

    return (
        <>
            <div className="appli-hero">
                <span>Manage Your Opportunities</span>
                <h1>Applications</h1>
            </div>

            <div className="appli-box">
                <div className="left-appli-box">
                    <form onSubmit={handleSubmit}>
                        <h2>Add Application</h2>

                        <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="role"
                            placeholder="Job Role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={formData.location}
                            onChange={handleChange}
                        />

                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />

                        <input
                            type="number"
                            name="salary"
                            placeholder="Salary"
                            value={formData.salary}
                            onChange={handleChange}
                        />

                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="Applied">Applied</option>
                            <option value="Interview">Interview</option>
                            <option value="Offer">Offer</option>
                            <option value="Rejected">Rejected</option>
                        </select>

                        <input
                            type="url"
                            name="jobUrl"
                            placeholder="Job URL (optional)"
                            value={formData.jobUrl}
                            onChange={handleChange}
                        />

                        <button type="submit">
                            Add Application
                        </button>
                    </form>
                </div>

                <div className="right-appli-box">
                    {applications.length === 0 ? (
                        <p>No applications added yet.</p>
                    ) : (
                        applications.map((app) => (
                            <div className="applications" key={app.id}>
                                <div className="appli-first-body">
                                    <h4>{app.company}</h4>
                                    <p>{app.role}
                                        <span>
                                            {app.salary
                                                ? ` . $${app.salary}`
                                                : ""}
                                        </span>
                                    </p>

                                    <p>
                                        📍{app.location || "Location not specified"}
                                        {" "}
                                        <span>
                                            🗓️ {app.date || "Date not specified"}
                                            {" "}
                                        </span>
                                    </p>

                                    {app.jobUrl && (
                                        <a
                                            href={app.jobUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View Job
                                        </a>
                                    )}
                                </div>

                                <div className="appli-second-body">
                                    <i>{app.status}</i>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default Appli;