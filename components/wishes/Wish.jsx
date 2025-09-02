
import Image from 'next/image';

const cardsData = [
  {
    title: 'Shri Rajendra Arlekar',
    image: '/assets/img/cards/img1.webp',
    designation: 'Governor of Bihary',
    description: 'माननीय राज्यपाल, बिहार के द्वारा शिक्षा महाकुंभ के द्वितीय संस्करण की कामयाबी के लिए शुभकामनाएँ व्यक्त की है',
  },
  {
    title: 'Shri L. A. Ganesan',
    image: '/assets/img/cards/img2.webp',
    designation: 'Honble Governor of Nagaland',
    description: 'Honble Governor sends his best wishes for the success of the programme',
  },
  {
    title: 'Dr. Brajesh Singh',
    image: '/assets/img/cards/img3.webp',
    designation: 'Director, ICAR-CPRI',
    description: 'Director sends his best wishes for the success of the programme',
  },
  {
    title: 'Shri Giriraj Singh',
    image: '/assets/img/cards/img4.webp',
    designation: 'Minister for Textiles',
    description: 'Minister sends his best wishes for the success of the programme',
  },
  {
    title: 'Dr. Anup Das',
    image: '/assets/img/cards/img5.webp',
    designation: 'Director, ICAR Research Complex for Eastern Region',
    description: 'Director sends his best wishes for the success of the programme',
  },
  {
    title: 'Shri Vivek Bhasin',
    image: '/assets/img/cards/img6.webp',
    designation: 'Director, BARC',
    description: 'Director sends his best wishes for the success of the programme',
  },
  {
    title: 'Dr. (Mrs.) N. Kalaiselvi',
    image: '/assets/img/cards/img7.webp',
    designation: 'Director General, CSIR & Secretary DSIR',
    description: 'Director General sends her best wishes for the success of the programme',
  },
  {
    title: 'Dr. Gilliam',
    image: '/assets/img/cards/img8.webp',
    designation: 'President, Boston University',
    description: 'President sends her best wishes for the success of the programme',
  },
  {
    title: 'Major General BK Sharma',
    image: '/assets/img/cards/img9.webp',
    designation: 'Director General, USI',
    description: 'Director General sends his best wishes for the success of the programme',
  },
  {
    title: 'Dr. S. Periyasamy',
    image: '/assets/img/cards/img10.webp',
    designation: 'Director, CSTRI',
    description: 'Director sends his best wishes for the success of the programme',
  },
];

export const Wish = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-3">Our Wishes</h1>
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
            <Image
              src={card.image}
              alt={card.title}
              width={350}
              height={250}
              style={{ objectFit: 'contain', backgroundColor: '#fff' }}
            />
            <div style={{ padding: '15px' }}>
              <h3 style={{ marginBottom: '5px' }}>{card.title}</h3>
              <p style={{ margin: '0', fontWeight: '500', color: '#555' }}>{card.designation}</p>
              <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


