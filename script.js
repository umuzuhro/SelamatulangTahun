// ==========================
// HALAMAN ELEMENT
// ==========================
const welcome = document.getElementById("welcome");
const giftPage = document.getElementById("giftPage");
const wishPage = document.getElementById("wishPage");
const cakePage = document.getElementById("cakePage");

// tombol
const giftBtn = document.getElementById("giftBtn");
const wishBtn = document.getElementById("wishBtn");
const blowBtn = document.getElementById("blowBtn");

// lilin
const flame = document.getElementById("flame");

// input wish (kalau ada)
const makeWishInput = document.getElementById("makeWishInput");


// ==========================
// START: KE HALAMAN HADIAH
// ==========================
giftBtn.onclick = () => {
    welcome.classList.add("hidden");
    giftPage.classList.remove("hidden");

    // transisi ke halaman wish
    setTimeout(() => {
        giftPage.classList.add("hidden");
        wishPage.classList.remove("hidden");
    }, 2000);
};


// ==========================
// TOMBOL "MAKE A WISH"
// ==========================
wishBtn.onclick = () => {
    wishPage.classList.add("hidden");
    cakePage.classList.remove("hidden");

    // kalau ada input wish
    if (makeWishInput) {
        const wish = makeWishInput.value;

        if (wish.trim() !== "") {
            alert("Wish kamu: " + wish);
        }
    }
};


// ==========================
// BLOW CANDLE
// ==========================
blowBtn.onclick = () => {
    flame.style.opacity = "0";

    setTimeout(() => {
        alert("🎉 Selamat ulang tahun Muhammad Sultan! 🎂");
    }, 500);
};


// ==========================
// OPTIONAL: RESET (kalau mau ulang dari awal)
// ==========================
function resetCard() {
    cakePage.classList.add("hidden");
    welcome.classList.remove("hidden");

    flame.style.opacity = "1";

    if (makeWishInput) {
        makeWishInput.value = "";
    }
}
