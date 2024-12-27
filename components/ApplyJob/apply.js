import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import fetchAllJobs from "../Career/fetchJobApi"; // Adjust the import path as needed
import PageHead from "@/pages/Head";
import Loading from "@/pages/loading";
import Link from "next/link";
import { useContext } from "react";
import { JobContext } from "@/context/JobContext";
const Apply = () => {
  let {job, setJob} = useContext(JobContext);
  console.log(job);
  if (!job) {
    return <Loading />;
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const stripHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <>
      <PageHead title={job ? job.job_title : <Loading />} />
      <div className="job-detail-container container">
        <div className="job-detail-card">
          <div className="job-detail-left">
            <h2>{job.job_title}</h2>
            <div className="location">
              <div className="contact-info">
                <i className="contact-icon fa-regular fa-location-dot"></i>
                <span className="location-text">{job.job_location}</span>
              </div>
              <div className="contact-info">
                <span className="location-text">{job.job_workspace_type}</span>
              </div>
            </div>
            <h4>Skills</h4>
            {/* <div className="skills">
              {(job.job_primary_skills || [])
                .concat(job.job_secondary_skills || [])
                .map((skill, index) => (
                  <div key={index} className="skill">
                    {skill}
                  </div>
                ))}
            </div> */}
            <div className="skills">
              <div className="primary-skills">
                <h3>Primary Skills: &nbsp;</h3>{job.job_primary_skills?.map((skill, index) => (
                  <div key={index} className="skill">
                    {skill}
                  </div>
                ))}
              </div>
              {job.job_secondary_skills?.length > 0 && (
                <div className="secondary-skills">
                  <h3>Secondary Skills: &nbsp;</h3>
                  {job.job_secondary_skills.map((skill, index) => (
                    <div key={index} className="skill">
                      {skill}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="description">
              <h3>Description</h3>
              <div
                dangerouslySetInnerHTML={{ __html: job.job_description }}
              />
            </div>
          </div>
          <div className="job-detail-right">
            <Link href="/jobs/apply" className="apply-button">
              Apply Now
            </Link>
            <div className="details">
              <div className="detail-item">
                <i className="contact-icon fa-regular fa-location-dot"></i>
                {job.job_location}
              </div>
              <div className="detail-item-1">
                {formatDate(job.job_opening_date)}<span>Deadline</span>
              </div>
              <div className="detail-item-1">
                {job.job_relevant_experience}<span>Work Experience </span>
              </div>
              <div className="detail-item-1">{job.job_employment_type}<span>Job Type</span> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
