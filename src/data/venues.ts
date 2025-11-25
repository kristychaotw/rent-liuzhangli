// 1. 引入圖片 (這樣 Vite 才會把圖片打包進去)
// 注意路徑：.. 代表上一層
// import imgMinglun from "../assets/images/minglun.jpg";
// import imgHealth from "../assets/images/health.jpg";
// import imgYuanhe from "../assets/images/yuanhe.jpg";

// 如果你暫時還沒有本地圖片，想繼續用網路圖片，可以不用上面的 import，直接在 img 屬性放網址字串即可。

export const venuesData = [
  {
    id: 1,
    name: "臺北市明倫社宅 - 青創大廳",
    engName: "The Creative Hall",
    color: "#E63946",
    capacity: "40 - 60 人",
    outlets: "插座充足",
    equipment: ["無線麥克風 x2", "150吋投影幕", "4K投影機", "活動式白板"],
    rules: "可輕食飲料，禁明火",
    desc: "位於一樓的開放式大廳，擁有絕佳的採光與幾何美學設計。這裡是明倫社宅「青創」精神的核心，適合舉辦社區大會、文創市集或學術講座。",
    interact: "桌椅配置模擬器 (點擊切換佈局)",
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "臺北市健康社宅 - 共餐廚房",
    engName: "Community Kitchen",
    color: "#2A9D8F",
    capacity: "10 - 15 人",
    outlets: "插座充足",
    equipment: ["IH 感應爐", "旋風大烤箱", "雙門大冰箱", "基本鍋具組"],
    rules: "可開火(限電磁爐)，需清潔",
    desc: "保留了舊眷村的溫暖人情味，這個共餐廚房是青銀共居的橋樑。配備完整的中島與廚電，非常適合鄰居一起鑽研料理、舉辦節日派對。",
    interact: "360度櫥櫃導覽 (滑鼠懸停查看餐具)",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "土城員和社宅 - 藍色休憩室",
    engName: "Focus Room",
    color: "#457B9D",
    capacity: "4 - 6 人",
    outlets: "插座充足",
    equipment: ["55吋壁掛電視", "隔音玻璃", "智慧門鎖 (App解鎖)"],
    rules: "僅限瓶裝水，禁止飲食",
    desc: "漂浮在空中的智慧方舟。透過空中廊道連接，這個藍色休憩室專為專注工作設計，擁有絕佳的隔音與高速網路，是遠端工作者的首選。",
    interact: "即時噪音監測 (目前分貝: 35dB)",
    img: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80",
  },
];
