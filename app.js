// حفظ الإعلانات في LocalStorage
const adsContainer = document.getElementById("ads");
const form = document.getElementById("vendorForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const ad = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      title: document.getElementById("title").value,
      price: document.getElementById("price").value,
      details: document.getElementById("details").value
    };

    let ads = JSON.parse(localStorage.getItem("ads")) || [];
    ads.push(ad);
    localStorage.setItem("ads", JSON.stringify(ads));

    alert("✅ تم نشر الإعلان بنجاح!");
    form.reset();
  });
}

if (adsContainer) {
  let ads = JSON.parse(localStorage.getItem("ads")) || [];
  if (ads.length === 0) {
    adsContainer.innerHTML = "<p>لا توجد إعلانات حالياً.</p>";
  } else {
    ads.forEach(ad => {
      const div = document.createElement("div");
      div.className = "ad";
      div.innerHTML = `<h3>${ad.title} - ${ad.price} ج</h3>
        <p>${ad.details}</p>
        <p>📞 ${ad.phone} - 👤 ${ad.name}</p>`;
      adsContainer.appendChild(div);
    });
  }
}
