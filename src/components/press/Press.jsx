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
    title: 'Shiksha Mahakumbh 2024 begins at...',
    image: img1,
    id:1,
    description: 'Human behaviour has indispensable role in Indian education: Swami Gyananand Entrepreneurship cells must be established in Higher Education: Sah Sanghatak Satish Kumar',
  },
  {
    title: 'राष्ट्रीय शिक्षा नीति से राष्ट्रीय भावना को ...',
    image: img2,
    id:2,
    description: 'राष्ट्रीय शिक्षा नीति से राष्ट्रीय भावना को मिला सम्मानः प्रोफेसर सोमनाथ सचदेवा कुवि में डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन, चंडीगढ़ तथा केयू के संयुक्त तत्वावधान में ‘वैश्विक विकास के लिए भारतीय शिक्षा प्रणाली’ विषय पर दो दिवसीय शिक्षा महाकुंभ का हुआ सफल समारोप कुरुक्षेत्र, 17 दिसम्बर।',
  },
  {
    title: '"हवन रश्म" के साथ शिक्षा महाकुंभ 2.0 ...',
    image: img3,
    id:3,
    description: 'शिक्षा महाकुंभ 2.0 की तैयारियों के अंतर्गत सुबह 7:30 बजे UIET, कुरुक्षेत्र विश्वविद्यालय में "हवन रश्म" का आयोजन किया गया।शिक्षा महाकुंभ 2.0 की तैयारियों के अंतर्गत सुबह 7:30 बजे UIET, कुरुक्षेत्र विश्वविद्यालय में "हवन रश्म" का आयोजन किया गया।',
  },
  {
    title: 'शिक्षा महाकुंभ-2024 (द्वितीय संस्करण)',
    image: img4,
    id:4,
    description: 'आवासीय अभ्यास वर्ग – सफलता की ओर एक और कदमआवासीय अभ्यास वर्ग – सफलता की ओर एक और कदमआवासीय अभ्यास वर्ग – सफलता की ओर एक और कदमआवासीय अभ्यास वर्ग – सफलता की ओर एक और कदम',
  },
  {
    title: 'कुरुक्षेत्र हरियाणा में आयोजित होगा द्वितीय...',
    image: img5,
    id:5,
    description: 'आगामी 16 तथा 17 दिसंबर 2024 को कुरुक्षेत्र विश्वविद्यालय में द्वितीय शिक्षा महाकुंभ का आयोजन किया जाएगाआगामी 16 तथा 17 दिसंबर 2024 को कुरुक्षेत्र विश्वविद्यालय में द्वितीय शिक्षा महाकुंभ का आयोजन किया जाएगा',
  },
  {
    title: 'Baton Ceremony',
    image: img6,
    id:6,
    designation: ' Director, ICAR Research Complex for Eastern Region',
    description: 'A Grand Start to Shiksha Mahakumbh 2.0: Baton CeremonySuccessfully Concluded Kurukshetra, November 20, 2024A Grand Start to Shiksha Mahakumbh 2.0: Baton CeremonySuccessfully Concluded Kurukshetra, November 20, 2024',
  },
 
 
];

export const Press = () => {
  return (
    <>
      <div className="container" >
        <h1 className='text-center mt-3'>Press Notes</h1>
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
                objectFit: 'cover',
                backgroundColor: '#fff',
              }}
            />
            <div style={{ padding: '15px' }}>
              <h5 style={{ marginBottom: '5px' }}>{card.title}</h5>
              
              <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>{card.description}</p>
               <a href={`/press-release/${card.id}`}  target="_blank" ><div className="text-center btn btn-danger" style={{width:"100%"}}>Read more</div></a>
            </div>
          </div>
        ))}
        
      </div>
    </>
   
  );
};
