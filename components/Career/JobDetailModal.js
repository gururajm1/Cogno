// import React from "react";

// const JobDetailModal = ({ job, onClose }) => {
//   if (!job) return null;
//   if (!job || typeof job.job_description !== "string") {
//     return <p>No job description available.</p>;
//   }
//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "short", day: "numeric" };
//     const date = new Date(dateString);
//     return date.toLocaleDateString(undefined, options);
//   };
//   const stripHTML = (html) => {
//     const doc = new DOMParser().parseFromString(html, "text/html");
//     return doc.body.textContent || "";
//   };
//   return (
//     <div className="job-detail-card">
//       <div className="job-detail-left">
//         <h2>{job.job_title}</h2>
//         <div className="location">
//           <div className="contact-info btn-default">
//             <i className="contact-icon fa-regular fa-location-dot"></i>
//             <span className="location-text">{job.job_location}</span>
//           </div>
//           <div className="contact-info btn-default">
//             <span className="location-text">{job.job_workspace_type}</span>
//           </div>
//         </div>
//         <h4>Skills</h4>
//         <div className="skills">
//           {(job.job_primary_skills || [])
//             .concat(job.job_secondary_skills || [])
//             .map((skill, index) => (
//               <div key={index} className="btn-default skill">
//                 {skill}
//               </div>
//             ))}
//         </div>
//         <div className="description">
//           <h3>Description</h3>
//           <div>{stripHTML(job.job_description)}</div>
//         </div>
//       </div>
//       <div className="job-detail-right">
//         <a href="#" className="btn-default apply-button">
//           Apply Now →
//         </a>
//         <div className="details">
//           <div className="detail-item">
//             <i className="contact-icon fa-regular fa-location-dot"></i>
//             {job.job_location}
//           </div>
//           <div className="detail-item-1">
//             {/* <i className="fa fa-calendar"></i> */}
//             {formatDate(job.job_opening_date)} Deadline
//           </div>
//           <div className="detail-item-1">
//             {/* <i className="fa fa-briefcase"></i> */}
//             {job.job_relevant_experience} Work Experience
//           </div>
//           <div className="detail-item-1">
//             {/* <i className="fa fa-clock"></i> */}
//             {job.job_employment_type}
//           </div>
//           <div className="jsummary">
//             Rainbow-Themes has become such an integral part of our work...
//           </div>
//         </div>
//         <button className="close-button btn-default" onClick={onClose}>
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobDetailModal;
