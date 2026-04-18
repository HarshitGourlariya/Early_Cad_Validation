import "./AboutSection.css";

const teamMembers = [
  "Harshit Gourlariya",
  "Gaurav Sharma",
  "Devpratap Rai",
  "Ravi Shankar Gupta",
];

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-section__panel">
        <div className="about-section__intro">
          <span className="section-kicker">About Us</span>
          <h3>Built by the team behind this validation platform.</h3>
        </div>

        <div className="about-section__grid">
          {teamMembers.map((member) => (
            <div className="about-section__member" key={member}>
              <span>Team Member</span>
              <strong>{member}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
