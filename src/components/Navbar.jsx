import { NavLink } from "react-router-dom";
import { Shield } from "lucide-react";

const Navbar = () => {
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
          padding: "16px 24px",
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
            fontSize: "20px",
            fontWeight: "bold",
            textDecoration: "none",
            color: "var(--text-h)",
          }}
        >
          <Shield size={20} style={{ color: "var(--accent)" }} />
          M1SHANYA
        </NavLink>
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
      </div>
    </nav>
  );
};

export default Navbar;
