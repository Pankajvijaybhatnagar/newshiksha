import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HomeOne } from "./pages/home/HomeOne";
import { useWow } from "./lib/hooks/useWow";
import { HomeTwo } from "./pages/home/HomeTwo";
import { HomeThree } from "./pages/home/HomeThree";
import { HomeFour } from "./pages/home/HomeFour";
import { HomeFive } from "./pages/home/HomeFive";
import { HomeSix } from "./pages/home/HomeSix";
import { HomeSeven } from "./pages/home/HomeSeven";
import { HomeEight } from "./pages/home/HomeEight";
import { CoursesGridView } from "./pages/course/CoursesGridView";
import { CoursesListView } from "./pages/course/CoursesListView";
import { CoursesGridSidebar } from "./pages/course/CoursesGridSidebar";
import { CoursesDetails } from "./pages/course/CoursesDetails";
import { About } from "./pages/about/About";
import { Error } from "./pages/error/Error";
import { Event } from "./pages/event/Event";
import { PastEvent } from "./pages/event/PastEvent";
import { UpcomingEvent } from "./pages/event/UpcomingEvent";
import { Pic } from "./pages/photo/Pic";
import { Vid } from "./pages/video/Vid";
import { EventDetails } from "./pages/event/EventDetails";
import { TeamMembers } from "./pages/team/TeamMembers";
import { TeamMemberDetails } from "./pages/team/TeamMemberDetails";
import { StudentRegistration } from "./pages/auth/StudentRegistration";
import { InstructorRegistrations } from "./pages/auth/InstructorRegistrations";
import { Signup } from "./pages/auth/Signup";
import { Signin } from "./pages/auth/Signin";
import { Faq } from "./pages/faq/Faq";
import { Cart } from "./pages/cart/Cart";
import { Checkout } from "./pages/checkout/Checkout";
import { Blog } from "./pages/blogs/Blog";
import { BlogWithSidebar } from "./pages/blogs/BlogWithSidebar";
import { BlogDetails } from "./pages/blogs/BlogDetails";
import { Contact } from "./pages/contact/Contact";
import { PressRelease } from "./pages/press/PressRelease";
import { PressDetails } from "./pages/press/PressDetails";
import {MediaPage} from "./pages/mediaSection/MediaPage";
import {Submit} from "./pages/paper/Submit";
import {Sponsors} from "./pages/sponsor/Sponsors"; 
import {DigitalPage} from "./pages/mediaSection/DigitalPage";
import { Wishes } from "./pages/wishes/Wishes";
import { NewProgram } from "./pages/program/NewProgram";
import {ShikhsaKumbh} from "./pages/about/Shikshakumbh";
import { ShikhsaMahaKumbh } from "./pages/about/ShikshaMAhaKumbh";
import { ShikhsaVibhag } from "./pages/about/ShikshaVibhag";
import { VitVibhag } from "./pages/about/VitVibhag";
import { Prachar } from "./pages/about/Prachar";
import { SamparkVibhag } from "./pages/about/Sampark";
import { Prabandhan } from "./pages/about/Prabhandh";
import { Digital2023Page } from "./pages/mediaSection/Digital2023Page";
import { MahaDigital } from "./pages/mediaSection/MahaDigital";
import { Maha2023Digital} from "./pages/mediaSection/Maha2023Digital";
import { Merchandise } from "./pages/merchandise/Merchandise";
import { Conference } from "./pages/confer/Conference";
import { Committee } from "./pages/commit/Committee";





