import React from "react";
import { useParams } from "react-router-dom";
import img1 from "../../assets/img/heroslider/k1.jpeg";
import img2 from "../../assets/img/heroslider/featurepic.jpg";
import img3 from "../../assets/img/heroslider/k3.jpg";
import img4 from "../../assets/img/heroslider/k3.png";



const events = [
  {
    id: 1,
    title: "International Conference on the Indian Education System for Global Development",
    description: "An international conference exploring India’s educational values...",
    date: "December 16 -17, 2024",
    venue: "Kurukshetra University",
    image: img2,
  },
  {
    id: 2,
    title: "Role of Academic-driven Startups in Developing Economy of J&K",
    description: "Academic-driven startups in J&K empower youth, foster innovation, and boost the regional economy through research-based entrepreneurship and skill-driven development.",
    date: "	June 29-30, 2024",
    venue: "	National Institute of Technology Srinagar",

    image: img1,
  },
  {
    id: 3,
    title: "Role of Academic-driven Startups in Economy",
    description: "Explore breakthrough medical technologies, telemedicine solutions, and the future of healthcare delivery systems.",
    date: "December 20, 2023",
    venue: "	National Institute of Technology Kurukshetra",

    image: img3
  },
  {
    id: 4,
    title: "Recent Advances in School Education",
    description: "Learn from successful entrepreneurs, pitch your ideas, and connect with investors in this intensive 3-day program.",
    date: "June 09-11, 2023",
    venue: "National Institute of Technology Jalandhar",

    image: img4
  },
  {
    id: 5,
    title: "Shiksha Mahakumbh 2025",
    description: "Learn from successful entrepreneurs, pitch your ideas, and connect with investors in this intensive 3-day program.",
    date: "	Will be updated soon",
    venue: "	Jawaharlal Nehru University",

    image: img4
  },
  {
    id: 6,
    title: "Shiksha Khumbh",
    description: "Learn from successful entrepreneurs, pitch your ideas, and connect with investors in this intensive 3-day program.",
    date: "June 09-11, 2023",
    venue: "National Institute of Technology Jalandhar",

    image: img4
  }

];

