import React from "react";
import { useParams } from "react-router-dom";

import img1 from '../../assets/img/press/p1.webp';
import img2 from '../../assets/img/press/p2.webp';
import img3 from '../../assets/img/press/p3.webp';
import img4 from '../../assets/img/press/p4.webp';
import img5 from '../../assets/img/press/p5.webp';
import img6 from '../../assets/img/press/p6.webp';
const cardsData = [
  {
    title: 'Shiksha Mahakumbh 2024 begins at Kurukshetra University',
    image: img1,
    id: 1,
    description: 'Human behaviour has indispensable role in Indian education: Swami Gyananand Entrepreneurship cells must be established in Higher Education: Sah Sanghatak Satish Kumar',
  },
  {
    title: 'व्यक्ति के निर्माण में शिक्षा का महत्वपूर्ण योगदान : प्रो. राकेश सिन्हा',
    image: img2,
    id: 2,
    description: 'राष्ट्रीय शिक्षा नीति से राष्ट्रीय भावना को मिला सम्मानः प्रोफेसर सोमनाथ सचदेवा कुवि में डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन, चंडीगढ़ तथा केयू के संयुक्त तत्वावधान में ‘वैश्विक विकास के लिए भारतीय शिक्षा प्रणाली’ विषय पर दो दिवसीय शिक्षा महाकुंभ का हुआ सफल समारोप कुरुक्षेत्र, 17 दिसम्बर।',
  },
  {
    title: '"हवन रश्म के साथ शिक्षा महाकुंभ 2.0 का शुरू हुया काउंटडाउन',
    image: img3,
    id: 3,
    description: 'शिक्षा महाकुंभ 2.0 की तैयारियों के अंतर्गत सुबह 7:30 बजे UIET, कुरुक्षेत्र विश्वविद्यालय में "हवन रश्म" का आयोजन किया गया।शिक्षा महाकुंभ 2.0 की तैयारियों के अंतर्गत सुबह 7:30 बजे UIET, कुरुक्षेत्र विश्वविद्यालय में "हवन रश्म" का आयोजन किया गया।',
  },
  {
    title: 'शिक्षा महाकुंभ-2024 (द्वितीय संस्करण)',
    image: img4,
    id: 4,
    description: 'आवासीय अभ्यास वर्ग – सफलता की ओर एक और कदमआवासीय अभ्यास वर्ग – सफलता की ओर एक और कदमआवासीय अभ्यास वर्ग – सफलता की ओर एक और कदमआवासीय अभ्यास वर्ग – सफलता की ओर एक और कदम',
  },
  {
    title: 'कुरुक्षेत्र हरियाणा में आयोजित होगा द्वितीय शिक्षा महाकुंभ 2024।',
    image: img5,
    id: 5,
    description: 'आगामी 16 तथा 17 दिसंबर 2024 को कुरुक्षेत्र विश्वविद्यालय में द्वितीय शिक्षा महाकुंभ का आयोजन किया जाएगाआगामी 16 तथा 17 दिसंबर 2024 को कुरुक्षेत्र विश्वविद्यालय में द्वितीय शिक्षा महाकुंभ का आयोजन किया जाएगा',
  },
  {
    title: 'Baton Ceremony',
    image: img6,
    id: 6,
    designation: ' Director, ICAR Research Complex for Eastern Region',
    description: 'A Grand Start to Shiksha Mahakumbh 2.0: Baton CeremonySuccessfully Concluded Kurukshetra, November 20, 2024A Grand Start to Shiksha Mahakumbh 2.0: Baton CeremonySuccessfully Concluded Kurukshetra, November 20, 2024',
  },


];


