import React from "react";

const cardStyle = {
	background: "#fff",
	borderRadius: "20px",
	boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
	padding: "40px 24px",
	margin: "40px auto",
	maxWidth: "700px",
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

export const SamparkVibhag = () => {
	// Helper to alternate row colors
	const getRowStyle = (index) => ({
		background: index % 2 === 0 ? "#f5f5fa" : "#fff"
	});

	const rows = [
		["Dr. Manjo Teotia", "Assistant Professor, ICSSR-CRRID Chandigarh", "8283825534"],
		["Dr. Nitya Sharma", "PTU Jalandhar", "9814733309"],
		["Dr. Neelam Sharma", "LPU Jalandhar", "6239612140"],
		["Dr. Gaurav Kumar", "IIT Delhi", "9023925400"],
		["Dr. Rajneesh Talwar", "Chitkara University, DHE", "9815779477"],
	];

	return (
		<div style={cardStyle}>
			<h1 style={sectionTitle}>Shiksha Mahakumbh Abhiyan</h1>
			<h2 style={subSectionTitle}>Department of Holistic Education</h2>
			<h3 style={subSectionTitle}>Vidya Bharti Institute of Training and Research Chandigarh</h3>
			<h3 style={subSectionTitle}>Sampark Vibhag</h3>
			<table style={tableStyle}>
				<thead>
					<tr>
						<th style={thStyle}>Name</th>
						<th style={thStyle}>Position</th>
						<th style={thStyle}>Contact</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row, idx) => (
						<tr key={row[0]} style={getRowStyle(idx)}>
							<td style={tdStyle}>{row[0]}</td>
							<td style={tdStyle}>{row[1]}</td>
							<td style={tdStyle}>{row[2]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
