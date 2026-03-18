import React from "react";

const Experience = () => {
  const jobs = [
    {
      title: ".NET Developer (full-time)",
      company: "LAURYN",
      details: [
        "Learned DevExpress framework",
        "Worked in a team using versioning and requests",
        "Created a new module for the company's app",
      ],
    },
    {
      title: "IT Support (remote)",
      company: "O.S.A. - TRANS",
      details: [
        "OS Management and PC recovery",
        "Migrated 1C to SQLite and created a route management app",
      ],
    },
    {
      title: "Driver, warestore manager ",
      company: "Bagsy pizza",
      details: [
        "Migrated all paperwork to digital format and created a management app for the warehouse",
        "Connection with customers and suppliers, delivery",
      ],
    },
  ];

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "left",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1>Experience</h1>
      {jobs.map((job, i) => (
        <div
          key={i}
          style={{ borderBottom: "1px solid var(--border)", padding: "20px 0" }}
        >
          <h2 style={{ color: "var(--accent)" }}>
            {job.title} | {job.company}
          </h2>
          <ul>
            {job.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
