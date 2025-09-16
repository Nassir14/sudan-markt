// بيانات مبدئية
const samsungPhones = [
  {
    name: "Samsung Galaxy A03 Core",
    price: "4,774 جنيه سوداني",
    seller: "أحمد",
    contact: "0912000001",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a03-core-1.jpg"
  },
  {
    name: "Samsung Galaxy A03",
    price: "4,980 جنيه سوداني",
    seller: "محمود",
    contact: "0912000002",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a03-1.jpg"
  },
  {
    name: "Samsung Galaxy S22 Ultra",
    price: "69,754 جنيه سوداني",
    seller: "سامي",
    contact: "0912000003",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-ultra-5g-1.jpg"
  }
];

// دالة لعرض الهواتف
function displayPhones() {
  const container = document.getElementById("samsung-list");
  container.innerHTML = "";
  samsungPhones.forEach(phone => {
    const card = document.createElement("div");
    card.className = "phone-card";
    card.innerHTML = `
      <img src="${phone.image}" alt="${phone.name}">
      <h3>${phone.name}</h3>
      <p class="price">${phone.price}</p>
      <p>البائع: ${phone.seller}</p>
      <p>📞 ${phone.contact}</p>
    `;
    container.appendChild(card);
  });
}

// إضافة إعلان جديد
document.getElementById("add-phone-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const newPhone = {
    name: document.getElementById("phone-name").value,
    price: document.getElementById("phone-price").value + " جنيه سوداني",
    seller: document.getElementById("seller-name").value,
    contact: document.getElementById("seller-contact").value,
    image: document.getElementById("phone-image").value
  };
  samsungPhones.push(newPhone);
  displayPhones();
  this.reset();
});

// تشغيل أول مرة
displayPhones();
