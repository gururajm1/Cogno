import React from "react";

const Industries = () => {
  return (
    <section className="industries">
      <div className="industries-header">
        <h2>Industries</h2>
        <div className="header-title">
          <h3>
            Cogno HRMS: Revolutionizing HR Management
            <span className="across-all">
              Across <span>All Industries</span>{" "}
            </span>
          </h3>
        </div>
      </div>
      <div className="industry-list">
        <div className="industry">
          <div className="industry-content">
            <h4>Information Technology (IT)</h4>
            <p>
              In the fast-paced IT industry, Cogno HRMS streamlines HR
              processes to manage talent and maintain efficiency, addressing
              high turnover, skill gaps, and remote workforce challenges. Its
              AI-driven recruitment, continuous performance feedback, and remote
              work management tools reduce hiring time by 30% and improve
              employee retention by 20%, helping IT companies operate more
              effectively.
            </p>
          </div>
          <div className="industry-image">
            <img src="/images/industries/it.png" alt="Information Technology" />
          </div>
        </div>
        <div className="industry">
          <div className="industry-content">
            <h4>Finance</h4>
            <p>
               Financial institutions need precise, secure HR processes. cogno
              AI HRMS ensures compliance, boosts employee engagement, and
              optimizes HR operations in finance. Key features include automated
              regulatory compliance checks, engagement tools, and accurate
              payroll management, helping maintain industry compliance and
              increasing employee engagement by 25%.
            </p>
          </div>
          <div className="industry-image">
            <img src="/images/industries/finance.png" alt="Finance" />
          </div>
        </div>
        <div className="industry">
          <div className="industry-content">
            <h4>Manufacturing</h4>
            <p>
              Manufacturing companies require efficient HR management for large
              workforces and shift schedules. Cogno HRMS offers solutions
              for managing labor costs, compliance, and productivity. Key
              features include tools for labor cost tracking, automated shift
              scheduling, and productivity analytics, helping reduce labor costs
              by 10% and ensure compliance with labor laws.
            </p>
          </div>
          <div className="industry-image">
            <img
              src="/images/industries/manufacturing.png"
              alt="Manufacturing"
            />
          </div>
        </div>
        <div className="industry">
          <div className="industry-content">
            <h4>Retail</h4>
            <p>
              Retail businesses face unique HR challenges such as high turnover
              and varied schedules. Cogno HRMS helps manage HR tasks
              efficiently, enhancing employee satisfaction and retention. Key
              features include turnover management tools, flexible scheduling
              solutions, and seasonal hiring management, decreasing turnover
              rates by 20% and improving scheduling efficiency by 30%.
            </p>
          </div>
          <div className="industry-image">
            <img src="/images/industries/retail.png" alt="Retail" />
          </div>
        </div>
        <div className="industry">
          <div className="industry-content">
            <h4>Education</h4>
            <p>
              ducational institutions need effective HR management for faculty,
              staff, and regulatory compliance. Cogno HRMS offers solutions
              tailored to education, addressing faculty management, compliance,
              and professional development. Features include tools for managing
              faculty records, ensuring compliance, and promoting continuous
              learning, resulting in 100% compliance and enhanced faculty
              development.
            </p>
          </div>
          <div className="industry-image">
            <img src="/images/industries/education.png" alt="Education" />
          </div>
        </div>
        <div className="industry">
          <div className="industry-content">
            <h4>Hospitality</h4>
            <p>
              The hospitality industry needs efficient HR management to handle a
              dynamic workforce and maintain high service standards. Cogno
              HRMS addresses high staff turnover, compliance, and training with
              turnover management strategies, compliance tools, and continuous
              training programs, resulting in a 15% reduction in turnover and
              ensured regulatory compliance.
            </p>
          </div>
          <div className="industry-image">
            <img src="/images/industries/hospitality.png" alt="Hospitality" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
