import { useState, useEffect } from "react";
import Image from "next/image";

const sliderImages = [
  "/assets/img/heroslider/k1.jpeg",
  "/assets/img/heroslider/k2.jpeg",
  "/assets/img/heroslider/k3.jpg",
  "/assets/img/heroslider/k4.jpeg",
  "/assets/img/heroslider/k4.jpg"
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ width: "100%", maxWidth: "950px", height: "75vh", margin: "0 auto 32px auto", borderRadius: "18px", overflow: "hidden", boxShadow: "0 8px 32px rgba(137,12,37,0.13)", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
  <Image src={sliderImages[current]} alt={`Conference Slide ${current + 1}`} fill style={{ objectFit: "cover" }} />
      <div style={{ position: "absolute", bottom: "18px", left: 0, right: 0, display: "flex", justifyContent: "center", gap: "12px" }}>
        {sliderImages.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: current === idx ? "#e94e77" : "#fff",
              border: current === idx ? "2px solid #e94e77" : "2px solid #ccc",
              boxShadow: current === idx ? "0 2px 8px #e94e77" : "none",
              cursor: "pointer",
              transition: "background 0.3s, border 0.3s"
            }}
          />
        ))}
      </div>
    </div>
  );
}

const conferenceTracks = [
  {
    title: "Fundamental and Applied Sciences Application",
    chair: "Dr. Vipin Jain",
    team: ["Dr. Kapil", "Dr. Praveen Kumar", "Dr. Vijay Kumar", "Dr. Kamal Priya Singh", "Dr. V.K. Singh", "Dr. Praveen Kumar"],
    subThemes: ["Physics, Chemistry, Biology, Mathematics", "Earth and Space Sciences", "Interdisciplinary Sciences (Biotechnology, Material Science, etc.)"],
  },
  {
    title: "Engineering and Technology",
    chair: "Dr. Anish Sachdeva",
    team: ["Dr. Jatinder Garg", "Dr. Pooja Sharma", "Dr. Vikash Kumar Garg", "Dr. Ashwani Rana", "Dr. Praveen Kumar", "Dr. Pankaj", "Dr. Mohit Tyagi"],
    subThemes: ["Core Engineering (Mechanical, Civil, Electrical, etc.)", "Emerging Technologies (AI, Robotics, Data Science, Quantum Tech)"]
  },
  {
    title: "EdTech and Digital Education",
    chair: "Dr. Rajneesh Talwar",
    team: ["Dr. Danvir Mandal", "Dr. Manvinder Sharma", "Dr. Satyajit Anand", "Dr. Pardeep Jindal"],
    subThemes: ["Education Technology Innovations", "Online & Blended Learning", "AI in Education", "Digital Literacy and Access"]
  },
  {
    title: "Health Sciences and Traditional Medicine",
    chair: "Prof. Nitin Bansal",
    team: ["Dr. Shweta Chourasia", "Dr. Surjeet"],
    subThemes: ["Modern Medicine", "AYUSH (Ayurveda, Yoga, Unani, Siddha, Homeopathy, Naturopathy)", "Public Health & Preventive Care"]
  },
  {
    title: "Social Sciences and Humanities",
    chair: "Dr. Bala Lakshendra",
    team: ["Dr. Manoj Tiwary", "Dr. Atrayee Saha"],
    subThemes: ["Sociology, Psychology, Political Science, History", "Philosophy, Ethics, and Cultural Studies"]
  },
  {
    title: "Education Systems and Pedagogy",
    chair: "Prof. Pradeep Kumar Singh",
    team: ["Dr. Digvijay Singh", "Dr. Nahid Tyagi"],
    subThemes: ["Foundational to Secondary School Education", "Higher Education & Research", "Inclusive Education (Disabled, Marginalized, Gender-based)", "Gurukul & Indigenous Knowledge Systems", "Lifelong Learning & Adult Education"]
  },
  {
    title: "Management, Business & Entrepreneurship",
    chair: "Dr. Sanjeev Bansal",
    team: ["Dr. Nitya Sharma", "Dr. Kamlesh Prashad"],
    subThemes: ["Business Administration", "Innovation and Startups", "Family Business & Social Entrepreneurship"]
  },
  {
    title: "International Relations, Law & Governance",
    chair: "Ms. Poonima Pawar (Advocate, Delhi)",
    team: [],
    subThemes: ["Global Affairs", "Public Policy & Administration", "Legal Studies & Human Rights"]
  },
  {
    title: "Sports, Physical Education & Well-being",
    chair: "Dr. Lakha Singh",
    team: [],
    subThemes: ["Physical Training & Sports Science", "Mental Health and Wellness", "Yoga and Lifestyle Education"]
  },
  {
    title: "Agriculture, Food & Veterinary Sciences",
    chair: "Dr. Neelesh Sharma",
    team: ["Dr. Dhirender", "Dr. SPS", "Dr. Ankit"],
    subThemes: ["Sustainable Agriculture", "Agri-Tech & Innovation", "Animal Health and Husbandry"]
  },
  {
    title: "Environment, Sustainability & Water Resources",
    chair: "Dr. Ashwani Sharma",
    team: ["Dr. Gaurav Sharma", "Dr. Parveen kumar", "Dr. Pooja Sharma"],
    subThemes: ["Climate Change", "Environmental Education", "Water & Natural Resource Management"]
  },
  {
    title: "Culture, Arts & Heritage",
    chair: "Dr. Ravi Prakash",
    team: [],
    subThemes: ["Performing & Visual Arts", "Folk and Tribal Traditions", "Cultural Conservation and Promotion"]
  },
  {
    title: "Languages and Linguistics",
    chair: "Dr. Anshu (CBLU Bhiwani)",
    team: [],
    subThemes: ["Indian Classical & Modern Languages", "Foreign Languages", "Translation and Language Technology"]
  },
  {
    title: "Vocational & Skill-based Education",
    chair: "Dr. Dhirender",
    team: [],
    subThemes: ["Industrial Training", "Crafts and Traditional Skills", "Workforce Readiness and Certification"]
  },
  {
    title: "Bharatiya Knowledge System (BKS)",
    chair: "Dr. V.K. Singh (ISRO)",
    team: ["Dr. Pankaj (CU HP)"],
    subThemes: ["Indigenous Knowledge & Wisdom Traditions", "Ancient Science, Mathematics & Philosophy", "Bharatiya Systems of Governance, Education, and Health"]
  }
];