// Enhanced Beautiful Popup Component
const Popup = ({ isOpen, onClose, title, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  if (!isOpen && !isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div 
      className={`popup-overlay ${isClosing ? 'closing' : ''}`} 
      onClick={handleOverlayClick}
    >
      <div className={`popup-content ${isClosing ? 'closing' : ''}`}>
        {/* Decorative background elements */}
        <div className="popup-bg-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
        
        {/* Close button */}
        <button className="popup-close" onClick={handleClose} aria-label="Close popup">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M18 6L6 18M6 6l12 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="popup-inner">
          <div className="popup-header">
           <div className="welcome-icon">
  <img 
    src="/img/logo_black.png" 
    alt="Welcome Icon" 
    width="48" 
    height="48" 
    style={{ borderRadius: '4px' }} 
  />
</div>

            <h2 className="popup-title">{title}</h2>
          </div>
          
          <div className="popup-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};



















function App() {
  useWow();
  const [showPopup, setShowPopup] = useState(false);

  // on route change to top of the page
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), [pathname]);

  // Show popup on app load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };





















  return (
    <>
    <Routes>
      <Route path="/" element={<HomeOne />} />
      <Route path="/home-v2" element={<HomeTwo />} />
      <Route path="/home-v3" element={<HomeThree />} />
      <Route path="/home-v4" element={<HomeFour />} />
      <Route path="/home-v5" element={<HomeFive />} />
      <Route path="/home-v6" element={<HomeSix />} />
      <Route path="/home-v7" element={<HomeSeven />} />
      <Route path="/home-v8" element={<HomeEight />} />
      <Route path="/courses-grid-view" element={<CoursesGridView />} />
      <Route path="/courses-list-view" element={<CoursesListView />} />
      <Route
        path="/courses-grid-with-sidebar"
        element={<CoursesGridSidebar />}
      />
      <Route path="/course-details" element={<CoursesDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/ShikshaKumbh" element={<ShikhsaKumbh />} />
      <Route path="/about/ShikshaMahaKumbh" element={<ShikhsaMahaKumbh />} />
      <Route path="/about/ShikshaVibhag" element={<ShikhsaVibhag />} />
      <Route path="/about/VitVibhag" element={<VitVibhag />} />
      <Route path="/about/pracharVibhag" element={<Prachar />} />
      <Route path="/about/SamparkVibhag" element={<SamparkVibhag />} />
      <Route path="/about/prabandhanVibhag" element={<Prabandhan />} />
      <Route path="/conference" element={<Conference />} />

      <Route path="/event" element={<Event />} />
      <Route path="/past-event" element={<PastEvent />} />
      <Route path="/event/:id" element={<EventDetails />} />
      <Route path="/upcoming-event" element={<UpcomingEvent />} />
      <Route path="/upcoming-event/shiksha-mahakumbh-2025" element={<UpcomingEvent />} />
      <Route path="/photos" element={<Pic />} />
      <Route path="/videos" element={<Vid />} />
      <Route path="/press-release" element={<PressRelease />} />
      <Route path="/press-release/:id" element={<PressDetails />} />
      <Route path="/media" element={<MediaPage />} />
      <Route path="/media/digital-media" element={<DigitalPage />} />
      <Route path="/media/digital-media2023" element={<Digital2023Page />} />
      <Route path="/media/shikshaMahakumbh2024" element={<MahaDigital />} />
      <Route path="/media/shikshaMahakumbh2023" element={<Maha2023Digital />} />
      <Route path="/merchandise" element={<Merchandise />} />
      <Route path="/paper-submission" element={<Submit />} />
      <Route path="/sponsor" element={<Sponsors />} />
      <Route path="/wishes-received" element={<Wishes />} />
      <Route path="/shikshaMahakumbh2025" element={<NewProgram />} />
      <Route path="/committee" element={<Committee />} />



      <Route path="/event-details" element={<EventDetails />} />
      <Route path="/team-members" element={<TeamMembers />} />
      <Route path="/team-member-details" element={<TeamMemberDetails />} />
      <Route
        path="/students-registration"
        element={<StudentRegistration />}
      />
      <Route
        path="/instructor-registrations"
        element={<InstructorRegistrations />}
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-with-sidebar" element={<BlogWithSidebar />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>







 <Popup 
  isOpen={showPopup} 
  onClose={closePopup}
  title="शिक्षा महाकुंभ अभियान"
>
  <div className="welcome-content">
    <p className="welcome-text main">
      🎉 <strong>शिक्षा महाकुंभ अभियान</strong>
    </p>
    <p className="welcome-text secondary">
      5th Edition is going to be held at NIPER, Mohali from 31<sup>st</sup> October to 2<sup>nd</sup>November 2025.
    </p>
    
    <div className="features-list">
      <div className="feature-item">
        <span className="feature-icon">📚</span>
        <span>ज्ञानवर्धक सत्र</span>
      </div>
      <div className="feature-item">
        <span className="feature-icon">🎯</span>
        <span>विशेष आयोजन</span>
      </div>
      <div className="feature-item">
        <span className="feature-icon">🏆</span>
        <span>विशेषज्ञ संसाधन</span>
      </div>
    </div>
    
    <div className="popup-actions">
    <a 
  href="https://shikshamahakumb.co.in/registration" 
  className="btn-primary" 
  onClick={closePopup}
  style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
>
  <span>अभी जुड़ें</span>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path 
      d="M5 12h14m-7-7l7 7-7 7" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
</a>

      <button 
        onClick={closePopup}
        className="btn-secondary"
      >
        बाद में
      </button>
    </div>
  </div>
</Popup>


      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          animation: overlayFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 20px;
        }

        .popup-overlay.closing {
          animation: overlayFadeOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .popup-content {
          position: relative;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 24px;
          max-width: 520px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          animation: popupSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: center;
        }

        .popup-content.closing {
          animation: popupSlideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .popup-bg-decoration {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .decoration-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(240, 59, 59, 0.1), rgba(255, 165, 0, 0.1));
          animation: float 6s ease-in-out infinite;
        }

        .circle-1 {
          width: 120px;
          height: 120px;
          top: -60px;
          right: -60px;
          animation-delay: 0s;
        }

        .circle-2 {
          width: 80px;
          height: 80px;
          bottom: -40px;
          left: -40px;
          animation-delay: 2s;
        }

        .circle-3 {
          width: 60px;
          height: 60px;
          top: 50%;
          right: 20px;
          animation-delay: 4s;
        }

        .popup-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border: none;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
          color: #64748b;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .popup-close:hover {
          background: #f1f5f9;
          transform: scale(1.05);
          color: #f03b3b;
        }

        .popup-close:active {
          transform: scale(0.95);
        }

        .popup-inner {
          padding: 40px 32px 32px;
          position: relative;
          z-index: 1;
        }

        .popup-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .welcome-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, #fff7ed, #fed7aa);
          border-radius: 50%;
          margin-bottom: 16px;
          box-shadow: 0 8px 24px rgba(255, 165, 0, 0.2);
        }

        .popup-title {
          font-size: 28px;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
          background: linear-gradient(135deg, #1e293b, #334155);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .popup-body {
          text-align: center;
        }

        .welcome-content {
          animation: contentFadeIn 0.6s ease-out 0.2s both;
        }

        .welcome-text {
          font-size: 16px;
          line-height: 1.6;
          margin: 0 0 16px 0;
          color: #475569;
        }

        .welcome-text.main {
          font-size: 18px;
          color: #334155;
        }

        .welcome-text strong {
          color: #1e293b;
        }

        .features-list {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin: 32px 0;
          flex-wrap: wrap;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }

        .feature-icon {
          font-size: 24px;
          padding: 12px;
          background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 48px;
          min-height: 48px;
        }

        .popup-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 32px;
          align-items: center;
        }

        .btn-primary {
          background: linear-gradient(135deg, #f03b3b, #dc2626);
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(240, 59, 59, 0.3);
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 160px;
          justify-content: center;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(240, 59, 59, 0.4);
          background: linear-gradient(135deg, #dc2626, #b91c1c);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        .btn-secondary {
          background: transparent;
          color: #64748b;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-secondary:hover {
          color: #475569;
          background: rgba(0, 0, 0, 0.05);
        }

        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes overlayFadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes popupSlideIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes popupSlideOut {
          from {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          to {
            opacity: 0;
            transform: scale(0.9) translateY(-10px);
          }
        }

        @keyframes contentFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }

        /* Mobile Responsive */
        @media (max-width: 640px) {
          .popup-inner {
            padding: 32px 24px 24px;
          }

          .popup-title {
            font-size: 24px;
          }

          .welcome-text.main {
            font-size: 16px;
          }

          .features-list {
            gap: 16px;
          }

          .feature-item {
            font-size: 13px;
          }

          .feature-icon {
            font-size: 20px;
            min-width: 40px;
            min-height: 40px;
            padding: 8px;
          }

          .btn-primary {
            width: 100%;
            padding: 16px 24px;
          }

          .popup-close {
            width: 36px;
            height: 36px;
            top: 16px;
            right: 16px;
          }
        }

        @media (max-width: 480px) {
          .popup-overlay {
            padding: 16px;
          }

          .popup-content {
            border-radius: 20px;
          }

          .welcome-icon {
            width: 60px;
            height: 60px;
          }

          .circle-1 {
            width: 80px;
            height: 80px;
            top: -40px;
            right: -40px;
          }

          .circle-2 {
            width: 60px;
            height: 60px;
            bottom: -30px;
            left: -30px;
          }

          .circle-3 {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    










</>

  );
}

export default App;




