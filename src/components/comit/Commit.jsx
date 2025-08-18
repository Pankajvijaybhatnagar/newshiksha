import React from 'react';

const smk2024Committees = [
	{
		title: 'National Advisory Committee',
		members: [
			{ name: 'Prof. Nilofer Khan', designation: 'Vice-Chancellor, University of Kashmir' },
			{ name: 'Prof. Nazir Ah. Ganai', designation: 'Vice-Chancellor, SKUAST Srinagar' },
			{ name: 'Prof. A. Ravinder Nath', designation: 'Vice Chancellor, Central University, Kashmir' },
			{ name: 'Prof. Qayyum Hussain', designation: 'Vice Chancellor, Cluster University Kashmir' },
			{ name: 'Prof. Sanjeev Jain', designation: 'Vice-Chancellor, Central University, Jammu' },
			{ name: 'Prof. B.S. Sahay', designation: 'Director, IIM Jammu' },
			{ name: 'Dr. Manoj Singh Gaur', designation: 'Director, IIT Jammu' },
			{ name: 'Dr. Shakti Kumar Gupta', designation: 'Director, AIIMS Jammu' },
			{ name: 'Prof. Bechan Lal', designation: 'Vice-Chancellor, Cluster University Jammu' },
			{ name: 'Prof. Pragati Kumar', designation: 'Vice-Chancellor, SMVDU' },
			{ name: 'Prof. Akbar Masood', designation: 'Vice-Chancellor, BGSBU' },
			{ name: 'Dr. B.N. Tripathi', designation: 'Vice-Chancellor, SKUAST, Jammu' },
			{ name: 'Prof. Umesh Rai', designation: 'Vice-Chancellor, University of Jammu' },
			{ name: 'Lt. Gen. Dr. Anup Banerji', designation: 'Director, AIIMS Kashmir' },
			{ name: 'Prof. S. K. Mehta', designation: 'Vice-Chancellor, University of Ladakh' },
			{ name: 'Mr. A Rajarajan', designation: 'Director, Satish Dhawan Space Centre' },
			{ name: 'Prof. Shantanu Bhattacharya', designation: 'Director, CSIO' },
			{ name: 'Prof. Rajeev Ahuja', designation: 'Director, IIT Ropar' },
			{ name: 'Prof. Bhola Ram Gurjar', designation: 'Director, NITTTR Chandigarh' },
			{ name: 'Prof. R. P. Tiwari', designation: 'Vice-Chancellor, CU Punjab' },
			{ name: 'Dr. Kumar Gaurav', designation: 'Dy. Director, PGI' },
			{ name: 'Prof. Arvind', designation: 'Vice-Chancellor, Punjabi University' },
			{ name: 'Prof. Adarsh Pal Vij', designation: 'Chairman, Punjab Pollution Control Board' },
			{ name: 'Prof. B. R. Kamboj', designation: 'Vice-Chancellor, HAU' },
			{ name: 'Prof. S. K. Mehta', designation: 'Vice-Chancellor, UOL' },
			{ name: 'Prof. C. C. Tripathi', designation: 'Director, NITTTR Bhopal' },
			{ name: 'Prof. Anupam Shukla', designation: 'Director, NIT Surat' },
			{ name: 'Prof. K. P. Singh', designation: 'Vice-Chancellor, MJP Rohilkhand University' },
			{ name: 'Dr. Madhu Chitkara', designation: 'Vice-Chancellor, Chitkara University' },
			{ name: 'Mr. Ajay Gupta', designation: 'CEO, SATYA Group' },
		],
	},
	{
		title: 'Local Advisory Committee',
		members: [
			{ name: 'Mr. Vijay Nadda', designation: 'Vidya Bharti (NZ)' },
			{ name: 'Mr. Balkishan', designation: 'Vidya Bharti (NZ)' },
			{ name: 'Mr. Desh Raj', designation: 'Vidya Bharti (NZ)' },
			{ name: 'Mr. Parveen Saini, IAS (Retd.)', designation: 'Vidya Bharti (NZ)' },
			{ name: 'Mr. Manoj Singhal', designation: 'DHE' },
			{ name: 'Dr. Amit Kansal', designation: 'NHPC' },
			{ name: 'Er. Ved Bhushan Sharma', designation: 'BSS, J&K' },
			{ name: 'Er. Hari Bhushan', designation: 'BSS, J&K' },
			{ name: 'Dr. Manoj', designation: 'BSS, J&K' },
			{ name: 'Dr. Amit Kumar', designation: 'SKUAST, Kashmir' },
			{ name: 'Prof. M. K. Sharma', designation: 'SKUAST, Kashmir' },
			{ name: 'Prof. Aijaz Ahmad', designation: 'University of Kashmir' },
			{ name: 'Prof. Kartar Chand Sharma', designation: 'Kashmir University' },
			{ name: 'Dr. Omchand Sharma', designation: 'CITH Srinagar' },
			{ name: 'Dr. Yogesh Pandey', designation: 'SKAUST Kashmir' },
			{ name: 'Dr. Sunil Kumar', designation: 'SKAUST Kashmir' },
			{ name: 'Dr. Manoj Kumar', designation: 'CITH Srinagar' },
			{ name: 'Maj. Gen. Suresh Kumar Khajuria (Retd.)', designation: 'SES, Punjab' },
		],
	},
	{
		title: 'Organizing Committee',
		members: [
			{ name: 'Dr. Yashwant Mehta', designation: 'NIT Srinagar' },
			{ name: 'Dr. H. S. Pali', designation: 'NIT Srinagar' },
			{ name: 'Dr. Jitendra Gurjar', designation: 'NIT Srinagar' },
			{ name: 'Dr. R. P. Shukla', designation: 'NIT Srinagar' },
			{ name: 'Dr. Pankaj Kumar', designation: 'CU, Himachal Pradesh' },
			{ name: 'Mr. Saurabh Sharma', designation: 'IKGPTU, Kapurthala' },
			{ name: 'Adv. Poonam Thakur', designation: 'DHE, Mohali' },
			{ name: 'Dr. Pratibha Gupta', designation: 'DHE, Mohali' },
			{ name: 'Col. K. K. Kakkar', designation: 'DHE, Mohali' },
			{ name: 'Dr. Gurmeet Singh', designation: 'University of Kashmir' },
			{ name: 'Dr. Praveen Sharma', designation: 'University of Kashmir' },
			{ name: 'Dr. Bhawani Singh', designation: 'University of Jammu' },
			{ name: 'Mr. Mandeep Tiwari', designation: 'DHE, Mohali' },
			{ name: 'Dr. Ramjit', designation: 'CU, Kashmir' },
		],
	},
	{
		title: 'Conference Patron',
		members: [
			{ name: 'Prof. Som Nath Sachdeva', designation: 'VC, Kurukshetra University' },
		],
	},
	{
		title: 'Conference Director',
		members: [
			{ name: 'Dr. Thakur SKR', designation: 'Sci/Engr-SF, ISRO and Director, DHE & VBITR' },
		],
	},
	{
		title: 'Conference Secretaries',
		members: [
			{ name: 'Prof. Sunil Dhingra', designation: 'Director, UIET, KU' },
			{ name: 'Dr. Jatinder Garg', designation: 'BHSBIET, Lehragaga' },
			{ name: 'Dr. Ravi Prakash', designation: 'CBLU, Bhiwani' },
		],
	},
	{
		title: 'Conference Joint Secretaries',
		members: [
			{ name: 'Mr. Mandeep Tiwari', designation: 'Business Advisior, DHE' },
			{ name: 'Dr. Krishna Pandey', designation: 'UIET Kurukshetra' },
		],
	},
	{
		title: 'Conference Conveners',
		members: [
			{ name: 'Dr. Shamsher Singh', designation: 'AB Collage Pathankot' },
			{ name: 'Dr. Vipin Kumar Jain', designation: 'CBLU, Bhiwini' },
		],
	},
	{
		title: 'Advisory Committee',
		members: [
			{ name: 'Mr. Vijay Nadda', designation: 'Org. Secretary, Vidya Bharti (NZ)' },
			{ name: 'Mr. Balkishan', designation: 'Jt. Org. Secretary, Vidya Bharti (NZ)' },
			{ name: 'Dr. Sanjeev Sharma', designation: 'Registrar, Kurukshetra University' },
			{ name: 'Prof.Deepti Dharmani', designation: 'VC,CBLU, Bhiwani' },
			{ name: 'Dr. Ashok Pal', designation: 'President, Vidya Bharti (NZ)' },
			{ name: 'Mr. Surendar Attri', designation: 'Vice President, VidyaBharti(NZ)' },
			{ name: 'Mr. Praveen Saini', designation: 'Vice President, VidyaBharti(NZ)' },
			{ name: 'Mr. Desh Raj', designation: 'Gen. Secretary, Vidya Bharti (NZ)' },
			{ name: 'Dr. Devprasad Bhardwaj', designation: 'President, Vidya BhartiHaryana' },
			{ name: 'Dr. Rishiraj Vashishtha', designation: 'President, H.S.S. Haryana' },
			{ name: 'Dr. Avadesh Pandey', designation: 'Gen. Secretary, H.S.S.Haryana' },
			{ name: 'Mrs. Pratibha Gupta', designation: 'President, DHE' },
			{ name: 'Mr. Chandra Has Gupta', designation: 'Treasurer, DHE' },
			{ name: 'Prof. Sathans', designation: 'NIT Kurukshetra' },
			{ name: 'Prof. Dinesh Kumar', designation: 'CBLU Bhiwani' },
			{ name: 'Prof. Y.K. Vijay', designation: 'IIS University , Jaipur' },
			{ name: 'Dr. Manoj Kumar Teotia', designation: 'CRRID, Chandigarh' },
			{ name: 'Dr. Pooja D.', designation: 'CSIR-CSIO, Chandigarh' },
			{ name: 'Dr. Praveen Kumar', designation: 'IACS, Kolkata' },
			{ name: 'Dr. Jitesh Kumar Pandey', designation: 'PMIDC, DLG, Punjab' },
			{ name: 'Mr. Pankaj Kumar', designation: 'HCS, CEO, KBD Kurukshetra' },
			{ name: 'Prof. Kartar Singh Dhiman', designation: 'VC, SKAU Kurukshetra' },
			{ name: 'Mr. Sanjay Chowdhary', designation: 'Vidya Bharti Hayana' },
			{ name: 'Prof. Anish Sachdeva', designation: 'NIT Jalandhar' },
		],
	},
	{
		title: 'Organizing Committee',
		members: [
			{ name: 'Dr. Pankaj Kumar', designation: 'CU, Himachal Pradesh' },
			{ name: 'Prof. Srikanta Patnaik', designation: 'Director, IIMT,Bhubaneswar' },
			{ name: 'Prof. Bala Lakhendra', designation: 'BHU, Varanasi, UP' },
			{ name: 'Prof. A. C. Jha', designation: 'Bihar' },
			{ name: 'Dr. Ramakant Sharma', designation: 'Bihar' },
			{ name: 'Dr. Soumendra Pattnaik', designation: 'SOA , Bhubaneswar' },
			{ name: 'Dr. Sachin Sharma', designation: 'Meerut, UP' },
			{ name: 'Dr. Mohit Tyagi', designation: 'Academic Advisor, DHE' },
			{ name: 'Dr. Nitya Sharma', designation: 'IKGPTU, Jalandhar' },
			{ name: 'Dr. Neelam', designation: 'LPU, Jalandhar' },
			{ name: 'Dr. Saurabh Sharma', designation: 'IKGPTU, Jalandhar' },
			{ name: 'Dr. Gaurav Saini', designation: 'NIT Kurukshetra' },
			{ name: 'Dr. Praveen Sharma', designation: 'CU Jammu' },
			{ name: 'Dr. Ankit Goel', designation: 'LLRUVAS, Hisar, Haryana' },
			{ name: 'Dr. Y. Dwivedi', designation: 'NIT Kurukshetra' },
			{ name: 'Dr. Vijay Kumar Sharma', designation: 'NIT Srinagar' },
			{ name: 'Dr. Vikash Garg', designation: 'S.L.I.E.T. Longowal' },
			{ name: 'Dr. Gaurav Sharma', designation: 'IIT Delhi' },
			{ name: 'Dr. Ashwini Rana', designation: 'NIT Hamirpur' },
			{ name: 'Dr. Surjeet Chandel', designation: 'Bilaspur Himachal' },
			{ name: 'Dr. Pooja Mahajan', designation: 'Arya Mahila College Dinanagar' },
			{ name: 'Dr. Atrayee Saha', designation: 'JNU, Delhi' },
			{ name: 'Dr. Ankit Tyagi', designation: 'IIT Jammu' },
			{ name: 'Dr. Kuldeep', designation: 'NIT Kurukshetra' },
			{ name: 'Dr. Saurabh Sharma', designation: 'IKGPTU, Jalandhar' },
			{ name: 'Dr. Gaurav Saini', designation: 'NIT Kurukshetra' },
			{ name: 'Dr. Shiksha Sharma', designation: 'Academic Advisor, DHE' },
			{ name: 'Dr. Vikram Chopra', designation: 'DSEU Delhi' },
			{ name: 'Dr. Surjeet Chandel', designation: 'Himachal Pradesh' },
			{ name: 'Dr. Vikram Singh', designation: 'NIT Kurukshetra' },
		],
	},
];

