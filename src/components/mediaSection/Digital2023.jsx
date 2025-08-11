import React from 'react';
import { Link } from 'react-router-dom';
// Import images


const cardsData2 = [
    {
    title: 'Babushahi',
    id:1,   
    description: 'Haryana Governor Dattatraya inaugurates Shiksha Kumbh at NIT Kurukshetra',
    url:"https://www.babushahi.com/full-news.php?id=176260&headline=Haryana-Governor-Dattatraya-inaugurates-Shiksha-Kumbh-organised-at-NIT-Kurukshetra"
  },
  {
    title: 'Punjab Newsline',
    id:2,
    description: 'Governor promises Shiksha Kumbh will symbolize educational innovation and empowerment',
    url:"https://www.punjabnewsline.com/news/governor-promises-that-shiksha-kumbh-will-become-a-symbol-of-educational-innovation-cooperation-and-empowerment-70308"
  },
  {
    title: 'Babushahi (Hindi)',
    id:3,
    description: 'Haryana Governor Dattatraya inaugurates Shiksha Kumbh',
    url:"https://www-babushahi-com.translate.goog/full-news.php?id=176260&_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc"
  },
  {
    title: 'India News Calling',
    id:4,
    description: 'Shiksha Kumbh highlights educational collaboration and innovation',
    url:"https://www.indianewscalling.com/"
  },
  {
    title: 'Amar Ujala',
    id:5,
    description: 'New Education Policy’s impact on startup creation highlighted by Governor',
    url:"https://www.amarujala.com/amp/haryana/kurukshetra/new-education-policy-is-a-game-changer-for-creating-startups-governor-kurukshetra-news-c-45-1-kur1001-10590-2023-12-21"
  },
  {
    title: 'City Darpan',
    id:6,
    description: 'Governor emphasizes the role of Shiksha Kumbh in educational innovation',
    url:"https://www.citydarpan.com/news/11935"
  },
   {
    title: 'The Print',
    id:6,
    description: 'Haryana Governor launches Shiksha Kumbh initiative',
    url:"https://hindi.theprint.in/india/haryana-governor-launches-shiksha-kumbh/642706/?amp"
  },
   {
    title: 'The Week',
    id:6,
    description: 'Governor Dattatraya inaugurates Shiksha Kumbh',
    url:"https://www.theweek.in/wire-updates/national/2023/12/20/des62--hr-governor.amp.html"
  },
 
]

export const Digital2023 = () => {
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
