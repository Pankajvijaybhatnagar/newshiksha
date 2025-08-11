import React from "react";

const cardStyle = {
	background: "#fff",
	borderRadius: "20px",
	boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
	padding: "40px 24px",
	margin: "40px auto",
	maxWidth: "600px",
	width: "95vw",
	fontFamily: "'Segoe UI', 'Roboto', sans-serif",
};

const sectionTitle = {
	fontSize: "2rem",
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
	margin: "18px 0 12px 0",
	letterSpacing: "0.5px",
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

export const Vibhag2 = () => {
	return (
		<div style={cardStyle}>
			<h1 style={sectionTitle}>Shiksha Mahakumbh Abhiyan</h1>
			<h2 style={subSectionTitle}>Department of Holistic Education</h2>
			<h3 style={subSectionTitle}>Vidya Bharti Institute of Training and Research Chandigarh</h3>
			<h3 style={subSectionTitle}>Vitt Vibhag</h3>
			<table style={tableStyle}>
				<thead>
					<tr>
						<th style={thStyle}>Name</th>
						<th style={thStyle}>Position</th>
						<th style={thStyle}>Contact</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style={tdStyle}>Shri Mandeep Tiwari</td>
						<td style={tdStyle}>Entrepreneur, Jalandhar</td>
						<td style={tdStyle}>9814978666</td>
					</tr>
					<tr>
						<td style={tdStyle}>Dr. Jatinder Garg</td>
						<td style={tdStyle}>Associate Professor, Government College, Sangrur</td>
						<td style={tdStyle}>9501956000</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
