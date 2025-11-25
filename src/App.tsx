import { useState, useEffect } from "react";
// 1. 引入 Lucide 圖示套件
import { Users, Zap, Info, X, ArrowRight } from "lucide-react";
import "./App.css";
import { venues } from "./data/venues.js";

// --- Modal 元件 (配合 Lucide 圖示調整) ---
const Modal = ({ venue, onClose }) => {
  if (!venue) return null;
  const handleBackdropClick = (e) => {
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
              onClick={() => alert("開啟照片連結！")}
            >
              更多照片
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
              {venue.equipment.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- App 元件 (依據你的要求修改) ---
const App = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <header>
        <h1>六張犁社會住宅・公共場地介紹手冊</h1>
        <p>Public Space Introduction Handbook</p>
      </header>

      {/* 
      <div className="menu">
        <button>全部</button>
        <button>A 棟</button>
        <button>B1 棟</button>
        <button>B2 棟</button>
      </div>
      */}

      <div className="grid">
        {venues.map((v) => (
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
                {/* 替換點 1: 使用 Lucide 的 Users */}
                <span className="meta-item">
                  <Users size={16} /> {v.capacity}
                </span>
                {/* 替換點 2: 使用 Lucide 的 Zap */}
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
                  display: "flex", // 為了讓箭頭對齊，加了 flex
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {/* 替換點 3: 使用 ArrowRight 替代 &rarr; 看起來更精緻 */}
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