export const Conf = () => {
  return (
    <div className="container py-5">
      <ImageSlider />
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "32px",
        marginBottom: "32px"
      }}>
        <div style={{
          background: "#fff",
          borderRadius: "18px",
          boxShadow: "0 4px 16px rgba(137,12,37,0.10)",
          padding: "32px 26px 28px 26px",
          flex: "1 1 320px",
          minWidth: "280px",
          marginBottom: "0"
        }}>
          <h4 style={{ color: "#890c25", fontWeight: "bold", marginBottom: "10px" }}>Important Dates</h4>
          <ul style={{ color: "#444", fontSize: "1rem", marginBottom: "0", paddingLeft: "0" }}>
            <li><strong>Call for Papers:</strong> 01 Aug 2025</li>
            <li><strong>Last Date of Abstract Submission:</strong> 10 Sept 2025</li>
            <li><strong>Abstract Acceptance:</strong> 20 Sept 2025</li>
            <li><strong>Full Length Paper Submission:</strong> 30 Sept 2025</li>
            <li><strong>Regular Registration on or before:</strong> 10 Oct 2025</li>
            <li><strong>Late Registration:</strong> 30 Oct 2025</li>
          </ul>
        </div>
        <div style={{
          background: "#fff",
          borderRadius: "18px",
          boxShadow: "0 4px 16px rgba(137,12,37,0.10)",
          padding: "32px 26px 28px 26px",
          flex: "1 1 320px",
          minWidth: "280px",
          marginBottom: "0"
        }}>
          <h4 style={{ color: "#890c25", fontWeight: "bold", marginBottom: "10px" }}>Registration Fees</h4>
          <ul style={{ color: "#444", fontSize: "1rem", marginBottom: "0", paddingLeft: "0" }}>
            <li><strong>Students (UG/PG/PhD.):</strong> ₹500</li>
            <li><strong>Research Scholars:</strong> ₹1,000</li>
            <li><strong>Academia & R&D:</strong> ₹2,100</li>
            <li><strong>Industry:</strong> ₹5,000</li>
          </ul>
          <div style={{ color: "#e94e77", fontSize: "0.98rem", marginTop: "10px" }}>
            *Above includes Lunch, Kit and Certificate for one author<br />
            *For additional authors fees of ₹ 500/per author for lunch, kit and certificate.<br />
            *No fee for International Delegates. Fee Include complimentary membership of DHE
          </div>
        </div>
      </div>
      <h1 className="text-center my-5">Conference Tracks & Teams</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center" }}>
        {conferenceTracks.map((track, idx) => (
          <div
            key={idx}
            className="conf-card"
            style={{
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 4px 16px rgba(137,12,37,0.10)",
              padding: "28px 22px",
              minWidth: "320px",
              maxWidth: "400px",
              flex: "1 1 320px",
              margin: "12px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              border: "2px solid transparent",
              transition: "box-shadow 0.3s, border-color 0.3s"
            }}
          >
            <h3 style={{ color: "#890c25", fontWeight: "bold", fontSize: "1.25rem", marginBottom: "10px" }}>{track.title}</h3>
            <div style={{ color: "#e94e77", fontWeight: "bold", marginBottom: "8px" }}>Chair: {track.chair}</div>
            {track.team.length > 0 && (
              <div style={{ marginBottom: "8px" }}>
                <span style={{ fontWeight: "bold", color: "#444" }}>Team Members:</span>
                <ul style={{ margin: "6px 0 0 0", color: "#444", fontSize: "0.98rem", display: "flex", flexWrap: "wrap", gap: "8px", paddingLeft: "0" }}>
                  {track.team.map((member, i) => (
                    <li key={i} style={{ listStyle: "none", marginBottom: "0", background: "#f3f3f3", borderRadius: "8px", padding: "6px 12px", display: "inline-block" }}>{member}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <span style={{ fontWeight: "bold", color: "#444" }}>Sub-Themes:</span>
              <ul style={{ margin: "6px 0 0 16px", color: "#444", fontSize: "0.98rem" }}>
                {track.subThemes.map((theme, i) => (
                  <li key={i} style={{ listStyle: "none", marginBottom: "8px", background: "#fff5f8", borderRadius: "8px", padding: "6px 12px", display: "inline-block" }}>{theme}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .conf-card:hover {
          box-shadow: 0 8px 32px rgba(233,76,119,0.18);
          border-color: #e94e77;
          animation: blink-border 1s linear infinite;
        }
        @keyframes blink-border {
          0%, 100% { border-color: #e94e77; }
          50% { border-color: #fff5f8; }
        }
      `}</style>
    </div>
  );
}