const cardGridStyle = {
	display: 'flex',
	flexWrap: 'wrap',
	gap: '32px',
	justifyContent: 'center',
	margin: '40px auto',
	maxWidth: '1200px',
};

const cardStyle = {
	background: 'linear-gradient(120deg, #fff 80%, #ffe3ec 100%)',
	borderRadius: '18px',
	boxShadow: '0 8px 32px rgba(137,12,37,0.13)',
	padding: '28px 22px',
	flex: '1 1 480px',
	minWidth: '340px',
	maxWidth: '540px',
	marginBottom: '0',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
};

const cardTitleStyle = {
	color: '#890c25',
	fontWeight: 'bold',
	fontSize: '1.18rem',
	marginBottom: '16px',
	letterSpacing: '0.5px',
	textAlign: 'left',
};

const tableStyle = {
	width: '100%',
	borderCollapse: 'collapse',
	marginBottom: '0',
};

const thStyle = {
	background: '#ffe3ec',
	color: '#890c25',
	fontWeight: 'bold',
	padding: '8px',
	borderBottom: '2px solid #e94e77',
	fontSize: '1rem',
};

const tdStyle = {
	padding: '8px',
	borderBottom: '1px solid #f3c6d3',
	fontSize: '0.98rem',
	color: '#444',
};

export const Commit = () => (
	<div>
		<h1 style={{ color: '#890c25', fontWeight: 'bold', fontSize: '2rem', textAlign: 'center', margin: '32px 0 16px 0' }}>
			Shiksha Maha Kumbh 2024 Committees
		</h1>
		<div style={cardGridStyle}>
			{smk2024Committees.map((section, idx) => (
				<div key={idx} style={cardStyle}>
					<h2 style={cardTitleStyle}>{section.title}</h2>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={thStyle}>Name</th>
								<th style={thStyle}>Designation</th>
							</tr>
						</thead>
						<tbody>
							{section.members.map((member, i) => (
								<tr key={i}>
									<td style={tdStyle}>{member.name}</td>
									<td style={tdStyle}>{member.designation}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			))}
		</div>
	</div>
);

