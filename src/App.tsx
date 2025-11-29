import { useState } from "react";
import { Users, Zap, Info, X, ArrowRight } from "lucide-react";
import "./App.css";
import { venuesData } from "./data/venues";
import VenueGallery from "./components/VenueGallery";
import BuildingFilter from "./components/BuildingFilter";

const BUILDINGS = ["全部", "A棟", "B1棟", "B2棟"];
const Modal = ({ venue, onClose }: { venue: any; onClose: any }) => {
  if (!venue) return null;
  const handleBackdropClick = (e: any) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <X color="#333" />
        </button>
        <div
          className="modal-hero"
          style={{ backgroundImage: `url(${venue.img})` }}
        >
          <div className="modal-hero-text">
            <h2 style={{ margin: 0, fontSize: "2rem" }}>{venue.name}</h2>
            <p style={{ margin: 0, opacity: 0.9 }}>{venue.engName}</p>
          </div>
        </div>
        <div className="modal-body">
          <div>
            <div className="info-box">
              <div className="info-icon">
                <Users color={venue.color} />
              </div>
              <div>
                <small style={{ color: "#888" }}>容納人數</small>
                <div style={{ fontWeight: "bold" }}>{venue.capacity}</div>
              </div>
            </div>
            <div className="info-box">
              <div className="info-icon">
                <Zap color={venue.color} />
              </div>
              <div>
                <small style={{ color: "#888" }}>插座配置</small>
                <div style={{ fontWeight: "bold" }}>{venue.outlets}</div>
              </div>
            </div>
            <div className="info-box">
              <div className="info-icon">
                <Info color={venue.color} />
              </div>
              <div>
                <small style={{ color: "#888" }}>使用規範</small>
                <div style={{ fontWeight: "bold" }}>{venue.rules}</div>
              </div>
            </div>
            <button
              className="btn-book"
              style={{ backgroundColor: venue.color }}
              onClick={() => alert("連結到雲端")}
            >
              查看更多照片
            </button>
          </div>
          <div>
            <h4
              style={{
                borderBottom: "2px solid #eee",
                paddingBottom: "8px",
                marginTop: 0,
              }}
            >
              空間介紹
            </h4>
            <p style={{ lineHeight: 1.6, color: "#555" }}>{venue.desc}</p>
            <h4>設備清單</h4>
            <ul className="eq-list">
              {venue.equipment.map((item: any, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <VenueGallery images={venue.photos || [venue.img]} />
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = useState<any>(null);
  const [filter, setFilter] = useState("全部");
  const filteredVenues =
    filter === "全部"
      ? venuesData
      : venuesData.filter((v) => v.building === filter);
  return (
    <div className="container">
      <header>
        <h1>六張犁社會住宅・公共場地介紹手冊</h1>
        <p>Public Space Introduction Handbook</p>
      </header>
      <BuildingFilter
        categories={BUILDINGS}
        activeCategory={filter}
        onSelect={setFilter}
      />
      <div className="grid">
        {filteredVenues.map((v: any) => (
          <div key={v.id} className="card" onClick={() => setSelected(v)}>
            <div
              className="card-img"
              style={{ backgroundImage: `url(${v.img})` }}
            >
              <span className="tag" style={{ backgroundColor: v.color }}>
                {v.name.split(" - ")[1]}
              </span>
            </div>
            <div className="card-content">
              <div className="meta-info">
                <span className="meta-item">
                  <Users size={16} /> {v.capacity}
                </span>
                <span className="meta-item">
                  <Zap size={16} /> 插座充足
                </span>
              </div>
              <h3 style={{ marginTop: 0, marginBottom: "8px" }}>
                {v.name.split(" - ")[0]}
              </h3>
              <p style={{ margin: 0, color: "#888", fontSize: "0.9rem" }}>
                {v.name.split(" - ")[1]}
              </p>
              <div
                style={{
                  marginTop: "15px",
                  color: v.color,
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                查看詳情 <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && <Modal venue={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default App;
