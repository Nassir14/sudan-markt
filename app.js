const phones = [
  { name: "Samsung Galaxy S23", price: "500,000 SDG" },
  { name: "iPhone 13 Pro", price: "650,000 SDG" },
  { name: "Xiaomi Redmi Note 12", price: "250,000 SDG" }
];

const ads = [];

function loadPhones() {
  const phoneList = document.getElementById("phone-list");
  phoneList.innerHTML = "";
  phones.forEach(p => {
    const item = document.createElement("p");
    item.textContent = `${p.name} - ${p.price}`;
    phoneList.appendChild(item);
  });
}

function addAd() {
  const adText = prompt("أدخل تفاصيل الموبايل المعروض للبيع:");
  if (adText) {
    ads.push(adText);
    renderAds();
  }
}

function renderAds() {
  const adsDiv = document.getElementById("ads");
  adsDiv.innerHTML = "";
  ads.forEach(a => {
    const item = document.createElement("p");
    item.textContent = a;
    adsDiv.appendChild(item);
  });
}

window.onload = () => {
  loadPhones();
  renderAds();
};
