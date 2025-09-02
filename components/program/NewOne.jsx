import React from "react";


const sectionStyle = {
  margin: "40px auto",
  maxWidth: "1200px",
  padding: "0 20px",
  background: "linear-gradient(135deg, #fdf6f7 60%, #ffe3ec 100%)",
  borderRadius: "18px",
  boxShadow: "0 8px 32px rgba(137,12,37,0.08)",
};

const headingStyle = {
  color: "#fff",
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "28px",
  background: "linear-gradient(90deg, #890c25 60%, #e94e77 100%)",
  borderRadius: "12px",
  padding: "16px 0",
  boxShadow: "0 2px 8px rgba(137,12,37,0.10)",
  textAlign: "center",
  letterSpacing: "1px",
};

const cardContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "32px",
  justifyContent: "center",
};

const cardStyle = {
  background: "linear-gradient(120deg, #fff 80%, #ffe3ec 100%)",
  borderRadius: "16px",
  boxShadow: "0 6px 24px rgba(137,12,37,0.13)",
  border: "1px solid #e94e77",
  padding: "28px 22px",
  minWidth: "280px",
  maxWidth: "370px",
  flex: "1 1 320px",
  transition: "transform 0.2s, box-shadow 0.2s",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
};

const cardHoverStyle = {
  transform: "translateY(-8px) scale(1.03)",
  boxShadow: "0 12px 32px rgba(137,12,37,0.18)",
};

const subtitleStyle = {
  color: "#e94e77",
  fontWeight: "bold",
  fontSize: "1.18rem",
  marginBottom: "12px",
  letterSpacing: "0.5px",
};

const listStyle = {
  paddingLeft: "18px",
  marginBottom: "0",
  color: "#444",
  fontSize: "1.05rem",
  lineHeight: "1.7",
};

// Card component with hover effect
const Card = ({ children }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={hover ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </div>
  );
};

 const thematicConclaves = [
  {
    title: "National Education Leadership Conclave",
    who: "Vice-Chancellors, Directors, NEP Experts",
    focus: "Institutional autonomy, global standards",
    outcome: "Vision Charter for Higher Education @2047",
  },
  {
    title: "School Transformation & Leadership Conclave",
    who: "Principals, DEOs, Edu Officers",
    focus: "Leadership, foundational literacy",
    outcome: "Model School Leadership Toolkit",
  },
  {
    title: "Teachers of Bharat Conclave",
    who: "Teachers across all levels, para-educators",
    focus: "Pedagogy, multilingual teaching, tech in classrooms",
    outcome: "21st Century Bharat Shikshak Framework",
  },
  {
    title: "Global Partnerships & Knowledge Diplomacy Conclave",
    who: "Foreign universities, diplomats",
    focus: "Academic mobility, international collaboration",
    outcome: "Global Education Roadmap for Bharat",
  },
  {
    title: "Policy, Governance & Innovation Conclave",
    who: "Bureaucrats, think tanks, edu-startups",
    focus: "Digital education governance, startup synergy",
    outcome: "Edu-Governance Reform Blueprint",
  },
  {
    title: "Social Responsibility & Equity Conclave",
    who: "CSR leaders, NGOs, grassroots edu-activists",
    focus: "Access, gender equity, underserved communities",
    outcome: "Inclusive Education Investment Charter",
  },
  {
    title: "Student Changemakers Conclave",
    who: "NSS/NCC leaders, youth entrepreneurs",
    focus: "Youth governance, mental wellness",
    outcome: "Bharat Yuva Education Manifesto",
  },
  {
    title: "Research, Science & Knowledge Systems Conclave",
    who: "Scientists, scholars, R&D teams",
    focus: "Interdisciplinary research, patents, Indic knowledge",
    outcome: "Research-to-Policy Action Guide",
  },
  {
    title: "Media, Narratives & Digital Influence Conclave",
    who: "Edufluencers, journalists, storytellers",
    focus: "Narrative building, responsible digital communication",
    outcome: "Shiksha Media Ethics & Impact Code",
  },
  {
    title: "Grassroots & Community Education Conclave",
    who: "Rural educators, Panchayat leaders, Anganwadi workers",
    focus: "Contextual curriculum, regional learning",
    outcome: "Jan Shiksha Innovation Compendium",
  },
  {
    title: "Inclusion & Differently-Abled Learning Conclave",
    who: "Special educators, inclusive tech startups",
    focus: "Universal Design of Learning (UDL), accessibility",
    outcome: "Inclusive Bharat Education Charter",
  },
  {
    title: "Parents & Civil Society Conclave",
    who: "PTA members, community parents",
    focus: "Digital parenting, school-community linkages",
    outcome: "Home-School Engagement Guidelines",
  },
];

export const  NewOne = () => {
  return (
    <div>
      {/* Key Programme Segments */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>🔷 Key Programme Segments</h2>
        <div style={{ ...cardContainer, justifyContent: "space-around" }}>
          <Card>
            <ul style={listStyle}>
              <li>Conclaves on Education, Innovation, Governance & Inclusion</li>
              <li>Research Paper Presentations</li>
              <li>National Competitions for School Students</li>
              <li>Showcasing Startups & Innovations</li>
              <li>Exhibitions of Student Projects</li>
              <li>Sharing of Best Practices</li>
              <li>Recognition of Emerging Talents</li>
            </ul>
          </Card>
          <Card>
            <ul style={listStyle}>
              <li>Awards for Excellence in Education & Social Service</li>
              <li>Cultural Performances</li>
              <li>Pitching Sessions for Innovators</li>
              <li>Branding & Business Promotion Opportunities</li>
              <li>Public Relations & Media Engagements</li>
              <li>Signing of Strategic MoUs</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Thematic Conclaves */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>🔷 Thematic Conclaves</h2>
        <div style={cardContainer}>
          {thematicConclaves.map((item, idx) => (
            <Card key={idx}>
              <div style={subtitleStyle}>{item.title}</div>
              <ul style={listStyle}>
                <li><strong>Who:</strong> {item.who}</li>
                <li><strong>Focus:</strong> {item.focus}</li>
                <li><strong>Outcome:</strong> {item.outcome}</li>
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* For School Students */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>🔷 For School Students</h2>
        <div style={cardContainer}>
          <Card>
            <div style={subtitleStyle}>🛠 National Tinkering Challenge – Bharat ke Navachar</div>
            <ul style={listStyle}>
              <li><strong>Objective:</strong> Encourage community-focused innovations</li>
              <li><strong>Themes:</strong> Climate, Agriculture, Disability Tech, Drug Delivery, Rural Ed</li>
              <li><strong>Format:</strong> Prototype building + video pitching</li>
              <li><strong>Outcome:</strong> Top entries receive incubation support and mentorship</li>
            </ul>
          </Card>
          <Card>
            <div style={subtitleStyle}>🤝 Innovation Club Meet-up</div>
            <ul style={listStyle}>
              <li><strong>Participants:</strong> ATL, CBSE Innovation Clubs, NCF Pilots</li>
              <li><strong>Activities:</strong> Peer learning, innovation showcase</li>
              <li><strong>Special:</strong> Meet & Learn from Teacher-Innovators</li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}