export const PressDetail = () => {
  const { id } = useParams();
  const note = cardsData.find((n) => String(n.id) === String(id));

  if (!note) {
    return <p style={{ textAlign: "center" }}>Press note not found.</p>;
  }


  if (note.id === 1) {
    return (
      <div className="container mt-5 bg-light p-4 text-center">
        <h3 style={{ color: "#890c25" }}>{note.title}</h3>
        <div><img src={note.image} alt={note.title} style={{ width: "600px" }} /></div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>Human behaviour has indispensable role in Indian education: Swami Gyananand, Entrepreneurship cells must be established in Higher Education: Sah Sanghatak Satish Kumar</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>Indian Knowledge System integral part of NEP 2020: VC KUK Kurukshetra, 16 December. Kurukshetra University, Kurukshetra organized the inaugural session of two-day Shiksha Maha Kumbh 2024 on 'Indian Education System for Global Development' under the joint aegis of Department of Holistic Education, Chandigarh. In the inaugural session, the Chief Guest, Gita Manishi Swami Gyananand Maharaj said that the knowledge of books and experiential learning help bring out the inner consciousness and awareness which is usually covered within layers of materialism. Swami added that human behaviour has indispensable role in Indian education system which nurtures the humane values of goodness in a person. The keynote speaker, Sh Satish Kumar, Sah Sanghatak, Swadeshi Jagran Manch said that for the development of Bharat, effective steps should be taken to encourage entrepreneurship and Sah Sanghatak Satish added that entrepreneurship cells should be established in each college and university so that students become self reliant and job creators. Patron, Shiksha Mahakumbh and Vice Chancellor, Kurukshetra University, Prof Som Nath Sachdeva welcomed the Chief Guest Swami Gyananand Maharaj and all the dignitaries and said that Kurukshetra University is the first university of Haryana to implement NEP 2020 with all its provisions not only in the campus but also in all the affiliated colleges. Prof Sachdeva added that Indian Knowledge System is integrated in the various components of NEP 2020.</li>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>General Secretary, Vidya Bharti, Desh Raj Sharma</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>परिचय सत्र:</li>
            <li>General Secretary, Vidya Bharti, Desh Raj Sharma gave the outline of Shiksha Mahakumbh. North Zone Sangathan Mantri Vidya Bharti, Vijay Kumar Nadda emphasized the importance of educational collaboration. My Home India Founder Sunil Deodhar said that the meaning of practicality of life was understood through the education system in Gurukul Ashram.</li>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>General Secretary, Akhil Bharatiya Vidya Sansthan, Avnish Bhatnagar</h3>
          <ul style={{ textAlign: "justify" }}>

            <li>General Secretary, Akhil Bharatiya Vidya Sansthan, Avnish Bhatnagar said that Indian education works with the spirit of global welfare. At the end of the programme, KU Registrar Professor Sanjeev Sharma thanked all the guests. Deputy Director Public Relations Department Dr Jimmy Sharma informed that a plenary session was organised. In this session, Vice Chancellor Gurugram University, Prof. Dinesh Kumar, Vice Chancellor, Central University, Mahendragarh, Prof. Tankeshwar Kumar, Vice Chancellor of CBLU, Prof. Deepti Dharmani were the eminent speakers. Dr Jimmy Sharma added that VC/Directors' conclave, Principals' and innovative teachers' conclave, bureaucrats and entrepreneurs' conclave and student leaders' conclave were the key features of this programme.</li>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>संपर्क करें:</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>Call: +91 94632 31250 - शमशेर सिंह जी ,</li>
            <li>Call: +91 83609 90494 - जितेश पांडेय जी,</li>
            <li>Call: +91 94163 62401 - सुनील धींगड़ा जी ,</li>
          </ul>
        </div>


      </div>
    );
  }
  if (note.id === 2) {
    return (
      <div className="container mt-5 bg-light p-4 text-center">
        <h3>{note.title}</h3>
        <img src={note.image} alt={note.title} style={{ width: "600px" }} />
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>राष्ट्रीय शिक्षा नीति से राष्ट्रीय भावना को मिला सम्मानः प्रोफेसर सोमनाथ सचदेवा</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>राष्ट्रीय शिक्षा नीति से राष्ट्रीय भावना को मिला सम्मानः प्रोफेसर सोमनाथ सचदेवा कुवि में डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन, चंडीगढ़ तथा केयू के संयुक्त तत्वावधान में ‘वैश्विक विकास के लिए भारतीय शिक्षा प्रणाली’ विषय पर दो दिवसीय शिक्षा महाकुंभ का हुआ सफल समारोप कुरुक्षेत्र, 17 दिसम्बर। राज्यसभा के पूर्व सांसद प्रो. राकेश सिन्हा ने कहा कि व्यक्ति के निर्माण में शिक्षा का महत्वपूर्ण योगदान है। शिक्षा देना पाठ्यक्रम पढ़ाना नहीं अपितु व्यक्ति निर्माण करना है। यही भारतीय ज्ञान परम्परा का आधार भी रहा है। हमारी परम्परा में न ज्ञान ठहरता है न संस्कृति बल्कि ज्ञान परम्परा का निरंतर चलती रहती है। विद्या भारती शैक्षणिक संस्थानों में शिक्षा ग्रहण कर रहे विद्यार्थियों के व्यवहार और आचरण को देखकर सकारात्मक संचरण हो रहा है। शिक्षा के क्षेत्र में विद्या भारती अद्वितीय कार्य कर रहा है जिससे विद्या भारती की महत्ता और आवश्यकता बढ़ती जा रही है। वे मंगलवार को डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन, चंडीगढ़ तथा कुरुक्षेत्र विश्वविद्यालय के संयुक्त तत्वावधान में कुवि के डॉ. आरके सदन में ‘वैश्विक विकास के लिए भारतीय शिक्षा प्रणाली’ विषय पर आयोजित दो दिवसीय शिक्षा महाकुंभ के समारोप सत्र में बतौर मुख्यातिथि बोल रहे थे। प्रो. राकेश सिन्हा ने कहा कि जिस जानकारी से हमारी सोच, चिंतन व हमारी समझ परिपक्वता पाती है और जिस जानकारी से समाज की आर्थिक, सामाजिक व सांस्कृतिक वातावरण में प्रभाव पड़ने लगता है उसको ज्ञान कहते हैं। ज्ञान के धारक की पात्रता सामान्य लोगों से अलग होती है क्योंकि उसमें निडरता का भाव होता है वह भय मुक्त होता है। वह पढ़ते, सोचते व अभिव्यक्त करते समय सिर्फ आने वाली पीढ़ियों को देखता है वर्तमान को नहीं देखता। उसके शब्दों में पीढ़ियों के लिए उन्नति के मार्ग का बीज होता है। ज्ञान मार्ग पर चलने वाला व्यक्ति हमेशा सर्वंत सुखाय की बात करता है। इस अवसर पर सभी अतिथियों द्वारा दो दिवसीय शिक्षा महाकुंभ की विस्तृत स्मारिका का भी विमोचन किया गया। कुरुक्षेत्र विश्वविद्यालय के कुलपति प्रो. सोमनाथ सचदेवा ने सभी अतिथियों का स्वागत करते हुए कहा कि राष्ट्रीय शिक्षा नीति से राष्ट्रीय भावना को मिला सम्मान है तथा यह विद्यार्थियों में देशभक्ति व राष्ट्रीय गौरव की भावना को बढ़ावा देने का काम करती है। राष्ट्रीय शिक्षा नीति-2020 द्वारा दी जा रही शिक्षा छात्रों का बौद्धिक, नैतिक व आध्यात्मिक विकास को पोषित करती है। शिक्षा में भारतीय मूल्यों और संस्कृति को एकीकृत करती है। केयू ने राष्ट्रीय शिक्षा नीति-2020 को इसके सभी प्रावधानों साथ न केवल कैम्पस में बल्कि सभी संबंधित कॉलेजों में पूरे देश में सबसे पहले लगाया है। इस महाकुंभ के अमृत द्वारा हम वैश्विक विकास और विश्व कल्याण के लिए अपना योगदान व प्रयोग करने में सफल होंगे। इसरो के प्रतिष्ठित वैज्ञानिक एवं विद्या भारती के सचिव डॉ. सुदेश ठाकुर ने दो दिवसीय शिक्षा महाकुंभ की विस्तृत रिपोर्ट को प्रस्तुत करते हुए बताया कि इसके अंतर्गत 9 कनक्लेव आयोजित की गई व 81 पत्र पढ़े गए तथा हरियाणा, पंजाब व चंडीगढ़ के 25 शैक्षणिक संस्थान इसके सह-आयोजक बने। विद्या भारती के अखिल भारतीय संगठन मंत्री गोबिंद चंद महंत ने कहा कि विद्या भारती अपने प्रयासों से विद्यालय के माध्यम से शिक्षा व्यवस्था में परिवर्तन लाने का प्रयास कर रही है। भारतीय जीवन दर्शन एवं भारतीय मनोविज्ञान की दृष्टि से विद्यालय व विश्वविद्यालयों में शिक्षा होनी चाहिए। उन्होंने एनईपी को सही रूप में क्रियान्वित कर सतत् विकास की आरे जाने की बात भी कही। पूर्व कुलपति प्रो. केजी सुरेश ने कहा कि विद्या भारती द्वारा उत्कृष्ट राष्ट्र के लिए नागरिकों को तैयार किया जा रहा है। भारत विश्व को ज्योति दिखाने का कार्य कर रहा है। शिक्षा का उद्देश्य मात्र नौकरी, जीवन यापन नहीं हैं हमें इसके मूल भाव को समझना होगा। भारतीय ज्ञान परम्परा में विश्व व भारत की सभी समस्याओं का समाधान निहित है। अंत में डॉ. शमशेर सिंह ने सभी अतिथियों धन्यवाद ज्ञापित किया। कार्यक्रम के अंत में कुवि कुलसचिव प्रोफेसर संजीव शर्मा, आरएसएस वरिष्ठ प्रचारक विजय कुमार नड्डा, शिक्षाविद् देशराज शर्मा, सुरेन्द्र अत्री, डॉ. शमशेर सिंह, उपाध्यक्ष चेतराम, ऋषिराज वशिष्ठ, नोडल ऑफिसर एवं यूआईईटी निदेशक प्रो. सुनील ढींगरा, लोक सम्पर्क विभाग के निदेशक प्रो. महासिंह पूनिया,उपनिदेशक डॉ. जिम्मी शर्मा, डॉ. जितेश पांडे, डॉ. अर्चना, डॉ. राजेश अग्निहोत्री, मनोज तेवतिया, संजय चौधरी, विकास शर्मा, शिक्षा शर्मा, डॉ. पवन दीवान, डॉ. धीरेन्द्र, कृष्णा पांडे, डॉ. दिग्विजय सिंह, हरिकेश पपोसा सहित विभिन्न शैक्षणिक संस्थानों के निदेशक, प्रतिनिधि, शिक्षक एवं विद्यार्थी मौजूद रहे।</li>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>बाक्स</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>परिचय सत्र:</li>
            <li>कुलपति प्रो. सोमनाथ सचदेवा ने सफल आयोजन की दी बधाई कुरुक्षेत्र विश्वविद्यालय के कुलपति प्रो. सोमनाथ सचदेवा ने कुवि में डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन, चंडीगढ़ तथा केयू के संयुक्त तत्वावधान में ‘वैश्विक विकास के लिए भारतीय शिक्षा प्रणाली’ विषय पर आयोजित दो दिवसीय शिक्षा महाकुंभ के सफल समारोप के आयोजन के लिए इसके नोडल ऑफिसर एवं यूआईईटी निदेशक प्रो. सुनील ढींगरा सहित पूरी टीम के सभी संकाय सदस्यों को बधाई व शुभकामनाएं दी।</li>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>शिक्षा महाकुंभ बना नवाचार एवं उद्यमिता का केन्द्र</h3>
          <ul style={{ textAlign: "justify" }}>

            <li>स्टाल में विद्यार्थियों ने प्रस्तुत किए स्टार्टअप एवं नवाचार के मॉडल कुरुक्षेत्र, 17 दिसम्बर। कुरुक्षेत्र विश्वविद्यालय के डॉ. आरके सदन के प्रांगण में दो दिवसीय शिक्षा महाकुंभ के अतंर्गत लगाए गए स्टाल में स्कूली छात्रों ने स्टार्टअप एवं नवाचार मॉडल प्रस्तुत कर दैनिक जीवन की समस्याओं को निदान किया। गीता निकेतन आवासीय विद्यालय कुरुक्षेत्र के 11वीं कक्षा के छात्र रविन्द्र बराड़ ने रोबो कंस्ट्रक्टर मॉडल के माध्यम से बताया कि उनका यह मॉडल सड़कों के गहरे गड्ढों को भरने का आइडिया है। इस नवाचार के माध्यम से मशीन अपने आप गड्ढों की पहचान कर उसे ठीक करेगी। उन्होंने बताया कि यह नवाचार अभी प्रोटो टाइप स्टेज में है। इसके साथ हेल्दी पोस्चर हैप्पी लाइफ मॉडल में छात्र ने बैठने की सही स्थिति हेतु कुर्सी को प्रदर्शित किया जिसमें यदि व्यक्ति सही स्थिति में आसन ग्रहण नहीं करता तो वह बीप की आवाज देने लगती है। इसके साथ ही विद्यार्थियों द्वारा मूवेबल सोलर सिस्टम को भी प्रदर्शित किया गया।उन्होंने बताया कि वर्तमान में घरों, कार्यालयों में लगे सोलर सिस्टम एक जगह लगे होते है तथा जब धूप निकलती है तब धीरे-धीरे बिजली बनने लगती है। जबकि उनके द्वारा प्रदर्शित मूवेबल सोलर सिस्टम प्रकाश के अधिकतम प्रभाव की जांच कर सोलर सिस्टम सेंसर उसी दिशा में अपने आप घूम जाता है जिससे अधिक ऊर्जा मिल सके। गीता विद्या मंदिर, गोहाना से आए विद्यार्थी सक्षम, सहदेव व सुहानी ने बताया कि आरएफ आईडी तकनीक वर्तमान में बहुत प्रचलित है। उन्होंने इसी आधार पर डोर लॉक सिस्टम को प्रदर्शित किया है। उन्होंने बताया कि इस तकनीक को वर्तमान में टोल बैरियर इस्तेमाल किया जा रहा है जहां फास्टैग की रीडिंग के बाद गेट अपने आप खुल जाता है। वहीं गीता कन्या सीनियर सेकेंडरी स्कूल अमीन रोड़ की छात्रा जाह्न्वी ने बताया कि उनके मॉडल में खेत में मिट्टी की उर्वरता, पानी एवं हवा की नमी का सेंसर के द्वारा पता लगाकर आवश्यक पोषक तत्वों को पूरा किया जा सकता है जिससे खेती द्वारा किसान अच्छी फसल प्राप्त कर सकता है।</li>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>संपर्क करें:</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>Call: +91 94632 31250 - शमशेर सिंह जी ,</li>
            <li>Call: +91 83609 90494 - जितेश पांडेय जी,</li>
            <li>Call: +91 94163 62401 - सुनील धींगड़ा जी ,</li>
          </ul>
        </div>


      </div>
    );
  }
  if (note.id === 3) {
    return (
      <div className="container mt-5 bg-light p-4 text-center">
        <h3 style={{ color: "#890c25" }}>{note.title}</h3>
        <div><img src={note.image} alt={note.title} style={{ width: "600px" }} /></div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>हवन रश्म के साथ शिक्षा महाकुंभ 2.0 का शुरू हुया काउंटडाउन</h3>

        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>कुरुक्षेत्र, 7 दिसंबर 2024:</h3>
          <ul style={{ textAlign: "justify" }}>

            <li>शिक्षा महाकुंभ 2.0 की तैयारियों के अंतर्गत सुबह 7:30 बजे UIET, कुरुक्षेत्र विश्वविद्यालय में "हवन रश्म" का आयोजन किया गया। यह हवन शिक्षा और समाज के कल्याण के लिए समर्पित है। इसमें प्रमुख गणमान्य व्यक्तियों, विद्वानों और आयोजकों ने भाग लिया। हवन के बाद कोर कमेटी बैठक आयोजित की गई, जिसमें शिक्षा महाकुंभ से संबंधित सभी आवश्यक बिंदुओं पर चर्चा की गई। इस बैठक में शिक्षा महाकुंभ 2.0 को सफल और प्रभावशाली बनाने के लिए योजनाओं और पहलुओं को अंतिम रूप दिया गया। </li>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>अभ्यास वर्ग की मुख्य विशेषताएं:</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>23 नवम्बर 2024:डॉ. सुदेश जी द्वारा "डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन (DHE) एवं शिक्षा महाकुंभ" का परिचय। इस सत्र में शिक्षा महाकुंभ की संरचना, उद्देश्यों और इसकी प्रमुख गतिविधियों पर चर्चा की जाएगी।</li>
            <li>कार्यक्रम योजना:</li>
            <li>सुरेंद्र अत्रि जी (उपाध्यक्ष, विद्या भारती उत्तर क्षेत्र) द्वारा शिक्षा महाकुंभ-2024 की विस्तृत योजना और आगामी कार्यों की चर्चा।</li>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>शिक्षा महाकुंभ-2024 की मुख्य झलकियां:</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>बैठक में विद्या भारती उत्तर क्षेत्र के संगठन मंत्री श्री विजय कुमार नड्डा और कुरुक्षेत्र विश्वविद्यालय के कुलपति ने उपस्थित सभी सदस्यों को संबोधित किया। उन्होंने समाज के सभी वर्गों से इस अभियान में जुड़ने और इसे सफल बनाने के लिए आह्वान किया। उन्होंने कहा कि शिक्षा महाकुंभ में भाग लेने के लिए कई विकल्प हैं, जैसे:</li>
            <li>अनुसंधान और नवाचार का प्रदर्शन:</li>
            <li>शोध पत्र प्रस्तुतिकरण ,कन्क्लेव्स (विशेष संवाद) ,विचार प्रस्तुति</li>
            <li>सर्वश्रेष्ठ प्रथाओं का आदान-प्रदान:</li>
            <li>प्रायोजन (सपोर्टर बनने का अवसर)</li>
            <li>प्रतिभा का सम्मान:</li>
            <li>विशेष सत्रों में विभिन्न क्षेत्रों की उत्कृष्ट प्रतिभाओं को पहचान और सम्मान ,पारंपरिक ज्ञान और कौशल का प्रदर्शन</li>
            <li>प्रतिभा का सम्मान:</li>
            <li>स्वयंसेवी सहभागिता ,व्यवसायिक प्रदर्शनियां और स्टॉल्स</li>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>शिक्षा महाकुंभ 2.0</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>शिक्षा महाकुंभ 2.0 न केवल शिक्षा नीति और कौशल विकास पर चर्चा का मंच प्रदान करता है, बल्कि यह भारतीय शिक्षा प्रणाली को वैश्विक स्तर पर प्रस्तुत करने का एक महत्वपूर्ण प्रयास है। शिक्षा को एक वैश्विक मंच प्रदान करना इसका मूल उद्देश्य है।</li>

          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>संपर्क करें:</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>Call: +91 94632 31250 - शमशेर सिंह जी ,</li>
            <li>Call: +91 83609 90494 - जितेश पांडेय जी,</li>
            <li>Call: +91 94163 62401 - सुनील धींगड़ा जी ,</li>
          </ul>
        </div>



      </div>
    );
  }

  if (note.id === 4) {
    return (
      <div className="container mt-5 bg-light p-4 text-center">
        <h3 style={{ color: "#890c25" }}>{note.title}</h3>
        <div><img src={note.image} alt={note.title} style={{ width: "600px" }} /></div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>शिक्षा महाकुंभ-2024</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>द्वितीय संस्करण का आयोजन 16 एवं 17 दिसम्बर 2024 को कुरुक्षेत्र विश्वविद्यालय, हरियाणा में किया जाएगा। इस महत्वपूर्ण आयोजन की तैयारी के लिए दो दिवसीय आवासीय अभ्यास वर्ग का आयोजन किया जा रहा है। यह अभ्यास वर्ग शिक्षा महाकुंभ के सफल आयोजन की दिशा में एक अहम कदम है, जिसमें सभी प्रतिभागियों को कार्यक्रम के उद्देश्यों और कार्ययोजनाओं से अवगत कराया जाएगा।</li>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>अभ्यास वर्ग की मुख्य विशेषताएं:</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>परिचय सत्र:</li>
            <li>23 नवम्बर 2024:डॉ. सुदेश जी द्वारा "डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन (DHE) एवं शिक्षा महाकुंभ" का परिचय। इस सत्र में शिक्षा महाकुंभ की संरचना, उद्देश्यों और इसकी प्रमुख गतिविधियों पर चर्चा की जाएगी।</li>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>शिक्षा महाकुंभ-2024 की मुख्य झलकियां:</h3>
          <ul style={{ textAlign: "justify" }}>

            <li>1. नेतृत्व और दृष्टि हेतु विशेष सम्मेलन (Conclaves):कुलपतियों और निदेशकों का सम्मेलन ,प्राचार्यों का सम्मेलन, उद्यमियों और प्रशासकों का सम्मेलन,छात्रों का सम्मेलन, वैज्ञानिकों का सम्मेलन ,यूट्यूबर्स का सम्मेलन ,मीडिया का सम्मेलन</li>
            <l1>शोध पत्र प्रस्तुति ,स्टार्टअप्स और इनोवेशन का प्रदर्शन ,छात्रों के प्रोजेक्ट्स और प्रदर्शनियां</l1>
            <l1>किसी भी क्षेत्र में बेहतरीन कार्य और नवाचारों की प्रस्तुति।</l1>
            <l1>विशेष सत्रों में विभिन्न क्षेत्रों की उत्कृष्ट प्रतिभाओं को पहचान और सम्मान</l1>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>प्रतिभागियों के लिए सुनहरा अवसर:</h3>
          <ul style={{ textAlign: "justify" }}>

            <li>शिक्षा महाकुंभ में वैज्ञानिक, शोधकर्ता, छात्र, प्रोफेसर, अधिकारी, प्राचार्य, निदेशक, व्यवसायी और पेशेवर भाग लेंगे। यह एक ऐसा मंच है, जहां ये लोग अपने विचार और अनुभव साझा करेंगे, जिससे शिक्षा, नवाचार और वैश्विक विकास के क्षेत्रों में नई दिशाओं का निर्माण होगा।</li>

          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>संपर्क करें:</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>Call: +91 94632 31250 - शमशेर सिंह जी ,</li>
            <li>Call: +91 83609 90494 - जितेश पांडेय जी,</li>
            <li>Call: +91 94163 62401 - सुनील धींगड़ा जी ,</li>
          </ul>
        </div>


      </div>
    );
  }
  if (note.id === 5) {
    return (
      <div className="container mt-5 bg-light p-4 text-center">
        <h3 style={{ color: "#890c25" }}>{note.title}</h3>
        <div><img src={note.image} alt={note.title} style={{ width: "600px" }} /></div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>Introduction</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>विद्या भारती अखिल भारतीय शिक्षा संस्थान एवं कुरुक्षेत्र विश्वविद्यालय कुरुक्षेत्र के संयुक्त तत्वावधान में आगामी 16 तथा 17 दिसंबर 2024 को कुरुक्षेत्र विश्वविद्यालय में द्वितीय शिक्षा महाकुंभ का आयोजन किया जाएगा।</li>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>Highlights of the Event</h3>

          <ul style={{ textAlign: "justify" }}>
            <strong>Dr. Thakur SKR (Sci/Engr-SF, ISRO & Director, Shiksha Mahakumbh)</strong>

            <li>गीता निकेतन आवासीय विद्यालय कुरुक्षेत्र में आयोजित एक प्रेस वार्ता में इसरो के प्रमुख वैज्ञानिक तथा सामाजिक कार्यकर्ता ठाकुर सुदेश कुमार ने आज बताया कि शिक्षा महाकुंभ अभियान एक दूरदर्शी पहल है जिसका उद्देश्य शिक्षा नीति 2020 के कार्यान्वन के माध्यम से भारत के शैक्षिक परिदृश्य को फिर से परिभाषित करना है । उन्होंने बताया कि इस अभियान को आगे बढ़ाने के लिए आई आई टी, आई आई एम , एम्स, एनआईडी, एन आई टी, आदि राष्ट्रीय महत्व के प्रतिष्ठित संस्थानों का सहयोग लिया जा रहा है। इस पहल का मुख्य उद्देश्य शिक्षा के सभी पहलुओं पर संवाद के लिए संपूर्ण जन समूह को एक मंच प्रदान करना है। पंचकोशीय भारतीय दर्शन को केंद्र में रखकर उपलब्धियों, बाधाओं और भविष्य की दिशा- दशा पर एक ही मंच पर संवाद स्थापित करना है। उन्होंने बताया कि हर क्षेत्र के विशेषज्ञ इस मंच पर अपनी राय रखेंगे। शिक्षा में क्षेत्रीय असमानताओं और वैश्विक चुनौतियों को संबोधित करने की दिशा में यह एक अनूठा अभियान है। इस अभियान में अनेक प्रतिष्ठित संस्थाओं के छात्रों को भाग लेने के लिए प्रोत्साहित किया जा रहा है। शिक्षा महाकुंभ अभियान पारंपरिक मूल्यों को आधुनिक शिक्षा के साथ एकीकृत करने के महत्व पर भी जोर देता है । समकालीन चुनौतियों का समाधान करते हुए समृद्ध सांस्कृतिक विरासत और ज्ञान के आधार को बनाए रखने का प्रयास करता है। उन्होंने बताया कि पहला शिक्षा महाकुंभ 9 से 11 जून 2023 को एन आई टी जालंधर में आयोजित किया गया था।</li>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>Key Attractions:-</h3>
          <ul style={{ textAlign: "justify" }}>

            <li>विभिन्न राज्यों के राज्यपाल, केंद्रीय मंत्रियों, निर्देशकों, कुलपतियों ,नौकर साह, मीडिया की हस्तियों, और विभिन्न क्षेत्रों के गणमान्य व्यक्तियों और समाज के सदस्यों की भागीदारी प्राप्त हुई थी। इस शिक्षा महाकुंभ में तय किया गया था कि शिक्षकों, शोधकर्ताओं, छात्रों और उद्योगपतियों के बीच संवाद और सहयोग को बढ़ावा देना है।</li>
            <l1>शिक्षा महाकुंभ को वैश्विक भागीदारी और संवाद के लिए डिजाइन किया गया है। इस शिक्षा महाकुंभ 2024 में अलग-अलग विषय विशेषज्ञों के सम्मेलन आयोजित किए जाएंगे जिनमें नेतृत्व की दृष्टि से कुलपतियों और निर्देशकों का सम्मेलन, प्राचार्य का सम्मेलन, उद्यमियों और प्रशासकों का सम्मेलन, छात्रों का सम्मेलन, वैज्ञानिकों का सम्मेलन ,यूट्यूबर्ष का सम्मेलन और मीडिया से जुड़े लोगों का सम्मेलन होगा।</l1>
            <l1>अनुसंधान और नवाचार की दृष्टि से शोध पत्र प्रस्तुति, स्टार्टअप इनोवेशन और छात्रों के प्रोजेक्ट का प्रदर्शन होगा। सर्वश्रेष्ठ प्रथाओं का आदान-प्रदान, किसी भी क्षेत्र में बेहतरीन कार्य और नवाचारों की प्रस्तुति करने पर प्रतिभा का सम्मान । विभिन्न क्षेत्रों की उत्कृष्ट प्रतिभाओं को पहचान कर सम्मानित किया जाएगा। शिक्षा महाकुंभ में वैज्ञानिक, शोधकर्ता, छात्र, प्रोफेसर, अधिकारी ,प्राचार्य, निदेशक ,व्यवसायी और पेशेवर भाग लेंगे ।</l1>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>प्रतिभागियों के लिए सुनहरा अवसर:</h3>
          <ul style={{ textAlign: "justify" }}>

            <li>शिक्षा महाकुंभ में वैज्ञानिक, शोधकर्ता, छात्र, प्रोफेसर, अधिकारी, प्राचार्य, निदेशक, व्यवसायी और पेशेवर भाग लेंगे। यह एक ऐसा मंच है, जहां ये लोग अपने विचार और अनुभव साझा करेंगे, जिससे शिक्षा, नवाचार और वैश्विक विकास के क्षेत्रों में नई दिशाओं का निर्माण होगा।</li>

          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>संपर्क करें:</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>Call: +91 94632 31250 - शमशेर सिंह जी ,</li>
            <li>Call: +91 83609 90494 - जितेश पांडेय जी,</li>
            <li>Call: +91 94163 62401 - सुनील धींगड़ा जी ,</li>
          </ul>
        </div>


      </div>
    );
  }
  if (note.id === 6) {
    return (
      <div className="container mt-5 bg-light p-4 text-center">
        <h3 style={{ color: "#890c25" }}>{note.title}</h3>
        <div><img src={note.image} alt={note.title} style={{ width: "600px" }} /></div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>Introduction</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>In preparation for Shiksha Mahakumbh 2.0, the 'Baton Ceremony' was held today at Kurukshetra University, Kurukshetra, with grandeur and enthusiasm. This symbolic event marked the formal commencement of the Mahakumbh and witnessed the participation of several dignitaries from the fields of education, society, and politics.</li>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>Highlights of the Event</h3>

          <ul style={{ textAlign: "justify" }}>
            <strong>1. Vice-Chancellor, Kurukshetra University</strong>

            <li>The Vice-Chancellor emphasized the significance of Shiksha Mahakumbh 2.0 in highlighting the role of the Indian education system in global development. He congratulated all participants for their efforts in making this initiative a reality.</li>
            <strong> Dr. Thakur SKR (Sci/Engr-SF, ISRO & Director, Shiksha Mahakumbh)</strong>

            <li>Dr. Thakur elaborated on the theme 'The Role of the Indian Education System in Global Development' and described the event as a global platform for innovation and dialogue in education. He added, “While sports have the global platform of the Olympics, there is currently no such forum for sustainable development, which is a fundamental aspect of global progress. Shiksha Mahakumbh is a small but significant step to address this gap, drawing inspiration from India’s ancient heritage as a global knowledge leader.”</li>
            <strong>  Shri Vijay Nadda (Organizing Secretary, Vidya Bharati North Zone)</strong>

            <li>Shri Nadda highlighted the objectives of Shiksha Mahakumbh, describing it as a key initiative to uphold the legacy of Indian education and align it with NEP 2020. He emphasized its role in fostering skill-based and entrepreneurial education while promoting meaningful discourse.</li>
            <strong> Shri Virender Garg (Patron, Publicity Department, Shiksha Mahakumbh 2.0)</strong>

            <li>Shri Garg discussed the interconnection between Indian culture and education and assured his full support for the success of the Mahakumbh.</li>
            <strong>Dr. Amit Kansal (Coordinator, Publicity Department, Shiksha Mahakumbh 2.0)</strong>

            <li>Dr. Kansal provided insights into the program’s structure and shared details about the preparations for upcoming events.</li>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>Key Attractions:-</h3>
          <ul style={{ textAlign: "justify" }}>

            <li>The Baton, symbolizing the inauguration of Shiksha Mahakumbh 2.0, was ceremoniously established by the chief guest.</li>
            <l1>Thought-provoking discussions on Indian culture enriched the event.</l1>
            <l1>Enthusiastic involvement from educators, students, researchers, and social leaders.</l1>
          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>Upcoming Events:-</h3>
          <ul style={{ textAlign: "justify" }}>

            <li>Shri Krishna Pandey, Co-convener, DHE, Haryana, announced that Shiksha Mahakumbh 2.0 will host a series of academic and cultural activities on December 16-17, 2024, at Kurukshetra University. These include:
              Vice-Chanc</li>

          </ul>
        </div>
        <div className="m-3 mt-5 p-3" style={{ boxShadow: "5px 5px 5px 5px #ccc" }}>
          <h3 className="px-5" style={{ color: "#890c25", textAlign: "justify" }}>Contact</h3>
          <ul style={{ textAlign: "justify" }}>
            <li>Call: +91 94632 31250 - </li>
            <li>Call: +91 83609 90494 - </li>
            <li>Call: +91 94163 62401 -</li>
          </ul>
        </div>


      </div>
    );
  }


  return <p style={{ textAlign: "center" }}>This event is not available yet.</p>;
};