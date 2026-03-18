import React from "react";

const Education = () => {
  return (
    <div
      style={{
        padding: "40px",
        textAlign: "left",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1>Education</h1>
      <div
        style={{
          background: "var(--code-bg)",
          padding: "25px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h2>University of Pardubice</h2>
        <p>
          <strong>Bachelor's degree in Information Technology</strong> (2021 -
          2025)
        </p>
        <p style={{ marginTop: "10px" }}>
          <strong>Thesis:</strong> Web component - table using LIT Element and
          Vite.
        </p>
      </div>
      <div
        style={{
          border: "1px solid var(--border)",
          padding: "25px",
          borderRadius: "8px",
        }}
      >
        <h2>Admiral Makarov National Shipbuilding University</h2>
        <p>
          <strong>Master's degree in Project Management</strong> (2024 - 2025)
        </p>
        <p style={{ marginTop: "10px" }}>
          <strong>Thesis:</strong> Optimization of transport logistics
          management processes through the use of software solutions
        </p>
      </div>
      <div
        style={{
          border: "1px solid var(--border)",
          padding: "25px",
          borderRadius: "8px",
        }}
      >
        <h2>Admiral Makarov National Shipbuilding University</h2>
        <p>
          <strong>Bachelor's degree in System Analysis</strong> (2020 - 2024)
        </p>
      </div>
    </div>
  );
};

export default Education;
