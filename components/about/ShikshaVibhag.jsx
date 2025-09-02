import React from "react";

const cardStyle = {
	background: "#fff",
	borderRadius: "20px",
	boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
	padding: "40px 24px",
	margin: "40px auto",
	maxWidth: "1100px",
	width: "95vw",
	fontFamily: "'Segoe UI', 'Roboto', sans-serif",
};

const sectionTitle = {
	fontSize: "2.5rem",
	fontWeight: "bold",
	color: "#890c25",
	marginBottom: "24px",
	letterSpacing: "1.5px",
	textAlign: "center",
};

const tableStyle = {
	width: "100%",
	borderCollapse: "collapse",
	marginBottom: "24px",
	fontSize: "1rem",
	background: "#fafafa",
	borderRadius: "10px",
	overflow: "hidden",
};

const thStyle = {
	background: "linear-gradient(90deg, #890c25 60%, #c2185b 100%)",
	color: "#fff",
	fontWeight: "bold",
	padding: "12px 10px",
	border: "none",
	fontSize: "1.08rem",
};

const tdStyle = {
	padding: "14px 10px",
	border: "1px solid #890c25",
	background: "#fff",
	textAlign: "center",
	fontSize: "1.05rem",
	transition: "background 0.2s",
};

const subSectionTitle = {
	fontSize: "1.3rem",
	fontWeight: "bold",
	color: "#c2185b",
	margin: "24px 0 12px 0",
	letterSpacing: "0.5px",
};

