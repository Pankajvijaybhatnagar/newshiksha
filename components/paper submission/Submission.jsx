const Submission = () => {
    return (
        <>
           <div className="container mt-5 bg-light p-4 text-center">
        <h3 style={{ color: "#890c25" }}></h3>
        {/* <div><img src={note.image} alt='' style={{ width: "600px" }} /></div> */}
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>Paper Guidelines </h3>
          <p className="text-start mx-5">Click on the below button to view the Paper Guidelines</p>
          <a href="/Guideline.docx"><button className="p-2" style={{border:"2px solid red",borderRadius:"10px", color:"black"}}>Click here</button></a>
        </div>
        <div className="m-3 mt-5 p-1" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>Paper Template and Submission link</h3>
            <table>
                <tr style={{border:"1px solid black"}}>
                    <th>Papers</th>
                    <th>Template</th>
                    <th>Submission Link</th>
                    
                </tr>
                <tr style={{border:"1px solid black"}}>
                    <td>Abstract</td>
                    <td><a href="#" style={{color:"#890c25"}}>Click here to submit Abstract</a></td>
                    <td><a href="#" style={{color:"#890c25"}}>Click here to view the Abstract Template</a></td>
                    
                </tr>
                <tr style={{border:"1px solid black"}}>
                    <td>Full length Paper</td>
                    <td><a href="#" style={{color:"#890c25"}}>	Click here to submit full Length paper</a></td>
                    <td><a href="#" style={{color:"#890c25"}}>		Click here to view the full length paper guideline</a></td>
                </tr>
            </table>
          
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>Sections</h3>

         
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>Paper Registration</h3>
          <ul style={{ textAlign: "justify" }}>

            <li>An effort will be made to publish the selected papers in Scopus Indexed/UGC care listed journals after apeer review process by Conference Editorial Board and concerned Journal Editorial Board. The papers which are not selected in the Journals of above categories, will be considered for emerging ‘Viksit Bharat’ & ‘Viksit India’ journals or Book Chapter with ISBN number after a peer review process. All the accepted abstracts (Who paid registration fee) will be published in Conference Proceeding with ISBN number.
For more information about Viksit Bharat & Viksit India journals, visit <a href="https://pub.dhe.org.in/" target="_blank">pub.dhe.org.in .</a></li>

          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>For Paper Submission</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>Click on the below button to Submit Paper</li>
            
          </ul>
              <a href="/students-registration" target="_blank"> <button className="p-2" style={{border:"2px solid red",borderRadius:"10px", color:"black"}}>Click here</button></a> 

        </div>
  </div>
  </>
  );
};

export default Submission;

