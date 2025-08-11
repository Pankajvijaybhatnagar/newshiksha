import React from 'react';

// Import images
import img1 from '../../assets/img/cards/img1.webp';
import img2 from '../../assets/img/cards/img2.webp';
import img3 from '../../assets/img/cards/img3.webp';
import img4 from '../../assets/img/cards/img4.webp';
import img5 from '../../assets/img/cards/img5.webp';
import img6 from '../../assets/img/cards/img6.webp';
import img7 from '../../assets/img/cards/img7.webp';
import img8 from '../../assets/img/cards/img8.webp';
import img9 from '../../assets/img/cards/img9.webp';
import img10 from '../../assets/img/cards/img10.webp';

const cardsData = [
   {
    title: 'Shri Rajendra Arlekar',
    image: img1,
    designation: 'Governor of Bihary',
    description: 'माननीय राज्यपाल, बिहार के द्वारा शिक्षा महाकुंभ के द्वितीय संस्करण की कामयाबी के लिए शुभकामनाएँ व्यक्त की है',
  },
  {
    title: 'Shri L. A. Ganesan',
    image: img2,
    designation: 'Honble Governor of Nagaland',
    description: 'Honble Governor sends his best wishes for the success of the programme',
  },
  {
    title: 'Dr. Brajesh Singh',
    image: img3,
    designation: 'Director, ICAR-CPRI',
    description: 'Director sends his best wishes for the success of the programme',
  },
  {
    title: 'Shri Giriraj Singh',
    image: img4,
    designation: ' Minister for Textiles',
    description: 'Minister sends his best wishes for the success of the programme',
  },
  {
    title: 'Dr. Anup Das',
    image: img5,
    designation: ' Director, ICAR Research Complex for Eastern Region',
    description: 'Director sends his best wishes for the success of the programme',
  },
  {
    title: 'Shri Vivek Bhasin',
    image: img6,
    designation: 'Director, BARC',
    description: 'Director sends his best wishes for the success of the programme',
  },
  {
    title: 'Dr. (Mrs.) N. Kalaiselvi',
    image: img7,
    designation: 'Director General, CSIR & Secretary DSIR',
    description: ' Director General sends her best wishes for the success of the programme',
  },
  {
    title: 'Dr. Gilliam',
    image: img8,
    designation: ' President, Boston University',
    description: 'President sends her best wishes for the success of the programme',
  },
  {
    title: 'Major General BK Sharma',
    image: img9,
    designation: 'Director General, USI',
    description: 'Director General sends his best wishes for the success of the programme',
  },
  {
    title: 'Dr. S. Periyasamy',
    image: img10,
    designation: 'Director, CSTRI',
    description: 'Director sends his best wishes for the success of the programme',
  },
 
];

export const Wish = () => {
  return (
    <>
      <div className="container">
        <h1 className='text-center mt-3'>Our Wishes</h1>
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
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'contain',
                backgroundColor: '#fff',
              }}
            />
            <div style={{ padding: '15px' }}>
              <h3 style={{ marginBottom: '5px' }}>{card.title}</h3>
              <p style={{ margin: '0', fontWeight: '500', color: '#555' }}>{card.designation}</p>
              <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
