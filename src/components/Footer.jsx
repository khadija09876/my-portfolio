import React from "react";

function Footer() {
  // Social links
  const socials = [
    {
      label: "Twitter",
      href: "https://twitter.com/",
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9 9 0 0 1-2.83 1.1A4.48 4.48 0 0 0 16.67 0c-2.5 0-4.5 2.24-4.11 4.75A12.94 12.94 0 0 1 1.64 1.15a4.48 4.48 0 0 0 1.39 6A4.5 4.5 0 0 1 .9 6.6v.06a4.48 4.48 0 0 0 3.6 4.4 4.52 4.52 0 0 1-2.04.08 4.49 4.49 0 0 0 4.19 3.12A9 9 0 0 1 0 19.54 12.9 12.9 0 0 0 7 21c8.27 0 12.8-6.82 12.5-13.08A9.22 9.22 0 0 0 23 3z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/",
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 24V7.8h5V24H0zm7.5-16.3h4.7v2.3h.1c.7-1.3 2.5-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8.1V24h-5v-7.2c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-5V7.7z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:hello@myportfolio.com",
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "30px 20px",
        background: "#020617",
        marginTop: "40px",
        color: "#94a3b8",
      }}
    >
      {/* Contact Info */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <p>
          <strong>Phone:</strong> +1 234 567 890
        </p>
        <p>
          <strong>Email:</strong> DesignPulse@.com
        </p>
        <p>
          <strong>Address:</strong> 123 Design Street, Creative City, USA
        </p>
      </div>

      {/* Social Links */}
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "15px" }}>
        {socials.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              color: "#94a3b8",
              display: "inline-flex",
              alignItems: "center",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#22c55e")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p style={{ fontWeight: "500", fontSize: "14px" }}>
        © 2026 DesignPulse | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;