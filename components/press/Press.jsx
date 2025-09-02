import React from 'react';
import { Link } from 'react-router-dom';
// Import images
import img1 from '../../assets/img/press/p1.webp';
import img2 from '../../assets/img/press/p2.webp';
import img3 from '../../assets/img/press/p3.webp';
import img4 from '../../assets/img/press/p4.webp';
import img5 from '../../assets/img/press/p5.webp';
import img6 from '../../assets/img/press/p6.webp';
import img7 from '../../assets/img/new.webp'; // Example image, replace with actual path if needed
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

const blinkerStyle = `@keyframes blinker { 50% { opacity: 0; } }`;

export const Press = () => {
  return (
    <>
      <style>{blinkerStyle}</style>
      {/* MoU Announcement Section */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto 40px auto',
        background: 'linear-gradient(120deg, #fff 80%, #ffe3ec 100%)',
        borderRadius: '24px',
        boxShadow: '0 8px 32px rgba(137,12,37,0.13)',
        padding: '36px 32px',
        display: 'block',
      }}>
        {/* Image Full Width */}
        <div style={{
          width: '100%',
          background: 'linear-gradient(135deg, #ffe3ec 60%, #fff 100%)',
          borderRadius: '18px',
          boxShadow: '0 4px 24px rgba(137,12,37,0.10)',
          border: '2px solid #e94e77',
          marginBottom: '24px',
          overflow: 'hidden',
          maxHeight:"400px",
        }}>
          <img src={img7} alt="MoU Ceremony" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '18px', display: 'block' }} />
        </div>
        {/* Hindi Content Below Image */}
        <div style={{ textAlign: 'left', fontFamily: 'inherit' }}>
          <h2 style={{
            color: '#890c25',
            fontWeight: 'bold',
            fontSize: '1.35rem',
            marginBottom: '16px',
            letterSpacing: '0.5px',
            lineHeight: 1.3,
          }}>
            DHE एवं NIPER मोहाली के मध्य शिक्षा महाकुंभ अभियान के पंचम संस्करण के लिए MoU हुया सम्पन्न
          </h2>
          <div style={{ color: '#e94e77', fontWeight: 'bold', fontSize: '1.08rem', marginBottom: '8px' }}>
            📅 तिथि: 8 जुलाई, 2025<br />
            📍 स्थान: नाईपर, मोहाली
          </div>
          <div style={{ color: '#444', fontSize: '1.05rem', marginBottom: '10px', lineHeight: 1.7 }}>
            शिक्षा को एक वैश्विक मंच प्रदान करते हुए सशक्त शिक्षा तंत्र बनाने में योगदान के उद्देश्य से आयोजित किए जाने वाले "शिक्षा महाकुंभ अभियान" के पंचम संस्करण को लेकर एक महत्वपूर्ण MoU शिक्षा महाकुंभ अभियान के पालक संस्थान डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन (DHE) जोकि विद्या भारती प्रशिक्षण एवं शोध संस्थान ट्रस्ट का एक थिंक टैंक डिपार्टमेंट है एवं NIPER मोहाली के मध्य सम्पन्न हुए। इस अभियान का पंचम संस्करण 31 अक्टूबर से 2 नवम्बर 2025 तक राष्ट्रीय औषधि शिक्षा एवं अनुसंधान संस्थान (NIPER) मोहाली में आयोजित किया जाएगा।<br /><br />
            यह MoU नाईपर मोहाली के निदेशक कार्यालय में सम्पन्न हुआ। डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन के निदेशक प्रो (डॉ) ठाकुर एसकेआर एवं NIPER मोहाली के कार्यकारी निदेशक प्रो कुलभूषण टिक्कू के हस्ताक्षर से MoU सम्पन्न हुआ। दोनों संस्थानों ने मिलकर इस आयोजन को सफलतापूर्वक संपन्न कराने का संकल्प लिया।<br /><br />
            DHE के निदेशक प्रो ठाकुर एसकेआर ने कहा कि “शिक्षा महाकुंभ एक वैश्विक जनआंदोलन का रूप ले रहा है, जिसका उद्देश्य शिक्षा को ओलंपिक की तर्ज पर एक वैश्विक मंच प्रस्तुत करना है।”<br /><br />
            आगे NIPER मोहाली के कार्यकारी निदेशक प्रो कुलभूषण टिक्कू ने कहा कि “इस आयोजन से उच्च शिक्षण संस्थानों को नवाचार और मूल्यों पर आधारित शिक्षा के मार्ग पर चलने की प्रेरणा मिलेगी।” DHE के बिज़नेस एडवाइज़र श्री पंकज शर्मा ने पिछली कड़ियों की चर्चा करते हुए कहा कि “हर संस्करण ने एक नई ऊँचाई तय की है। यह पंचम संस्करण नई दिशा और संरचना लेकर आएगा।” शिक्षा महाकुंभ अभियान की कोर कमेटी के सदस्य डॉ. वीरेंद्र गर्ग जी ने वित्तीय योजना प्रस्तुत करते हुए कहा कि “हम बजट, प्रायोजन और संसाधनों के बेहतर उपयोग हेतु एक समर्पित वित्तीय ढांचा विकसित करेंगे।” आगे DHE के प्रचार विभाग से विंग कमांडर संजीव शर्मा ने प्रस्ताव दिया कि<br /><br />
            “शिक्षा महाकुंभ आयोजन तक NIPER कैंपस में एक स्थायी कार्यालय की व्यवस्था की जाएगी जिससे समन्वय में गति आए।”<br /><br />
            इस मौके पर NIPER मोहाली की तरफ़ से शिक्षा महाकुंभ अभियान के पंचम संस्करण को संपन्न करने के लिए बनाई गई कमेटी के अध्यक्ष प्रो तरुण शर्मा कोर कमेटी के सदस्यों प्रो कृष्ण गोपाल, डॉ दीपिका, डॉ दीपक एवं डॉ विक्रम सिंह केआर साथ उपस्थित रहे। DHE की तरफ़ से डॉ मनोज तेवतिया, सोनू शर्मा, पंकज शर्मा, डॉ सतीश एवं रमेन्द्र सिंह मौजूद रहे MoU हस्ताक्षर के पश्चात, शिक्षा महाकुंभ अभियान की केंद्रीय टीम तथा NIPER में गठित स्थानीय आयोजन समिति के बीच एक बैठक हुई, जिसमें आयोजन की रूपरेखा, सहभागिता, विषयवस्तु, विभागीय समन्वय और जिम्मेदारियों पर विस्तृत चर्चा की गई।<br /><br />
            <span style={{ color: '#e94e77', fontWeight: 'bold' }}>कार्यक्रम की तिथि एवं स्थल:</span><br />
            📅 31 अक्टूबर – 2 नवम्बर 2025<br />
            📍 स्थान: NIPER मोहाली<br /><br />
            <span style={{ color: '#890c25', fontWeight: 'bold' }}>संयोजक</span><br />
            शिक्षा महाकुंभ 2025
          </div>
        </div>
      </div>
      {/* ...existing code... */}

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
