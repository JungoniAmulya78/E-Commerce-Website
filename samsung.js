// Change main product image on thumbnail click
function changeImage(img) {
  document.getElementById("main-img").src = img.src;
}

// Tabs switching
function openTab(tabId) {
  document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));

  document.querySelector(`[onclick="openTab('${tabId}')"]`).classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

// Add to cart & buy now
document.querySelectorAll(".cart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("✅ Item added to cart!");
  });
});
document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("🛒 Proceeding to checkout...");
  });
});
