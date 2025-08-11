import React from 'react';
import { Link } from 'react-router-dom';
// Import images
import img1 from '../../assets/img/press/p1.webp';
import img2 from '../../assets/img/press/p2.webp';
import img3 from '../../assets/img/press/p3.webp';
import img4 from '../../assets/img/press/p4.webp';
import img5 from '../../assets/img/press/p5.webp';
import img6 from '../../assets/img/press/p6.webp';
const cardsData = [
   {
    title: 'KNS Kashmir',
    image: img1,
    id:1,   
    description: 'LG Manoj Sinha addresses National Conference on Role of Academic-driven Startups in Developing Economy of J&K (RASE-2024)',
    url:'https://www.knskashmir.com/lg-manoj-sinha-addresses-national-conference-on--role-of-academic-driven-startups-in-developing-economy-of-jandk-(rase-2024)--187410'
  },
  {
    title: 'Kashmir Reader',
    image: img2,
    id:2,
    description: 'Focus on Problem First, Not Product First, LG to Startups, Entrepreneurs',
    url:'https://kashmirreader.com/2024/06/30/addresses-national-rase-2024-focuson-problem-first-not-product-first-lg-to-startups-entrepreneurs/'
  },
  {
    title: 'Daily Excelsior',
    image: img3,
    id:3,
    description: 'J&K has got over Rs 1.10 lakh Cr industrial proposals: LG',
    url:'https://www.dailyexcelsior.com/jk-has-got-over-rs-1-10-lakh-cr-industrial-proposalslg/',
  },
  {
    title: 'One India',
    image: img4,
    id:4,
    description: 'LG Manoj Sinha Spearheads J&Ks Startup Revolution, Bridges Academia and Industry at RASE 2024',
    url:'https://www.oneindia.com/india/l-g-manoj-sinha-spearheads-j-ks-startup-revolution-bridges-academia-and-industry-at-rase-2024-3865757.html'
  },
  {
    title: 'Kashmir Reader',
    image: img5,
    id:5,
    description: 'Startups: A Powerful Instrument to Bridge the Gap Between Universities and Industries, says LG at NIT Srinagar',
    url:'https://kashmirreader.com/2024/06/30/startupspowerful-instrument-to-bridge-gap-between-universities-industries-says-lg-at-nit-srinagar/'
  },
  {
    title: 'One India Hindi',
    image: img6,
    id:6,
    designation: ' Director, ICAR Research Complex for Eastern Region',
    description: 'J&K LG Sinha Inaugurates Academic-driven Startups RASE 2024 National Conference',
    url:'https://hindi.oneindia.com/news/jammu-and-kashmir/j-k-lg-sinha-inaugurates-academic-driven-startups-raise-2024-national-conference-1041401.html',
  },
 
 
];

const cardsData2 = [
    {
    title: 'The Statesman',
    image: img1,
    id:1,   
    description: 'StartUp Movement has Picked Up in India in a Big Way: Dr. Jitendra Singh',
    url:"https://m.dailyhunt.in/news/india/english/the+statesman-epaper-statesman/startup+movement+has+picked+up+in+india+in+a+big+way+dr+jitendra+singh-newsid-n620072666?sm=Y"
  },
  {
    title: 'Rising Kashmir',
    image: img2,
    id:2,
    description: 'Change of Mindset Key to Startups in J&K: Dr. Jitendra Singh',
    url:"https://risingkashmir.com/change-of-mindset-key-to-startups-in-jk-dr-jitendrasingh/"
  },
  {
    title: 'Greater Kashmir',
    image: img3,
    id:3,
    description: 'Change of Mindset, Exploration of Regional Resources are Key to Startups in J&K: Jitendra Singh',
    url:"https://www.google.com/url?q=https://m.greaterkashmir.com/article/change-of-mindset-exploration-of-regional-resources-are-key-to-startups-in-jk-jitendra-singh/310248/amp"
  },
  {
    title: 'Greater Kashmir',
    image: img4,
    id:4,
    description: 'Exploration of Regional Resources Key to Build Startup Ecosystem in J&K: Dr. Jitendra Singh',
    url:"https://bhaskarlive.in/exploration-of-regional-resources-key-to-build-startup-ecosystem-in-jk-dr-jitendra-singh/"
  },
  {
    title: 'Daily Excelsior.',
    image: img5,
    id:5,
    description: 'J&Ks Regional Startup Resources Still Not Fully Explored: Dr. Jitendra',
    url:"https://www.dailyexcelsior.com/jks-regional-startup-resources-still-not-fully-explored-dr-jitendra/"
  },
  {
    title: 'Brighter Kashmir',
    image: img6,
    id:6,
    description: 'Youngsters Should Invest in Startups: Jitendra',
    url:"https://brighterkashmir.com/youngsters-should-invest-in-startups-jitendra"
  },
   {
    title: 'State Times',
    image: img6,
    id:6,
    description: 'Mindset Change, Exploration of Regional Resources Key to J&K Startups: Dr. Jitendra',
    url:"https://www.google.com/url?q=https://statetimes.in/amp/mindset-change-exploration-of-regional-resources-key-to-jk-startups-dr-jitendra/"
  },
   {
    title: 'UNI India',
    image: img6,
    id:6,
    description: 'Change of Mindset, Regional Resources Key to Startups in J&K: Minister',
    url:"https://www.uniindia.com/news/north/change-of-mindset-regional-resources-key-to-startups-in-j-k-minister/3230898.html"
  },
 
]

export const Digital = () => {
  return (
    <>
      <div className="container" >
        <h2 className='text-center mt-3'>RASE 2024 3rd Edition Digital Media Day - 1</h2>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '70px' }}>
        {cardsData.map((card, index) => (
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
              
            }}>
              <span style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '1.9rem',
                textAlign: 'center',
                padding: '0 10px',
              }}>{card.title}</span>
            </div>
            <div style={{ padding: '15px' }}>
              {/* <h5 style={{ marginBottom: '5px' }}>{card.title}</h5> */}
              
              <p style={{ marginTop: '10px', color: '#666', fontSize: '14px', minHeight:"150px" }}>{card.description}</p>
               <a href={card.url}  target="_blank" rel="noopener noreferrer"><div className="text-center btn btn-danger" style={{width:"100%"}}>Read more</div></a>
            </div>
          </div>
        ))}
        
      </div>

       <div className="container" >
        <h2 className='text-center mt-3'>RASE 2024 3rd Edition Digital Media Day - 2</h2>
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
