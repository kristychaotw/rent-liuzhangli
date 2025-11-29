import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";

// 定義 Props 的型別
interface VenueGalleryProps {
  images: string[];
}

const VenueGallery: React.FC<VenueGalleryProps> = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // 安全檢查：如果沒有圖片或是空陣列，就不渲染任何東西
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="gallery-section">
      <h4
        style={{
          borderBottom: "2px solid #eee",
          paddingBottom: "8px",
          marginTop: "30px",
        }}
      >
        場地實景 ({images.length}張)
      </h4>

      {/* 縮圖列表 */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-thumb"
            onClick={() => setSelectedImg(img)}
            // 如果圖片路徑有問題，使用背景圖可能會破圖，這裡維持背景圖寫法，但請確保 img 是字串
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="thumb-overlay">
              <ZoomIn color="white" size={20} />
            </div>
          </div>
        ))}
      </div>

      {/* 燈箱放大模式 */}
      {selectedImg && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImg(null)} // 點擊背景關閉
        >
          <button className="lightbox-close">
            <X size={32} color="white" />
          </button>

          <img
            src={selectedImg}
            alt="Enlarged view"
            className="lightbox-img"
            // 關鍵修正：點擊圖片時「阻止事件冒泡」，避免觸發背景的關閉事件
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default VenueGallery;
