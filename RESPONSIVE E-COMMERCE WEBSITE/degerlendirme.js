const ratings = document.querySelectorAll(".rating"); //Sayfadaki tüm derecelendirme öğelerini seçer
const ratingsContainer = document.querySelector(".ratings-container"); // Derecelendirme öğelerini içeren konteyneri seçer
const sendBtn = document.querySelector("#send"); //gönder butonuna seçer
const panel = document.querySelector("#panel"); //Sonuç panelini temsil eden bir html öğesini seçer



ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActives();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
        <p class="heart">💖</p>
        <strong>Teşekkürler! Siteyi arkadaşlarına önermeyi unutma :) </strong>
        <br>
        <strong></strong>
    `;
});

function removeActives() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}