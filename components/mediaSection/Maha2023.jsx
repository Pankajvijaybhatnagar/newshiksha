import React from 'react';
import { Link } from 'react-router-dom';
// Import images


const cardsData2 = [
    {
    title: 'शिक्षा महाकुंभ (RASE 2023)',
    id:1,   
    description: 'Kanhaiya Mittal Message to It and Students',
    url:"https://www.youtube.com/watch?v=sO8r04Y7-Q4"
  },
  {
    title: 'शिक्षा महाकुंभ (RASE 2023)',
    id:2,
    description: 'Interview with Shiksha Mahakumbh Founder',
    url:"https://www.youtube.com/watch?v=7Kog32TfBIY"
  },
  {
    title: 'Dainik Savera',
    id:3,
    description: 'जालंधर मे पहली बार होने जा रहा है शिक्षा का महाकुम्भ',
    url:"https://www.facebook.com/dainiksavera/videos/708137144446988/"
  },
  {
    title: 'Punjab Kesari',
    id:4,
    description: 'जालंधर में होने वाला शिक्षा का महाकुंभ रचेगा इतिहास, जानें क्या होगा खास?',
    url:"https://www.facebook.com/Pkesarionline/videos/970244943975597/"
  },
  {
    title: 'Haryana Bulletin News',
    id:5,
    description: 'शिक्षा महाकुंभ में होगा शिक्षा के व्यवसायीकरण को लेकर मंथन',
    url:"https://www.facebook.com/haryanabulletinnews/videos/927517765138242/"
  },
  {
    title: 'Real Flavours',
    id:6,
    description: 'Mahakumbh of Education will be held on June 9, 10, 11 at Jalandhar to discuss the curriculum of the new education policy',
    url:"https://www.facebook.com/realflavours/videos/110585138717672/?extid=WA-UNK-UNK-UNK-AN_GK0T-GK1C&mibextid=5Ufylb&ref=sharing"
  },
  
 
]

export const Maha2023 = () => {
  return (
    <>

       <div className="container" >
        <h2 className='text-center mt-3'>RASE 2023 2nd Edition Digital Media</h2>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '70px' }}>
        {cardsData2.map((card, index) => (
          <div
            key={index}
            style={{
              width: '350px',
              height: '500px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#f9f9f9',
              overflow: 'hidden',
            }}
          >
            <div style={{
              width: '100%',
              height: '250px',
              backgroundColor: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
              fontSize: '1.9rem',
            }}>
              <span style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                textAlign: 'center',
                padding: '0 10px',
                fontSize: '1.9rem',
                
              }}>{card.title}</span>
            </div>
            <div style={{ padding: '15px' }}>
              {/* <h5 style={{ marginBottom: '5px' }}>{card.title}</h5> */}
              
              <p style={{ marginTop: '10px', color: '#666', fontSize: '14px', minHeight:"150px" }}>{card.description}</p>
               <a href={`/press-detail/${card.id}`}  target="_blank" ><div className="text-center btn btn-danger" style={{width:"100%"}}>Read more</div></a>
            </div>
          </div>
        ))}
        
      </div>
    </>
   
  );
};
