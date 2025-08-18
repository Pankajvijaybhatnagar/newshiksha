import React from "react";

const demoImages = [
  "https://via.placeholder.com/320x220?text=Demo+1",
  "https://via.placeholder.com/320x220?text=Demo+2",
  "https://via.placeholder.com/320x220?text=Demo+3"
];

function DemoImageSlider() {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % demoImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ width: "320px", height: "220px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 16px rgba(137,12,37,0.12)", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src={demoImages[current]} alt={`Demo ${current + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}

const demoItems = [
  {
    name: "Demo Bag",
    price: 499,
    description: "Durable, branded backpack for demo. Perfect for students and professionals attending Shiksha Mahakhumbh. Limited stock!",
    promo: "Hurry up! Grab your exclusive Shiksha Mahakhumbh bag before it's gone."
  },
  {
    name: "Demo Mug",
    price: 249,
    description: "Ceramic mug for demo purposes. Start your day with Shiksha Mahakhumbh spirit. Only a few left!",
    promo: "Don't miss out! Grab your Shiksha Mahakhumbh mug and celebrate every sip."
  },
  {
    name: "Demo T-Shirt",
    price: 399,
    description: "Comfortable demo t-shirt. Show your pride at Shiksha Mahakhumbh. Fast selling!",
    promo: "Hurry! Limited edition Shiksha Mahakhumbh t-shirts available now."
  },
  {
    name: "Demo Cap",
    price: 199,
    description: "Stylish demo cap for everyday use. Stand out at Shiksha Mahakhumbh. Grab yours today!",
    promo: "Act fast! Shiksha Mahakhumbh caps are flying off the shelves."
  }
];

export const Sale = () => (
  <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
    <h2 style={{ textAlign: "center", color: "#890c25", fontWeight: "bold", fontSize: "2.2rem", marginBottom: "40px" }}>
      Demo Merchandise Sale
    </h2>
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "32px"
    }}>
      {demoItems.map((item, idx) => (
        <div key={idx} className="sale-item-row" style={{
          display: "flex",
          flexDirection: "row",
          flex: "1 1 700px",
          minWidth: "320px",
          maxWidth: "900px",
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(137,12,37,0.18)",
          border: "2px solid #e94e77",
          margin: "32px 0",
          overflow: "hidden",
          transition: "box-shadow 0.3s",
          position: "relative",
          width: "100%"
        }}>
          <div style={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f7f7f7",
            minHeight: "220px"
          }}>
            <DemoImageSlider />
          </div>
          <div style={{
            flex: "1",
            padding: "40px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <h3 style={{ color: "#e94e77", fontWeight: "bold", fontSize: "1.7rem", marginBottom: "18px", letterSpacing: "1px" }}>{item.name}</h3>
            <p style={{ color: "#444", fontSize: "1.18rem", marginBottom: "18px", textAlign: "center", lineHeight: "1.6" }}>{item.description}</p>
            <div style={{ color: "#890c25", fontWeight: "bold", fontSize: "1.3rem", marginBottom: "18px", letterSpacing: "0.5px" }}>
              ₹{item.price}
            </div>
            <div style={{ color: "#e94e77", fontWeight: "bold", fontSize: "1.1rem", marginBottom: "12px", textAlign: "center", background: "#fff5f8", borderRadius: "8px", padding: "10px 18px", boxShadow: "0 2px 8px rgba(137,12,37,0.08)" }}>
              {item.promo}
            </div>
            <button style={{
              padding: "14px 40px",
              background: "linear-gradient(90deg, #e94e77 0%, #890c25 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "1.15rem",
              cursor: "pointer",
              marginTop: "18px",
              boxShadow: "0 2px 8px rgba(137,12,37,0.10)",
              transition: "background 0.3s"
            }}>
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
    <style>{`
      @media (max-width: 900px) {
        .sale-item-row {
          flex-direction: column !important;
          max-width: 98vw !important;
        }
      }
      @media (max-width: 600px) {
        .sale-item-row {
          flex-direction: column !important;
          min-width: 98vw !important;
          max-width: 98vw !important;
          margin: 16px 0 !important;
          border-radius: 12px !important;
          box-shadow: 0 4px 16px rgba(137,12,37,0.10) !important;
        }
        .sale-item-row > div {
          padding: 16px 8px !important;
        }
        .sale-item-row h3 {
          font-size: 1.1rem !important;
        }
        .sale-item-row p, .sale-item-row div {
          font-size: 0.98rem !important;
        }
        .sale-item-row button {
          padding: 10px 18px !important;
          font-size: 1rem !important;
        }
      }
    `}</style>
  </div>
);