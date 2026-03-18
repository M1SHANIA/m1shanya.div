import React from "react";
import { Github, ExternalLink, Layers, Code, User } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Web Component - Table",
      role: "Bachelor's Thesis",
      tech: "JS, LIT Element, Vite",
      desc: "Lightweight, framework-agnostic table web component with sorting, filtering, selection, inline editing, lazy loading, export, and mobile-friendly card layout.",
      type: "Web Tool",
      github: "https://github.com/M1SHANIA/my-table",
      link: "https://my-table-khaki.vercel.app/",
    },
    {
      title: "FS Gear Calculator",
      role: "Solo Project",
      tech: "JavaScript, HTML/CSS, Vite",
      desc: "Lightweight web app for calculating gear ratios. Includes spur chain gear calculator and planetary gear calculator with configurable roles and teeth counts.",
      type: "Tool",
      github: "https://github.com/M1SHANIA/FS_Gear-calculator",
      link: "https://fs-gear-calculator.vercel.app/",
    },
    {
      title: "Iridology Web Application",
      role: "University Project",
      tech: "JavaScript, CSS, HTML",
      desc: "Web application that automatically detects and segments iris regions for iridology usage with fullscreen results and downloadable analysis.",
      type: "Academic",
      github: "https://github.com/M1SHANIA/VUT-FIT-BIO-2025-Iridology",
      link: "https://vut-fit-bio-2025-iridology.vercel.app/",
    },
    {
      title: "Shop Information System",
      role: "Team Leader",
      tech: "ASP.NET, Oracle SQL",
      desc: "Full-scale application with MVC architecture for handling shop storage, goods, and cash desks. Features role-based access control, dependency injection, and secure authorization system.",
      type: "Team Project",
      github: "https://github.com/M1SHANIA/BDAS2-BCSH2-University-Project",
    },
    {
      title: "English Teacher App",
      role: "Solo Project",
      tech: "WPF, MVVM, C#",
      desc: "Comprehensive desktop tool for tracking students, their progress, tasks, and a material bank with intuitive UI and efficient data management.",
      type: "Desktop App",
    },
    {
      title: "Casino Spinner",
      role: "Solo Project",
      tech: "HTML/CSS, JavaScript",
      desc: "Creative interactive project featuring custom probability logic where the initial hits are intentionally non-random with dynamic animations.",
      type: "Frontend",
      github: "https://github.com/M1SHANIA/casino-spinner",
      link: "https://m1shania.github.io/casino-spinner/",
    },
  ];

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1126px",
        margin: "0 auto",
        textAlign: "left",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "16px",
          color: "var(--text-h)",
        }}
      >
        Featured Projects
      </h2>
      <p
        style={{
          marginBottom: "32px",
          maxWidth: "800px",
          color: "var(--text)",
          lineHeight: "1.6",
        }}
      >
        A collection of systems I've built, ranging from enterprise-level team
        projects to specialized solo tools.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "32px",
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              border: "1px solid var(--border)",
              padding: "24px",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "var(--accent-bg)",
                  borderRadius: "8px",
                  color: "var(--accent)",
                }}
              >
                <Layers size={24} />
              </div>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  padding: "4px 8px",
                  backgroundColor: "var(--code-bg)",
                  color: "var(--text)",
                  borderRadius: "4px",
                  textTransform: "uppercase",
                }}
              >
                {p.type}
              </span>
            </div>

            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "var(--text-h)",
                marginBottom: "8px",
              }}
            >
              {p.title}
            </h3>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                color: "var(--accent)",
                marginBottom: "16px",
                fontFamily: "var(--mono)",
              }}
            >
              <User size={14} /> {p.role}
            </div>

            <p
              style={{
                color: "var(--text)",
                fontSize: "14px",
                lineHeight: "1.6",
                marginBottom: "16px",
                flex: 1,
              }}
            >
              {p.desc}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "auto",
                paddingTop: "16px",
                borderTop: "1px solid var(--border)",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "var(--text)",
                }}
              >
                <Code size={14} /> {p.tech}
              </span>
              <div
                style={{ display: "flex", gap: "16px", color: "var(--text)" }}
              >
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "inherit",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text-h)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                  onClick={() => p.github && window.open(p.github, "_blank")}
                >
                  <Github size={18} />
                </button>
                {p.link && (
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "inherit",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--text-h)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text)")
                    }
                    onClick={() => window.open(p.link, "_blank")}
                  >
                    <ExternalLink size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