export const EventDetailsContent = () => {
  const { id } = useParams();
  
  const event = events.find(e => String(e.id).trim() === String(id).trim());

  if (!event) return <div>Event not found</div>;

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "3rem" }}>{event.title}</h2>
      <img src={event.image} alt={event.title} style={{ height: "20rem", display: "block", margin: "0 auto" }} />
      <p style={{ textAlign: "center", }}>{event.description}</p>
      <p style={{ textAlign: "center", }}>{event.date}</p>
      <p style={{ textAlign: "center", }}>{event.venue}</p>
      {/* Unique content for each event below */}
      {event.id === 1 && (
        <div style={{
          maxWidth: '1000px',
          margin: 'auto',
          padding: '2rem',
          background: '#fff',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          lineHeight: 1.6,
          color: '#333',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem', color: '#890c25' }}>
            <h1>International Conference on the Indian Education System for Global Development</h1>
          </div>

          <div style={{
            backgroundColor: '#f3f3f3',
            padding: '1rem',
            borderLeft: '5px solid #890c25',
            marginBottom: '2rem'
          }}>
            <p><strong>Organized by:</strong> Shiksha Mahakumbh Abhiyan</p>
            <p><strong>Theme:</strong> Indian Education Philosophy for Global Human Welfare</p>
            <p><strong>Date:</strong>December 16 -17, 2024</p>
            <p><strong>Location:</strong> Kurukshetra University</p>
          </div>

          <h2 style={{ color: '#890c25', marginTop: '1.5rem' }}>Objective</h2>
          <p>
            This prestigious international conference aims to explore India’s ancient and contemporary educational models and their relevance in shaping a peaceful, progressive, and knowledge-driven global society. The conference envisions India as a beacon of holistic learning, rooted in values, and adaptable to 21st-century challenges.
          </p>

          <h2 style={{ color: '#890c25', marginTop: '1.5rem' }}>Key Highlights:</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Highlight India's role in promoting peace, ethics, and sustainable development through education.</li>
            <li>Present research papers and policy recommendations for global educational transformation.</li>
            <li>Network with education ministers, scholars, policymakers, and global academic leaders.</li>
            <li>Showcase innovations in digital learning and their integration with Indian philosophical thought.</li>
            <li>Promote Vasudhaiva Kutumbakam — “One Earth, One Family, One Future” through education.</li>
          </ul>

          <h2 style={{ color: '#890c25', marginTop: '1.5rem' }}>Outcomes:</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Explore the legacy and global relevance of India’s traditional education systems like Gurukul and Vedas.</li>
            <li>Understand the impact of NEP 2020 in building a globally competitive, value-based education model.</li>
            <li>Foster intercultural dialogue and collaboration between Indian and international education systems.</li>
          </ul>
        </div>
      )}


      {event.id === 2 && (
        <div style={{
          maxWidth: '1000px',
          margin: 'auto',
          padding: '2rem',
          background: '#fff',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          lineHeight: 1.6,
          color: '#333',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem', color: '#890c25' }}>
            <h1>Role of Academic-driven Startups in Developing Economy of J&K</h1>
          </div>

          <div style={{
            backgroundColor: '#f3f3f3',
            padding: '1rem',
            borderLeft: '5px solid #890c25',
            marginBottom: '2rem'
          }}>
            <p><strong>Organized by:</strong> Shiksha Mahakumbh Abhiyan</p>
            <p><strong>Theme:</strong> Indian Education Philosophy for Global Human Welfare</p>
            <p><strong>Date:</strong>29-30 June , 2024</p>
            <p><strong>Location:</strong> National Institute of Technology Srinagar</p>
          </div>

          <h2 style={{ color: '#890c25', marginTop: '1.5rem' }}>Objective</h2>
          <p>
            The purpose of this international conference is to promote the foundational philosophies of the Indian education system on a global platform. It aims to bring together thought leaders, educators, researchers, and practitioners to discuss how Indian educational values, pedagogy, and systems can contribute to global human development, ethics, and peace.
          </p>

          <h2 style={{ color: '#890c25', marginTop: '1.5rem' }}>Key Highlights:</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Rooted in the principles of NEP 2020</li>
            <li>Focus on experiential, project-based, and inquiry-driven learning</li>
            <li>Integration of EdTech tools, AI, and digital resources in classrooms</li>
            <li>Promotion of foundational literacy and numeracy (FLN) from early grades</li>
            <li>Child-centric and inclusive pedagogical practices</li>
            <li>Continuous professional development and capacity building of teachers</li>
          </ul>

          <h2 style={{ color: '#890c25', marginTop: '1.5rem' }}>Outcomes:</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Establish a global dialogue around Indian education systems.</li>
            <li>Develop collaborative research and academic partnerships.</li>
            <li>Prepare policy recommendations to integrate Indian educational principles globally.</li>
            <li>Publish a post-conference journal with selected papers and findings.</li>
          </ul>
        </div>
      )}
      {event.id === 3 && (
        <div style={{
          maxWidth: '1000px',
          margin: 'auto',
          padding: '2rem',
          background: '#fff',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          lineHeight: 1.6,
          color: '#333',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem', color: '#890c25' }}>
            <h1>Role of Academic-driven Startups in Economy</h1>
          </div>

          <div style={{
            backgroundColor: '#f3f3f3',
            padding: '1rem',
            borderLeft: '5px solid #890c25',
            marginBottom: '2rem'
          }}>
            <p><strong>Organized by:</strong> Shiksha Mahakumbh Abhiyan</p>
            <p><strong>Theme:</strong> “Empowering Innovation through Academia: Fostering Startups for Sustainable Economic Growth”</p>
            <p><strong>Date:</strong>20 December , 2024</p>
            <p><strong>Location:</strong> National Institute of Technology Kurukshetra</p>
          </div>

          <h2 style={{ color: '#890c25', marginTop: '1.5rem' }}>Objective</h2>
          <p>
            The session on "Role of Academic-driven Startups in Developing Economy" highlights the transformative power of educational institutions in driving innovation and entrepreneurship. Academic-driven startups, rooted in research and intellectual capital, play a pivotal role in solving local problems, generating employment, and contributing to sustainable economic growth—especially in emerging regions like Jammu & Kashmir.
          </p>

          <h2 style={{ color: '#890c25', marginTop: '1.5rem' }}>Key Highlights:</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Bridge the gap between academic research and industry by turning ideas into viable startups.</li>
            <li>Encourage innovation, entrepreneurship, and self-reliance among students and researchers.</li>
            <li>Create local employment opportunities, reducing brain drain and supporting regional development.</li>
            <li>Promote a culture of problem-solving tailored to societal and regional challenges.</li>
            <li>Enhance collaboration between academia, government, and private sectors to drive economic growth.</li>
            <li>Enable commercialization of academic innovations in technology, agriculture, health, and education.</li>
            <li>Leverage incubation centers in universities to support early-stage ventures and economic inclusion.</li>
            <li>Support the vision of “Atmanirbhar Bharat” through homegrown solutions led by youth and educators.</li>
          </ul>

          <h2 style={{ color: '#890c25', marginTop: '1.5rem' }}>Outcomes:</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Increased awareness about the potential of academic research in entrepreneurship.</li>
            <li>Strengthened ecosystem for innovation and startup incubation in educational institutions.</li>
            <li>Policy recommendations for fostering university-led startup culture.</li>
            <li>Collaboration opportunities between academia, industry, and government bodies.</li>
          </ul>
        </div>
      )}
      {event.id === 4 && (
        <div style={{
          maxWidth: '1000px',
          margin: 'auto',
          padding: '2rem',
          background: '#fff',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          lineHeight: 1.6,
          color: '#333',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem', color: '#890c25' }}>
            <h1>“Transforming Classrooms: Innovation, Inclusion & Integrity in School Education”</h1>
          </div>

          <div style={{
            backgroundColor: '#f3f3f3',
            padding: '1rem',
            borderLeft: '5px solid #890c25',
            marginBottom: '2rem'
          }}>
            <p><strong>Organized by:</strong> Shiksha Mahakumbh Abhiyan</p>
            <p><strong>Theme:</strong> Indian Education Philosophy for Global Human Welfare</p>
            <p><strong>Date:</strong>June 09-11, 2023</p>
            <p><strong>Location:</strong> National Institute of Technology Srinagar</p>
          </div>

          <h2 style={{ color: '#890c25', marginTop: '1.5rem' }}>Objective</h2>
          <p>
            The session on "Recent Advances in School Education" aims to showcase emerging trends, technologies, and pedagogical shifts transforming the school education landscape in India. With the National Education Policy (NEP) 2020 as a guiding framework, the event will highlight innovations that make learning more inclusive, competency-based, and digitally empowered.
          </p>

          <h2 style={{ color: '#890c25', marginTop: '1.5rem' }}>Key Highlights:</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>Global Relevance of Indian Education:</strong> Highlighting ancient Indian systems like Gurukul, Vedas, and holistic learning as models for modern times.</li>
            <li><strong>NEP 2020 Impact:</strong> Discussing the implementation and global adaptability of India’s New Education Policy.</li>
            <li><strong>Value-Based Education:</strong> Promoting ethical and spiritual learning for sustainable global citizenship.</li>
            <li><strong>Digital India & Education:</strong> Exploring how India's digital initiatives support global access and equality in education.</li>
            <li><strong>Vasudhaiva Kutumbakam:</strong> Understanding the role of education in realizing the vision of ‘One Earth, One Family, One Future’.</li>
            <li><strong>Intercultural Exchange:</strong> Creating bridges between Indian knowledge systems and international education methodologies.</li>
          </ul>

          <h2 style={{ color: '#890c25', marginTop: '1.5rem' }}>Outcomes:</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Deeper understanding of NEP 2020 implementation in schools</li>
            <li>Showcase of best practices from innovative schools and teachers</li>
            <li>Awareness of effective digital and experiential learning tools</li>
            <li>Policy suggestions for bridging the rural-urban education gap</li>
            <li>Networking among educators, administrators, and EdTech leaders</li>
            <li>Commitment to building foundational literacy and numeracy (FLN) skills</li>
          </ul>
        </div>
      )}
      {event.id === 5 && (
        <div style={{
          maxWidth: '1000px',
          margin: 'auto',
          padding: '2rem',
          background: '#fff',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          lineHeight: 1.6,
          color: '#333',
        }}>
          
          {/* Event Registration Form */}
          <div style={{
            marginTop: '2.5rem',
            padding: '2rem',
            background: '#f9f9f9',
            borderRadius: 10,
            boxShadow: '0 1px 6px rgba(137,12,37,0.08)',
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <h2 style={{ color: '#890c25', textAlign: 'center', marginBottom: '1.5rem' }}>Event Registration</h2>
            <form onSubmit={e => { e.preventDefault(); alert('Registration submitted!'); }}>
              <div style={{ marginBottom: '1.2rem' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Name</label>
                <input type="text" id="name" name="name" required style={{ width: '100%', padding: 10, borderRadius: 5, border: '1px solid #ccc' }} />
              </div>
              <div style={{ marginBottom: '1.2rem' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Email</label>
                <input type="email" id="email" name="email" required style={{ width: '100%', padding: 10, borderRadius: 5, border: '1px solid #ccc' }} />
              </div>
              <div style={{ marginBottom: '1.2rem' }}>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Phone</label>
                <input type="tel" id="phone" name="phone" required style={{ width: '100%', padding: 10, borderRadius: 5, border: '1px solid #ccc' }} />
              </div>
              <div style={{ marginBottom: '1.2rem' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Message</label>
                <textarea id="message" name="message" rows={3} style={{ width: '100%', padding: 10, borderRadius: 5, border: '1px solid #ccc' }} />
              </div>
              <button type="submit" style={{
                background: '#890c25',
                color: '#fff',
                padding: '0.7rem 2.2rem',
                border: 'none',
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer',
                boxShadow: '0 1px 4px rgba(137,12,37,0.10)'
              }}>Register</button>
            </form>
          </div>
        </div>
      )}
        {event.id === 6 && (
       <div style={{
          maxWidth: '1000px',
          margin: 'auto',
          padding: '2rem',
          background: '#fff',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          lineHeight: 1.6,
          color: '#333',
        }}>
          
          {/* Event Registration Form */}
          <div style={{
            marginTop: '2.5rem',
            padding: '2rem',
            background: '#f9f9f9',
            borderRadius: 10,
            boxShadow: '0 1px 6px rgba(137,12,37,0.08)',
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <h2 style={{ color: '#890c25', textAlign: 'center', marginBottom: '1.5rem' }}>Event Registration</h2>
            <form onSubmit={e => { e.preventDefault(); alert('Registration submitted!'); }}>
              <div style={{ marginBottom: '1.2rem' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Name</label>
                <input type="text" id="name" name="name" required style={{ width: '100%', padding: 10, borderRadius: 5, border: '1px solid #ccc' }} />
              </div>
              <div style={{ marginBottom: '1.2rem' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Email</label>
                <input type="email" id="email" name="email" required style={{ width: '100%', padding: 10, borderRadius: 5, border: '1px solid #ccc' }} />
              </div>
              <div style={{ marginBottom: '1.2rem' }}>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Phone</label>
                <input type="tel" id="phone" name="phone" required style={{ width: '100%', padding: 10, borderRadius: 5, border: '1px solid #ccc' }} />
              </div>
              <div style={{ marginBottom: '1.2rem' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Message</label>
                <textarea id="message" name="message" rows={3} style={{ width: '100%', padding: 10, borderRadius: 5, border: '1px solid #ccc' }} />
              </div>
              <button type="submit" style={{
                background: '#890c25',
                color: '#fff',
                padding: '0.7rem 2.2rem',
                border: 'none',
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer',
                boxShadow: '0 1px 4px rgba(137,12,37,0.10)'
              }}>Register</button>
            </form>
          </div>
        </div>)}
    </div>


  );
}