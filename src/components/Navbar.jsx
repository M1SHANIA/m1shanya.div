import { NavLink } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import React from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkStyle = ({ isActive }) =>
    `transition-colors ${isActive ? "text-accent font-bold" : "text-gray-500 hover:text-accent"}`;

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        zIndex: 50,
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: "1126px",
          margin: "0 auto",
          padding: isMobile ? "12px 16px" : "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NavLink
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: isMobile ? "16px" : "20px",
            fontWeight: "bold",
            textDecoration: "none",
            color: "var(--text-h)",
          }}
        >
          <Shield
            size={isMobile ? 16 : 20}
            style={{ color: "var(--accent)" }}
          />
          M1SHANYA
        </NavLink>

        {isMobile ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-h)",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "24px",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "2px",
            }}
          >
            <NavLink
              to="/"
              className={linkStyle}
              style={{ textDecoration: "none" }}
            >
              Main
            </NavLink>
            <NavLink
              to="/experience"
              className={linkStyle}
              style={{ textDecoration: "none" }}
            >
              Experience
            </NavLink>
            <NavLink
              to="/education"
              className={linkStyle}
              style={{ textDecoration: "none" }}
            >
              Education
            </NavLink>
            <NavLink
              to="/projects"
              className={linkStyle}
              style={{ textDecoration: "none" }}
            >
              Projects
            </NavLink>
          </div>
        )}
      </div>

      {isMobile && isOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            padding: "12px 16px",
            borderTop: "1px solid var(--border)",
            backgroundColor: "var(--bg)",
          }}
        >
          <NavLink
            to="/"
            className={linkStyle}
            style={{ textDecoration: "none", padding: "8px 0" }}
            onClick={() => setIsOpen(false)}
          >
            Main
          </NavLink>
          <NavLink
            to="/experience"
            className={linkStyle}
            style={{ textDecoration: "none", padding: "8px 0" }}
            onClick={() => setIsOpen(false)}
          >
            Experience
          </NavLink>
          <NavLink
            to="/education"
            className={linkStyle}
            style={{ textDecoration: "none", padding: "8px 0" }}
            onClick={() => setIsOpen(false)}
          >
            Education
          </NavLink>
          <NavLink
            to="/projects"
            className={linkStyle}
            style={{ textDecoration: "none", padding: "8px 0" }}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
