const spots = [
  {
    name: "桂浜",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Katsurahama.jpg",
    description: "坂本龍馬像で有名な高知の名所。"
  },
  {
    name: "ひろめ市場",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Hirome_Market.jpg",
    description: "カツオのたたきが楽しめる人気スポット。"
  },
  {
    name: "仁淀川",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Niyodo_River.jpg",
    description: "仁淀ブルーと呼ばれる美しい清流。"
  }
];

const container = document.getElementById("spot-list");

spots.forEach(spot => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${spot.name}</h2>
    <img src="${spot.image}" alt="${spot.name}">
    <p>${spot.description}</p>
    <button onclick="alert('${spot.name}をチェック！')">詳細を見る</button>
  `;

  container.appendChild(card);
});





