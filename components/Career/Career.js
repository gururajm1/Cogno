import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import fetchAllJobs from "./fetchJobApi";
import { JobContext } from "@/context/JobContext";
import { useAppContext } from "@/context/Context";
import Image from "next/image";
import NoJobsFound from "../../public/images/career/NoJobsFound.svg"
const Career = () => {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(null);

  const { job, setJob } = useContext(JobContext);
  const { isLightTheme } = useAppContext(); // Get the current theme

  const fetchAllActiveJobs = async () => {
    const response = await fetchAllJobs();
    if (response.jobs) {
      setJobs(response.jobs);
    } else {
      setJobs([]);
    }
  };

  useEffect(() => {
    fetchAllActiveJobs();
  }, []);

  const handleJobClick = (job) => {
    setJob(job);

    router.push(`/jobs/details`);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div
      className={`career container ${
        isLightTheme ? "light-theme" : "dark-theme"
      }`}
    >
      <h2 className="mb-4">Get Onboard With Your</h2>
      <div className="career_page_title">
        <h1>Dream Job</h1>
      </div>
      <h6 className="title-description">
        Looking for passionate individuals who want to thrive for excellence and
      </h6>
      <h6 className="title-description">
        make a lasting impact in their fields
      </h6>
      <hr
        style={{ border: "1px solid rgba(39, 39, 61, 1)", marginTop: "40px" }}
      ></hr>
      <div className="row career_page">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.job_id} className="col-md-5 mb-5">
              <div
                className="card job-card h-100 career_page_card"
                // onClick={() => handleJobClick(job)}
              >
                <div className="card-body">
                  <div
                    className="cardt-d"
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <h6 className="card-title fs-2 career_page_card_cardt-d_cardtitle">
                      {job.job_title}
                    </h6>
                    <div className="career_page_card_cardt-d_card-d">
                      {" "}
                      Posted on: {formatDate(job.job_opening_date)}
                    </div>
                  </div>
                  <p className="card-text fs-4">
                    <i
                      className="contact-icon fa-regular fa-location-dot"
                      style={{ marginRight: "0.9rem" }}
                    ></i>{" "}
                    {job.job_location}, &nbsp;{job.job_workspace_type}
                  </p>
                  <div className="apply-field">
                    <a href="#" onClick={() => handleJobClick(job)}
                    >Apply Now →</a>
                    <h2>Vacanices: {job.job_open_positions}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <><Image src={NoJobsFound} alt="No Jobs Found"
              style={{ width: '60rem', height: '50rem' }} />
              <span className="no-job-text">Currently No Jobs Available!</span></>

        )}
      </div>
    </div>
  );
};

export default Career;
