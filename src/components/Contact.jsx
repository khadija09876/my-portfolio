function Contact() {
  return (
    <section id="contact" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Contact Us</h2>
      <div
        className="container"
        style={{
          maxWidth: "500px", // smaller width for portfolio look
          margin: "auto",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px", // smaller vertical gap
          }}
        >
          <input placeholder="Your Name" style={inputStyle} />
          <input placeholder="Email" style={inputStyle} />
          <textarea placeholder="Message" style={inputStyle} rows={5} />

          <button className="btn" style={{ alignSelf: "flex-start" }}>
            Send Message
          </button>
        </form>
      </div>
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

export default Contact;