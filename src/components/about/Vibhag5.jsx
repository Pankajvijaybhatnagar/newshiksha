import React from "react";

const cardStyle = {
	background: "#fff",
	borderRadius: "20px",
	boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
	padding: "40px 24px",
	margin: "40px auto",
	maxWidth: "950px",
	width: "95vw",
	fontFamily: "'Segoe UI', 'Roboto', sans-serif",
};

const sectionTitle = {
	fontSize: "2.2rem",
	fontWeight: "bold",
	color: "#890c25",
	marginBottom: "18px",
	letterSpacing: "1.2px",
	textAlign: "center",
};

const subSectionTitle = {
	fontSize: "1.2rem",
	fontWeight: "bold",
	color: "#c2185b",
	margin: "24px 0 12px 0",
	letterSpacing: "0.5px",
	textAlign: "left",
};

const tableStyle = {
	width: "100%",
	borderCollapse: "collapse",
	marginBottom: "24px",
	fontSize: "1rem",
	background: "#fafafa",
	borderRadius: "10px",
	overflow: "hidden",
	border: "2px solid #890c25",
};

const thStyle = {
	background: "linear-gradient(90deg, #890c25 60%, #c2185b 100%)",
	color: "#fff",
	fontWeight: "bold",
	padding: "12px 10px",
	border: "1px solid #890c25",
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

const sections = [
	{
		title: "Anchoring",
		rows: [
			["Smt. Neha Sachdeva", "Gita Niketan Awasiya Vidyalay", "7015300835"],
		],
	},
	{
		title: "Hall Management",
		rows: [
			["Dr. Vikas Garg", "Assistant Professor, SLIET", "9988610629"],
			["Dr. Mohit Tyagi", "Associate Professor, PEC", "8826841129"],
		],
	},
	{
		title: "Registration",
		rows: [
			["Dr. Pooja Mahajan", "DHE", "9465262383"],
		],
	},
	{
		title: "Transport",
		rows: [
			["Dr. Jitesh Pandey", "DHE", "8360990494"],
		],
	},
	{
		title: "Accommodation",
		rows: [
			["Dr. Parveen Sharma", "Associate Professor, CU Jammu", "9988625485"],
			["Dr. Shiksha Sharma", "DHE", "9878890303"],
			["Shri Aman Kumar", "DHE", "79054 16059"],
		],
	},
	{
		title: "Food",
		rows: [
			["Shri Sanjay Chaudhary", "DHE", "9812154381"],
		],
	},
	{
		title: "Medical Services",
		rows: [
			["Dr. Ankit Goel", "DHE", "9466747047"],
		],
	},
	{
		title: "Photography",
		rows: [
			["Shri Praveen Chandel", "DHE", "8725050733"],
		],
	},
	{
		title: "Exhibition",
		rows: [
			["Shri Aman Shrivastav", "DHE", "7905416059"],
			["Shri Sanjay Soni", "DHE", "9355542751"],
			["Shri Vinay Kumar", "DHE", "82904 63378"],
		],
	},
	{
		title: "War Room",
		rows: [
			["Shri Chander Has Gupta", "DHE", "9417050631"],
			["Smt. Pratibha Gupta", "DHE", "9814738016"],
			["Shri Ramendra Singh", "DHE", "7903431900"],
			["Shushri Sonal Kandari", "DHE", "9816941951"],
			["Shri Deepak Kumar", "DHE", "70183 18078"],
		],
	},
];

export const Vibhag5 = () => {
	return (
		<div style={cardStyle}>
			<h1 style={sectionTitle}>Shiksha Mahakumbh Abhiyan</h1>
			<h2 style={subSectionTitle}>Department of Holistic Education</h2>
			<h3 style={subSectionTitle}>Vidya Bharti Institute of Training and Research Chandigarh</h3>
			<h3 style={subSectionTitle}>Prabandhan Vibhag</h3>
			{sections.map((section) => (
				<div key={section.title}>
					<h4 style={subSectionTitle}>{section.title}</h4>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={thStyle}>Name</th>
								<th style={thStyle}>Position</th>
								<th style={thStyle}>Contact</th>
							</tr>
						</thead>
						<tbody>
							{section.rows.map((row, idx) => (
								<tr key={row[0]} style={{background: idx % 2 === 0 ? "#f5f5fa" : "#fff"}}>
									<td style={tdStyle}>{row[0]}</td>
									<td style={tdStyle}>{row[1]}</td>
									<td style={tdStyle}>{row[2]}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			))}
		</div>
	);
}
