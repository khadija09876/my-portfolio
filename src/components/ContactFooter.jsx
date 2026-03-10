import React from "react";

function ContactFooter() {
  // Social links for footer
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
    <section
      id="contact" // ✅ Add this ID so Navbar can scroll here
      style={{ background: "#020617", padding: "60px 10%" }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "space-between",
        }}
      >
        {/* Left: Contact Form */}
        <div style={{ flex: "1 1 300px", maxWidth: "500px" }}>
          <h2 style={{ color: "white", marginBottom: "25px" }}>Contact Us</h2>
          <form style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <input placeholder="Your Name" style={inputStyle} />
            <input placeholder="Email" style={inputStyle} />
            <textarea placeholder="Message" style={inputStyle} rows={5} />
            <button className="btn" style={{ alignSelf: "flex-start" }}>
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info & Socials */}
        <div style={{ flex: "1 1 200px", color: "#94a3b8" }}>
          <h3 style={{ color: "white", marginBottom: "15px" }}>Get in Touch</h3>
          <p style={{ marginBottom: "8px" }}>📞 +1 234 567 890</p>
          <p style={{ marginBottom: "8px" }}>📧 hello@DesignPulse.com</p>
          <p style={{ marginBottom: "20px" }}>📍 123 Portfolio St, Web City</p>
          <h3 style={{ color: "white", marginBottom: "10px" }}>Follow Us</h3>
          <div style={{ display: "flex", gap: "20px" }}>
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
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "#94a3b8",
          fontWeight: "500",
        }}
      >
        © 2026 DesignPulse | All Rights Reserved
      </p>
    </section>
  );
}

const inputStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  outline: "none",
  background: "#101111",
  color: "white",
  border: "1px solid #334155",
};

export default ContactFooter;