import React from "react";

const tableStyle = {
	width: "100%",
	borderCollapse: "collapse",
	margin: "24px 0",
	background: "#fff",
	boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
	borderRadius: "12px",
	overflow: "hidden"
};
const thStyle = {
	background: "#890c25",
	color: "#fff",
	padding: "12px",
	fontWeight: 600,
	border: "1px solid #e2e2e2"
};
const tdStyle = {
	padding: "10px",
	border: "1px solid #e2e2e2",
	fontSize: "16px",
	background: "#f9f7fa"
};
const sectionTitle = {
	color: "#890c25",
	fontWeight: 700,
	fontSize: "1.3rem",
	margin: "32px 0 12px 0",
	letterSpacing: 1
};

export const AcademicCouncil = () => {
	return (
		<div style={{maxWidth: 1100, margin: "0 auto", padding: "32px 16px"}}>
			<h1 style={{textAlign: "center", color: "#890c25", fontWeight: 800, marginBottom: 24}}>Shiksha Mahakumbh Abhiyan</h1>
			<h2 style={{textAlign: "center", color: "#333", fontWeight: 600, marginBottom: 8}}>Department of Holistic Education</h2>
			<h3 style={{textAlign: "center", color: "#333", fontWeight: 500, marginBottom: 24}}>Vidya Bharti Institute of Training and Research Chandigarh</h3>
			<h2 style={sectionTitle}>ACADEMIC COUNCIL</h2>
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

			<h2 style={sectionTitle}>ADVISORY COMMITTEE</h2>
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

			<h2 style={sectionTitle}>ACADEMIC COMMITTEE</h2>
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
					<tr><td style={tdStyle}>Members</td><td style={tdStyle}>Prof. Anish Sachdeva</td><td style={tdStyle}>NIT Jalandhar, Punjab</td></tr>
					<tr><td style={tdStyle}>Members</td><td style={tdStyle}>Dr. Rajeev Arya, Assistant Professor</td><td style={tdStyle}>NIT Patna, Bihar</td></tr>
				</tbody>
			</table>

			{/* Sectioned Committees */}
			<h2 style={sectionTitle}>SECTIONS</h2>
			<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px"}}>
				{/* Engineering Section */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>Engineering Section</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Prof. Brahmjit Singh, NIT Kurukshetra, Haryana</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Vipin Sharma, Technical Consultant, HCL Technologies, Noida</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Mukesh Khandelwal, Delhi University</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Sonu Bala Garg, IKG Punjab Technical University, Jalandhar</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Vikash Kumar Garg, SLIET, Longowal</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Gaurav Sharma, IIT Delhi</td></tr>
					</tbody></table>
				</div>
				{/* Management & International Relations */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>Management & International Relations</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Samriti Mahajan, Lingaya’s Vidyapeeth, Faridabad, Haryana</td></tr>
					</tbody></table>
				</div>
				{/* Social Sciences */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>Social Sciences</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Prof. S. P. Kaushik, Kurukshetra University, Haryana</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Atryee Saha, JNU, Delhi</td></tr>
					</tbody></table>
				</div>
				{/* Humanities */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>Humanities</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Kuldeep Mehandiratta, Kurukshetra University, Haryana</td></tr>
					</tbody></table>
				</div>
				{/* Business, Startup & Entrepreneurship */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>Business, Startup & Entrepreneurship</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Raghvendra Singh Yadav, Mangalmay Institute of Management, UP</td></tr>
					</tbody></table>
				</div>
				{/* Ed Tech and Technology */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>Ed Tech and Technology</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Sachin Sharma, Shri Madhav College of Education and Technology, Hapur, UP</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Manish Kumar, Zakir Hussain College, Delhi University</td></tr>
					</tbody></table>
				</div>
				{/* Gurukul Education */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>Gurukul Education</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Prof. Shubha Sharma, Vedanta PG Girls College, Ringus, Sikar, Rajasthan</td></tr>
					</tbody></table>
				</div>
				{/* Sports and Physical Education */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>Sports and Physical Education</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Jasbir Singh, DAV University Jalandhar, Punjab</td></tr>
					</tbody></table>
				</div>
				{/* Medicine */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>Medicine</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Naresh Bhargava, BPS Women University, Sonepat</td></tr>
					</tbody></table>
				</div>
				{/* Fundamental Sciences */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>Fundamental Sciences</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Prof. Anand, Kurukshetra University, Haryana</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Rajesh Agnihotri, UIET Kurukshetra University, Haryana</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Vipin Jain, CLBU, Bhiwani</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Pankaj, Centeral University of Himachal Pradesh.</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Kapil Sood, GDC Dhaliara, HP</td></tr>
					</tbody></table>
				</div>
				{/* Environment and Water Conservation */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>Environment and Water Conservation</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Vivek Kumar, Prof & Head, Centre for Rural Development and Technology, Indian Institute of Technology Delhi</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Updesh Verma, Manyavar Kanshiram Government Degree College, Ghaziabad, UP</td></tr>
					</tbody></table>
				</div>
				{/* Culture */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>Culture</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Prof. Sanjay Jha, LNMU, Darbhanga, Bihar</td></tr>
					</tbody></table>
				</div>
				{/* Languages */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>Languages</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Virender Pal, IIHS Kurukshetra University</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Ram Chandra, Kurukshetra University</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Sunaina Saini, Zakir Hussain College, Delhi University</td></tr>
					</tbody></table>
				</div>
				{/* Agriculture and Veterinary Sciences */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>Agriculture and Veterinary Sciences</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Prof. Neelesh Sharma, SKUAST Jammu, J&K</td></tr>
					</tbody></table>
				</div>
				{/* School Education */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>School Education</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Digvijay Singh, ITTR, Kurukshetra University</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Sandeep, SIATE, Palwal, Haryana</td></tr>
						<tr><td style={tdStyle}>Member</td><td style={tdStyle}>Dr. Sumant Goyal, SIATE, Palwal, Haryana</td></tr>
					</tbody></table>
				</div>
				{/* Education for Disabled */}
				<div>
					<h3 style={{color: "#890c25", fontWeight: 600}}>Education for Disabled</h3>
					<table style={tableStyle}><thead><tr><th style={thStyle}>Role</th><th style={thStyle}>Name</th></tr></thead><tbody>
						<tr><td style={tdStyle}>President</td><td style={tdStyle}>Dr. Jyoti Tiwari, Army Institute of Education, Greater NOIDA, U.P.</td></tr>
					</tbody></table>
				</div>
			</div>
		</div>
	);
}
