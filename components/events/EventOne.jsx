import Link from "next/link";
import Image from "next/image";

const eventThumb1 = "/img/niper3.jpeg";
const eventThumb2 = "/img/jawahar.jpeg";
const eventThumb3 = "/img/iitjammu.jpeg";
const eventThumb4 = "/img/bhopal.jpeg";

export const EventOne = () => {
  // Events data array
  const eventsData = [
    {
      id: 1,
      title: "शिक्षा महाकुंभ 2025",
      description: "इस अभियान का पंचम संस्करण 31 अक्टूबर से 2 नवम्बर 2025 तक राष्ट्रीय औषधि शिक्षा एवं अनुसंधान संस्थान (NIPER) मोहाली में आयोजित किया जाएगा।",
      date: "31<sup>st</sup> October – 2<sup>nd </sup> November 2025",
      time: "09:30 am – 11:00 am",
      location: "	NIPER Mohali, Punjab",
      image: eventThumb1,
      isFeatured: true,
      link: "/upcoming-event/shiksha-mahakumbh-2025"
    },
    {
      id: 2,
      title: "International Conference on the Indian Education System for Global Development",
      description: "Deep dive into policy frameworks and educational reforms with industry experts and government officials.",
      date: "December 16 -17, 2024",
      time: "12:30 pm – 2:00 pm",
      location: "	 Kurukshetra University",
      image: eventThumb2,
      isFeatured: false,
      link: "/event/1"
    },
    {
      id: 3,
      title: "Role of Academic-driven Startups in Developing Economy of J&K",
      description: "Showcase of vocational training programs and apprenticeship opportunities for students and professionals.",
      date: "June 29-30, 2024",
      time: "10:00 am",
      location: "	National Institute of Technology Srinagar",
      image: eventThumb3,
      isFeatured: false,
      link: "/event/2"
    },
    {
      id: 4,
      title: "Role of Academic-driven Startups in Economy",
      description: "Exploring innovative technologies and digital tools revolutionizing modern education.",
      date: "December 20, 2023",
      time: "03:00 pm",
      location: "National Institute of Technology Kurukshetra",
      image: eventThumb4,
      isFeatured: false,
      link: "/event/3"
    },
    // {
    //   id: 5,
    //   title: "NEP 2020 Implementation Clinics",
    //   description: "Practical workshops on implementing National Education Policy 2020 in educational institutions.",
    //   date: "Feb 14, 2025",
    //   time: "11:00 am – 12:30 pm",
    //   location: "Training Lab, Bhopal Convention Centre",
    //   image: eventThumb2,
    //   isFeatured: false,
    //   link: "/event-details"
    // },
    // {
    //   id: 6,
    //   title: "Youth Entrepreneurship Pitch Day",
    //   description: "Platform for young entrepreneurs to showcase innovative educational solutions and startup ideas.",
    //   date: "Feb 14, 2025",
    //   time: "02:00 pm",
    //   location: "Startup Arena, Bhopal",
    //   image: eventThumb3,
    //   isFeatured: false,
    //   link: "/event-details"
    // }
  ];

  // Separate featured and regular events
  const featuredEvent = eventsData.find(event => event.isFeatured);
  const regularEvents = eventsData.filter(event => !event.isFeatured);

  // SVG Icons Components for reusability
  const CalendarIcon = () => (
    <svg
      className="td_accent_color"
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3308 11.7869H19.0049C19.3833 11.7869 19.6913 11.479 19.6913 11.1005V9.42642C19.6913 9.04795 19.3833 8.74003 19.0049 8.74003H17.3308C16.9523 8.74003 16.6444 9.04795 16.6444 9.42642V11.1005C16.6444 11.479 16.9523 11.7869 17.3308 11.7869ZM17.3475 9.44316H18.9881V11.0838H17.3475V9.44316ZM17.3308 16.24H19.0049C19.3833 16.24 19.6913 15.9321 19.6913 15.5536V13.8795C19.6913 13.5011 19.3833 13.1932 19.0049 13.1932H17.3308C16.9523 13.1932 16.6444 13.5011 16.6444 13.8795V15.5536C16.6444 15.9321 16.9523 16.24 17.3308 16.24ZM17.3475 13.8963H18.9881V15.5369H17.3475V13.8963ZM12.5535 11.7869H14.2276C14.606 11.7869 14.914 11.479 14.914 11.1005V9.42642C14.914 9.04795 14.606 8.74003 14.2276 8.74003H12.5535C12.175 8.74003 11.8671 9.04795 11.8671 9.42642V11.1005C11.8671 11.479 12.175 11.7869 12.5535 11.7869ZM12.5702 9.44316H14.2108V11.0838H12.5702V9.44316ZM4.67294 17.4375H2.99884C2.62037 17.4375 2.31245 17.7454 2.31245 18.1239V19.798C2.31245 20.1765 2.62037 20.4844 2.99884 20.4844H4.67294C5.05141 20.4844 5.35933 20.1765 5.35933 19.798V18.1239C5.35933 17.7454 5.05141 17.4375 4.67294 17.4375ZM4.6562 19.7812H3.01558V18.1406H4.6562V19.7812ZM4.67294 8.74003H2.99884C2.62037 8.74003 2.31245 9.04795 2.31245 9.42642V11.1005C2.31245 11.479 2.62037 11.7869 2.99884 11.7869H4.67294C5.05141 11.7869 5.35933 11.479 5.35933 11.1005V9.42642C5.35933 9.04791 5.05141 8.74003 4.67294 8.74003ZM4.6562 11.0838H3.01558V9.44316H4.6562V11.0838ZM12.5535 16.1356H14.2276C14.606 16.1356 14.914 15.8277 14.914 15.4493V13.7752C14.914 13.3967 14.606 13.0888 14.2276 13.0888H12.5535C12.175 13.0888 11.8671 13.3967 11.8671 13.7752V15.4493C11.8671 15.8277 12.175 16.1356 12.5535 16.1356ZM12.5702 13.7919H14.2108V15.4325H12.5702V13.7919ZM20.0404 1.60659H18.5373V1.06908C18.5373 0.479578 18.0578 0 17.4683 0H17.3068C16.7174 0 16.2378 0.479578 16.2378 1.06908V1.60659H5.76592V1.06908C5.76592 0.479578 5.28634 0 4.69684 0H4.53541C3.94591 0 3.46633 0.479578 3.46633 1.06908V1.60659H1.96328C0.992734 1.60659 0.203125 2.3962 0.203125 3.36675V22.2422C0.203125 23.2115 0.991656 24 1.96094 24H20.0429C21.0122 24 21.8007 23.2115 21.8007 22.2422V3.36675C21.8006 2.3962 21.011 1.60659 20.0404 1.60659Z"
        fill="currentColor"
      />
    </svg>
  );

  const ClockIcon = () => (
    <svg
      className="td_accent_color"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M12 24C18.616 24 24 18.616 24 12C24 5.38401 18.6161 0 12 0C5.38394 0 0 5.38401 0 12C0 18.616 5.38401 24 12 24ZM12 1.59997C17.736 1.59997 22.4 6.26396 22.4 12C22.4 17.736 17.736 22.4 12 22.4C6.26396 22.4 1.59997 17.736 1.59997 12C1.59997 6.26396 6.26402 1.59997 12 1.59997Z"
          fill="currentColor"
        />
        <path
          d="M15.4992 15.8209C15.6472 15.9408 15.8232 15.9969 15.9992 15.9969C16.2352 15.9969 16.4672 15.8929 16.6232 15.6969C16.8992 15.3529 16.8431 14.8489 16.4992 14.5729L12.7992 11.6129V5.59686C12.7992 5.15686 12.4392 4.79688 11.9992 4.79688C11.5592 4.79688 11.1992 5.15686 11.1992 5.59686V11.9969C11.1992 12.2409 11.3112 12.4689 11.4992 12.6209L15.4992 15.8209Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );

  const LocationIcon = () => (
    <svg
      className="td_accent_color"
      width="16"
      height="22"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.0004 0.5C3.86669 0.5 0.554996 3.86526 0.500458 7.98242C0.48345 9.42271 0.942105 10.7046 1.56397 11.8232C2.76977 13.9928 4.04435 16.8182 5.32856 19.4639C5.9286 20.7002 6.89863 21.5052 8.0004 21.5C9.10217 21.4948 10.0665 20.6836 10.6575 19.4404C11.9197 16.7856 13.1685 13.9496 14.4223 11.835C15.1136 10.6691 15.4653 9.3606 15.4974 8.01758C15.5966 3.86772 12.1342 0.5 8.0004 0.5ZM8.0004 2.00586C11.3235 2.00586 14.0821 4.6775 14.0033 7.97363C13.9749 9.08002 13.6796 10.1416 13.1273 11.0732C11.7992 13.3133 10.5449 16.1706 9.2954 18.7988C8.85773 19.7191 8.35538 19.9924 7.98864 19.9941C7.62183 19.9959 7.12572 19.7246 6.68204 18.8105C5.41121 16.1923 4.12648 13.3534 2.87056 11.0938C2.32971 10.121 1.9798 9.11653 1.9946 8.00586C2.03995 4.67555 4.67723 2.00586 8.0004 2.00586ZM8.0004 4.25C5.94024 4.25 4.25034 5.94266 4.25034 8.00586C4.25034 10.0691 5.94024 11.75 8.0004 11.75C10.0605 11.75 11.7503 10.0691 11.7503 8.00586C11.7503 5.94266 10.0605 4.25 8.0004 4.25ZM8.0004 5.74414C9.25065 5.74414 10.2446 6.75372 10.2446 8.00586C10.2446 9.258 9.25065 10.2559 8.0004 10.2559C6.7501 10.2559 5.75331 9.258 5.75331 8.00586C5.75331 6.75372 6.7501 5.74414 8.0004 5.74414Z"
        fill="currentColor"
      />
    </svg>
  );

  // Featured Event Component
  const FeaturedEventCard = ({ event }) => (
    <div className="td_card td_style_1 td_radius_5">
      <Link href={event.link} className="td_card_thumb td_mb_30 d-block">
        <Image src={event.image} alt={event.title} width={400} height={250} />
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
        <span className="td_card_location td_medium td_white_color td_fs_18">
          <LocationIcon />
          {event.location}
        </span>
      </Link>
      <div className="td_card_info">
        <div className="td_card_info_in">
          <div className="td_mb_30">
            <ul className="td_card_meta td_mp_0 td_fs_18 td_medium td_heading_color">
              <li>
                <CalendarIcon />
                
                <span
                dangerouslySetInnerHTML={{ __html: event.date }}
                ></span>
              </li>
              <li>
                <ClockIcon />
                <span>{event.time}</span>
              </li>
            </ul>
          </div>
          <h2 className="td_card_title td_fs_32 td_semibold td_mb_20">
            <Link href={event.link}>{event.title}</Link>
          </h2>
          <p className="td_mb_30 td_fs_18">{event.description}</p>
          <Link
            href={event.link}
            className="td_btn td_style_1 td_radius_10 td_medium"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>Learn More</span>
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1575 4.34302L3.84375 15.6567"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );

  // Regular Event Component
  const RegularEventCard = ({ event }) => (
    <div className="td_card td_style_1 td_type_1">
      <Link href={event.link} style={{ height:160 }} className="td_card_thumb d-block">
        <Image src={event.image} alt={event.title} width={200} height={120} />
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </Link>
      <div className="td_card_info">
        <div className="td_card_info_in">
          <div className="td_mb_20">
            <ul className="td_card_meta td_mp_0 td_medium td_heading_color">
              <li>
                <CalendarIcon />
                <span>{event.date}</span>
              </li>
              <li>
                <ClockIcon />
                <span>{event.time}</span>
              </li>
            </ul>
          </div>
          <h2 className="td_card_title td_fs_20 td_semibold td_mb_20">
            <Link href={event.link}>{event.title}</Link>
          </h2>
          <span className="td_card_location td_medium td_heading_color">
            <LocationIcon />
            {event.location}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        {/* Section Header */}
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            Program Schedule
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Shiksha Mahakumbh 2025 – Upcoming Events
            <br />
            Hosted by Shiksha Mahakumbh
          </h2>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        {/* Events Grid */}
        <div className="row td_gap_y_30">
          {/* Featured Event */}
          {featuredEvent && (
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <FeaturedEventCard event={featuredEvent} />
            </div>
          )}

          {/* Regular Events */}
          <div
            className="col-lg-6 td_gap_y_30 flex-wrap d-flex wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            {regularEvents.map((event, index) => (
              <RegularEventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};