export const  ShikshaVibhag = () => {
	return (
		<div style={cardStyle}>
			<h1 style={sectionTitle}>Shiksha Mahakumbh Abhiyan</h1>
			<h2 style={subSectionTitle}>Department of Holistic Education</h2>
			<h3 style={subSectionTitle}>Vidya Bharti Institute of Training and Research Chandigarh</h3>
			<h3 style={subSectionTitle}>ACADEMIC COUNCIL</h3>
			<table style={tableStyle}>
				<thead>
					<tr>
						<th style={thStyle}>Title/Role</th>
						<th style={thStyle}>Name</th>
						<th style={thStyle}>Affiliation</th>
					</tr>
				</thead>
				<tbody>
					<tr><td style={tdStyle}>Patron</td><td style={tdStyle}>Dr. Ashok Pal</td><td style={tdStyle}>President, Vidya Bharti - North Zone</td></tr>
					<tr><td style={tdStyle}>Patron</td><td style={tdStyle}>Mr. Vijay Kumar Nadda</td><td style={tdStyle}>Organising Secratery, Vidya Bharti - North Zone</td></tr>
				</tbody>
			</table>
			<h3 style={subSectionTitle}>ADVISORY COMMITTEE</h3>
			<table style={tableStyle}>
				<thead>
					<tr>
						<th style={thStyle}>Title/Role</th>
						<th style={thStyle}>Name</th>
						<th style={thStyle}>Affiliation</th>
					</tr>
				</thead>
				<tbody>
					<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Prof. Somnath Sachdeva</td><td style={tdStyle}>Vice Chancellor, Kurukshetra University, Haryana</td></tr>
					<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Prof. Binod Kumar Kanaujia</td><td style={tdStyle}>Director, NIT Jalandhar, Punjab</td></tr>
					<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Prof. B. V. Reddy</td><td style={tdStyle}>Director, NIT Kurukshetra, Haryana</td></tr>
					<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Prof. Deepti Dharmani</td><td style={tdStyle}>Vice Chancellor, Chaudhary Bansi Lal University, Haryana</td></tr>
					<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Prof. Amar Pal Singh</td><td style={tdStyle}>Vice Chancellor, Dr. R. M.L. National Law University, UP</td></tr>
					<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Prof. R. P. Tiwari</td><td style={tdStyle}>Vice Chancellor, Central University of Punjab, Punjab</td></tr>
					<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Prof. Tankeshwar Kumar</td><td style={tdStyle}>Vice Chancellor, Central University of Haryana, Haryana</td></tr>
					<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Prof. S. P. Bansal</td><td style={tdStyle}>Vice Chancellor, Central University of Himachal Pradesh, H.P.</td></tr>
					<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Prof. M. C. Govil</td><td style={tdStyle}>Director, NIT Sikkim, Sikkim</td></tr>
					<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Prof. Dinesh Kumar</td><td style={tdStyle}>Vice Chancellor, Gurugram University, Haryana</td></tr>
					<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Prof. B. R. Kamboj</td><td style={tdStyle}>Vice Chancellor, Haryana Agriculture University, Haryana</td></tr>
					<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Prof. Kartar Singh Dhiman</td><td style={tdStyle}>SKA University, Haryana</td></tr>
					<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Thakur Sudesh Kumar Raunija</td><td style={tdStyle}>Sci/Engr-SF, ISRO, and Director, DHE & VBITR</td></tr>
				</tbody>
			</table>
			<h3 style={subSectionTitle}>ACADEMIC COMMITTEE</h3>
			<table style={tableStyle}>
				<thead>
					<tr>
						<th style={thStyle}>Title/Role</th>
						<th style={thStyle}>Name</th>
						<th style={thStyle}>Affiliation</th>
					</tr>
				</thead>
				<tbody>
					<tr><td style={tdStyle}>Chairperson</td><td style={tdStyle}>Dr. Ravi Prakash</td><td style={tdStyle}>Chaudhary Bansi Lal University, Haryana</td></tr>
					<tr><td style={tdStyle}>Vice-Chairperson</td><td style={tdStyle}>Prof. Brahmjit Singh</td><td style={tdStyle}>NIT Kurukshetra, Haryana</td></tr>
					<tr><td style={tdStyle}>Members</td><td style={tdStyle}>Prof. Bala Lakhendra</td><td style={tdStyle}>BHU Varanasi, U.P.</td></tr>
					<tr><td style={tdStyle}>Members</td><td style={tdStyle}>Prof. Sathans</td><td style={tdStyle}>NIT Kurukshetra, Haryana</td></tr>
					<tr><td style={tdStyle}>Members</td><td style={tdStyle}>Prof. Anish Sachdeva</td><td style={tdStyle}>NIT Jalandhar, Punjab</td></tr>
					<tr><td style={tdStyle}>Members</td><td style={tdStyle}>Dr. Rajeev Arya, Assistant Professor</td><td style={tdStyle}>NIT Patna, Bihar</td></tr>
				</tbody>
			</table>
			{/* Sections */}
			<h2 style={subSectionTitle}>Sections</h2>
				<div style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "24px",
					justifyContent: "center",
					width: "100%",
				}}>
				{/* Engineering Section */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>Engineering Section</h4>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={thStyle}>Role</th>
								<th style={thStyle}>Name</th>
							</tr>
						</thead>
						<tbody>
							<tr><td style={tdStyle}>President</td><td style={tdStyle}>Prof. Brahmjit Singh, NIT Kurukshetra, Haryana</td></tr>
							<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Vipin Sharma, Technical Consultant, HCL Technologies, Noida</td></tr>
							<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Mukesh Khandelwal, Delhi University</td></tr>
							<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Sonu Bala Garg, IKG Punjab Technical University, Jalandhar</td></tr>
							<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Vikash Kumar Garg, SLIET, Longowal</td></tr>
							<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Gaurav Sharma, IIT Delhi</td></tr>
						</tbody>
					</table>
				</div>
				{/* Management & International Relations */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>Management & International Relations</h4>
					<table style={tableStyle}><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Samriti Mahajan, Lingaya’s Vidyapeeth, Faridabad, Haryana</td></tr>
					</tbody></table>
				</div>
				{/* Social Sciences */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>Social Sciences</h4>
					<table style={tableStyle}><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Prof. S. P. Kaushik, Kurukshetra University, Haryana</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Atryee Saha, JNU, Delhi</td></tr>
					</tbody></table>
				</div>
				{/* Humanities */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>Humanities</h4>
					<table style={tableStyle}><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Kuldeep Mehandiratta, Kurukshetra University, Haryana</td></tr>
					</tbody></table>
				</div>
				{/* Business, Startup & Entrepreneurship */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>Business, Startup & Entrepreneurship</h4>
					<table style={tableStyle}><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Raghvendra Singh Yadav, Mangalmay Institute of Management, UP</td></tr>
					</tbody></table>
				</div>
				{/* Ed Tech and Technology */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>Ed Tech and Technology</h4>
					<table style={tableStyle}><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Sachin Sharma, Shri Madhav College of Education and Technology, Hapur, UP</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Manish Kumar, Zakir Hussain College, Delhi University</td></tr>
					</tbody></table>
				</div>
				{/* Gurukul Education */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>Gurukul Education</h4>
					<table style={tableStyle}><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Prof. Shubha Sharma, Vedanta PG Girls College, Ringus, Sikar, Rajasthan</td></tr>
					</tbody></table>
				</div>
				{/* Sports and Physical Education */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>Sports and Physical Education</h4>
					<table style={tableStyle}><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Jasbir Singh, DAV University Jalandhar, Punjab</td></tr>
					</tbody></table>
				</div>
				{/* Medicine */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>Medicine</h4>
					<table style={tableStyle}><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Naresh Bhargava, BPS Women University, Sonepat</td></tr>
					</tbody></table>
				</div>
				{/* Fundamental Sciences */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>Fundamental Sciences</h4>
					<table style={tableStyle}><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Prof. Anand, Kurukshetra University, Haryana</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Rajesh Agnihotri, UIET Kurukshetra University, Haryana</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Vipin Jain, CLBU, Bhiwani</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Pankaj, Centeral University of Himachal Pradesh.</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Kapil Sood, GDC Dhaliara, HP</td></tr>
					</tbody></table>
				</div>
				{/* Environment and Water Conservation */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>Environment and Water Conservation</h4>
					<table style={tableStyle}><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Vivek Kumar, Prof & Head, Centre for Rural Development and Technology, Indian Institute of Technology Delhi</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Updesh Verma, Manyavar Kanshiram Government Degree College, Ghaziabad, UP</td></tr>
					</tbody></table>
				</div>
				{/* Culture */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>Culture</h4>
					<table style={tableStyle}><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Prof. Sanjay Jha, LNMU, Darbhanga, Bihar</td></tr>
					</tbody></table>
				</div>
				{/* Languages */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>Languages</h4>
					<table style={tableStyle}><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Virender Pal, IIHS Kurukshetra University</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Ram Chandra, Kurukshetra University</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Sunaina Saini, Zakir Hussain College, Delhi University</td></tr>
					</tbody></table>
				</div>
				{/* Agriculture and Veterinary Sciences */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>Agriculture and Veterinary Sciences</h4>
					<table style={tableStyle}><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Prof. Neelesh Sharma, SKUAST Jammu, J&K</td></tr>
					</tbody></table>
				</div>
				{/* School Education */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>School Education</h4>
					<table style={tableStyle}><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Digvijay Singh, ITTR, Kurukshetra University</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Sandeep, SIATE, Palwal, Haryana</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Sumant Goyal, SIATE, Palwal, Haryana</td></tr>
					</tbody></table>
				</div>
				{/* Education for Disabled */}
					<div style={{
						flex: "1 1 370px",
						minWidth: "320px",
						maxWidth: "420px",
						background: "#f7f7fa",
						borderRadius: "16px",
						boxShadow: "0 4px 16px rgba(137,12,37,0.07)",
						padding: "22px 16px",
						marginBottom: "18px",
						transition: "transform 0.2s, box-shadow 0.2s",
						cursor: "pointer",
						border: "1px solid #e0e0e0",
						':hover': {
							transform: "scale(1.03)",
							boxShadow: "0 8px 32px rgba(137,12,37,0.15)",
						}
					}}>
					<h4 style={{color: "#890c25", marginBottom: "14px", fontSize: "1.15rem", fontWeight: "bold", letterSpacing: "0.5px"}}>Education for Disabled</h4>
					<table style={tableStyle}><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Jyoti Tiwari, Army Institute of Education, Greater NOIDA, U.P.</td></tr>
					</tbody></table>
				</div>
			</div>
		</div>
	);
}
