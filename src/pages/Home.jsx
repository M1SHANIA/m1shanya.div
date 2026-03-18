import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        padding: "50px 40px 30px 40px",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "left",
      }}
    >
      <section style={{ marginBottom: "40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: "40px",
            alignItems: "start",
          }}
        >
          <div>
            <h1
              style={{
                marginBottom: "0",
                fontSize: "46px",
                fontWeight: "700",
                display: "block",
                lineHeight: "1.2",
                background:
                  "linear-gradient(135deg, var(--text-h) 0%, var(--accent) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-1px",
              }}
            >
              MYKHAILO ONIPCHENKO
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "var(--accent)",
                fontWeight: "700",
                marginBottom: "20px",
                marginTop: "16px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Developer
            </p>
            <p
              style={{
                marginTop: "0",
                lineHeight: "1.8",
                fontSize: "16px",
                maxWidth: "600px",
                color: "var(--text)",
              }}
            >
              A young and energetic developer combining a solid academic
              background and real-world commercial development experience.
              Currently actively learning Python, Linux (Kali), and Pentesting.
            </p>
            <Link
              to="/projects"
              className="counter"
              style={{
                textDecoration: "none",
                marginTop: "20px",
                display: "inline-block",
                color: "var(--bg)",
                backgroundColor: "var(--accent)",
                fontWeight: "600",
                fontSize: "14px",
                padding: "12px 24px",
                borderRadius: "6px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(170, 59, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              View My Projects →
            </Link>
          </div>
          <div>
            <h2
              style={{
                fontSize: "12px",
                fontWeight: "600",
                marginBottom: "12px",
                color: "var(--text-h)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Contacts
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              <div
                style={{
                  padding: "12px",
                  borderRadius: "6px",
                  backgroundColor: "var(--accent-bg)",
                  border: "1px solid var(--accent-border)",
                }}
              >
                <h3
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    marginBottom: "6px",
                    color: "var(--text-h)",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Phone
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    margin: 0,
                    color: "var(--text)",
                    fontWeight: "500",
                  }}
                >
                  +420 723 272 280
                </p>
              </div>
              <div
                style={{
                  padding: "12px",
                  borderRadius: "6px",
                  backgroundColor: "var(--accent-bg)",
                  border: "1px solid var(--accent-border)",
                }}
              >
                <h3
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    marginBottom: "6px",
                    color: "var(--text-h)",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Messenger
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    margin: 0,
                    color: "var(--text)",
                    fontWeight: "500",
                  }}
                >
                  +380 99 058 3553
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    margin: "4px 0 0 0",
                    color: "var(--text)",
                    opacity: "0.7",
                  }}
                >
                  Telegram, WhatsApp
                </p>
              </div>
              <div
                style={{
                  padding: "12px",
                  borderRadius: "6px",
                  backgroundColor: "var(--accent-bg)",
                  border: "1px solid var(--accent-border)",
                }}
              >
                <h3
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    marginBottom: "6px",
                    color: "var(--text-h)",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Email
                </h3>
                <a
                  href="mailto:mihaonipchenko@gmail.com"
                  style={{
                    fontSize: "14px",
                    color: "var(--accent)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                    fontWeight: "500",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text-h)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                >
                  mihaonipchenko@gmail.com
                </a>
              </div>
              <div
                style={{
                  padding: "12px",
                  borderRadius: "6px",
                  backgroundColor: "var(--accent-bg)",
                  border: "1px solid var(--accent-border)",
                }}
              >
                <h3
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    marginBottom: "8px",
                    color: "var(--text-h)",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Social
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                  }}
                >
                  <a
                    href="https://github.com/M1SHANIA"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "14px",
                      color: "var(--accent)",
                      textDecoration: "none",
                      transition: "color 0.3s",
                      fontWeight: "500",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--text-h)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mykhailo-onipchenko/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "14px",
                      color: "var(--accent)",
                      textDecoration: "none",
                      transition: "color 0.3s",
                      fontWeight: "500",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--text-h)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "60px",
          marginTop: "20px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "12px",
              color: "var(--text-h)",
            }}
          >
            Languages
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "8px", fontSize: "13px" }}>
              <strong style={{ color: "var(--text-h)", fontWeight: "600" }}>
                Czech:
              </strong>{" "}
              <span style={{ color: "var(--text)" }}>C1</span>
            </li>
            <li style={{ marginBottom: "8px", fontSize: "13px" }}>
              <strong style={{ color: "var(--text-h)", fontWeight: "600" }}>
                English:
              </strong>{" "}
              <span style={{ color: "var(--text)" }}>B2+</span>
            </li>
            <li style={{ marginBottom: "8px", fontSize: "13px" }}>
              <strong style={{ color: "var(--text-h)", fontWeight: "600" }}>
                Ukrainian:
              </strong>{" "}
              <span style={{ color: "var(--text)" }}>Native</span>
            </li>
            <li style={{ marginBottom: "8px", fontSize: "13px" }}>
              <strong style={{ color: "var(--text-h)", fontWeight: "600" }}>
                Russian:
              </strong>{" "}
              <span style={{ color: "var(--text)" }}>Native</span>
            </li>
            <li style={{ marginBottom: "8px", fontSize: "13px" }}>
              <strong style={{ color: "var(--text-h)", fontWeight: "600" }}>
                German:
              </strong>{" "}
              <span style={{ color: "var(--text)" }}>A2</span>
            </li>
          </ul>
        </div>
        <div>
          <h2
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "12px",
              color: "var(--text-h)",
            }}
          >
            TECH SKILLS
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px 20px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  color: "var(--text-h)",
                }}
              >
                Backend
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  margin: 0,
                  color: "var(--text)",
                  lineHeight: "1.6",
                }}
              >
                .NET C#, Java, REST API
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  color: "var(--text-h)",
                }}
              >
                Frontend
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  color: "var(--text)",
                  lineHeight: "1.6",
                }}
              >
                React, HTML/CSS/JS
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  color: "var(--text-h)",
                }}
              >
                Databases
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  color: "var(--text)",
                  lineHeight: "1.6",
                }}
              >
                Oracle, PostgreSQL, MongoDB, MSSQL
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  color: "var(--text-h)",
                }}
              >
                Build & Tooling
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  color: "var(--text)",
                  lineHeight: "1.6",
                }}
              >
                NPM, Vite, Prettier, ESLint
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  color: "var(--text-h)",
                }}
              >
                Additional Tools
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  color: "var(--text)",
                  lineHeight: "1.6",
                }}
              >
                Figma, Linux, draw.io, UML
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  color: "var(--text-h)",
                }}
              >
                DevOps
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  color: "var(--text)",
                  lineHeight: "1.6",
                }}
              >
                Docker, Docker Compose, Git, TFS, GitHub Actions
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  color: "var(--text-h)",
                }}
              >
                Currently Learning
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  color: "var(--text)",
                  lineHeight: "1.6",
                }}
              >
                Cybersecurity
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  color: "var(--text-h)",
                }}
              >
                Cybersecurity Tools
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  color: "var(--text)",
                  lineHeight: "1.6",
                }}
              >
                Kali Linux, nmap, Python
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
