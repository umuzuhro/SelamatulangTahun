/* ==========================================
        SCRIPT.JS PART 1
    WELCOME → GIFT → BIRTHDAY
========================================== */

// ==========================
// ELEMENT
// ==========================

const pages = document.querySelectorAll(".page");

const welcomePage = document.getElementById("welcomePage");
const giftPage = document.getElementById("giftPage");
const birthdayPage = document.getElementById("birthdayPage");

const welcomeGif = document.getElementById("welcomeGif");
const giftBox = document.getElementById("giftBox");

const birthdayTitle = document.getElementById("birthdayTitle");
const birthdayName = document.getElementById("birthdayName");
const birthdayDate = document.getElementById("birthdayDate");

const birthdayMusic = document.getElementById("birthdayMusic");
const nextToWishBtn = document.getElementById("nextToWishBtn");

// ==========================
// SHOW PAGE
// ==========================

function showPage(pageId) {

    pages.forEach(page => {
        page.classList.remove("active");
        page.classList.add("hidden");
    });

    const target = document.getElementById(pageId);

    if (target) {
        target.classList.remove("hidden");
        target.classList.add("active");
    }

}

// ==========================
// START
// ==========================

window.addEventListener("load", () => {

    showPage("welcomePage");

});

// ==========================
// WELCOME PAGE
// ==========================

welcomeGif.addEventListener("click", () => {

    showPage("giftPage");

});

// ==========================
// GIFT PAGE
// ==========================

giftBox.addEventListener("click", () => {

    giftBox.classList.add("open");

    createConfetti();
    createTulipRain();
    createSparkles();

    setTimeout(() => {

        showPage("birthdayPage");

        playBirthdayAnimation();

    }, 2200);

});

// ==========================
// BIRTHDAY PAGE
// ==========================

function playBirthdayAnimation() {

    birthdayTitle.classList.add("show");
    birthdayName.classList.add("show");
    birthdayDate.classList.add("show");

    if (birthdayMusic) {

        birthdayMusic.volume = 0.4;

        birthdayMusic.play().catch(() => {});

    }

    if (nextToWishBtn) {

        nextToWishBtn.style.display = "inline-block";

    }

}

// ==========================
// EFFECT (sementara)
// ==========================

function createConfetti() {

    console.log("Confetti Effect");

}

function createTulipRain() {

    console.log("Tulip Rain");

}

function createSparkles() {

    console.log("Sparkle Effect");

}
/* ==========================================
        SCRIPT.JS PART 2
        WISH → CAKE
========================================== */

// ==========================
// ELEMENT
// ==========================

const wishPage = document.getElementById("wishPage");
const cakePage = document.getElementById("cakePage");

const wishInput = document.getElementById("wishInput");
const wishBtn = document.getElementById("wishBtn");
const wishResult = document.getElementById("wishResult");

// ==========================
// BIRTHDAY → WISH
// ==========================

if (nextToWishBtn) {

    nextToWishBtn.addEventListener("click", () => {

        showPage("wishPage");

    });

}

// ==========================
// SEND WISH
// ==========================

wishBtn.addEventListener("click", () => {

    const wish = wishInput.value.trim();

    if (wish === "") {

        alert("Tulis harapan dulu yaa 🤍");

        wishInput.focus();

        return;

    }

    wishResult.innerHTML =
        "🤍 Harapanmu sudah terkirim.<br>Semoga semua doa baikmu dikabulkan. Aamiin.";

    wishBtn.disabled = true;

    wishInput.disabled = true;

    setTimeout(() => {

        showPage("cakePage");

    }, 2500);

});

// ==========================
// ENTER KEY
// ==========================

wishInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter" && !e.shiftKey) {

        e.preventDefault();

        wishBtn.click();

    }

});
/* ==========================================
        SCRIPT.JS PART 3
        CAKE → GIFT QUESTION
========================================== */

// ==========================
// ELEMENT
// ==========================

const flame = document.getElementById("flame");
const smoke = document.getElementById("smoke");

const blowBtn = document.getElementById("blowBtn");

// ==========================
// BLOW CANDLE
// ==========================

blowBtn.addEventListener("click", () => {

    // Matikan api
    if (flame) {

        flame.style.opacity = "0";

        flame.style.transform = "scale(.2)";

    }

    // Munculkan asap
    if (smoke) {

        smoke.classList.add("show");

    }

    // Tombol tidak bisa diklik lagi
    blowBtn.disabled = true;

    blowBtn.innerHTML = "🎉 Berhasil!";

    // Pindah halaman
    setTimeout(() => {

        showPage("giftQuestionPage");

    }, 2500);

});
/* ==========================================
        SCRIPT.JS PART 4
        GIFT QUESTION
========================================== */

// ==========================
// ELEMENT
// ==========================

const yesGiftBtn = document.getElementById("yesGiftBtn");
const noGiftBtn = document.getElementById("noGiftBtn");

const tryAgainBtn = document.getElementById("tryAgainBtn");

// ==========================
// YES
// ==========================

yesGiftBtn.addEventListener("click", () => {

    showPage("chooseGiftPage");

});

// ==========================
// NO
// ==========================

noGiftBtn.addEventListener("click", () => {

    showPage("noGiftPage");

});

// ==========================
// TRY AGAIN
// ==========================

tryAgainBtn.addEventListener("click", () => {

    showPage("giftQuestionPage");

});
/* ==========================================
        SCRIPT.JS PART 5
        CHOOSE GIFT
========================================== */

// ==========================
// ELEMENT
// ==========================

const letterBox = document.getElementById("letterBox");
const surpriseBox = document.getElementById("surpriseBox");

// ==========================
// LETTER
// ==========================

if (letterBox) {

    letterBox.addEventListener("click", () => {

        showPage("letterPage");

    });

}

// ==========================
// SURPRISE
// ==========================

if (surpriseBox) {

    surpriseBox.addEventListener("click", () => {

        showPage("surprisePage");

    });

}

// ==========================
// HOVER EFFECT
// ==========================

document.querySelectorAll(".choose-box").forEach(box => {

    box.addEventListener("mouseenter", () => {

        box.style.transform = "scale(1.05)";

    });

    box.addEventListener("mouseleave", () => {

        box.style.transform = "scale(1)";

    });

});
/* ==========================================
        SCRIPT.JS PART 6
        LETTER PAGE
========================================== */

// ==========================
// ELEMENT
// ==========================

const envelope = document.getElementById("envelope");
const letterContent = document.getElementById("letterContent");
const typingLetter = document.getElementById("typingLetter");
const closeLetterBtn = document.getElementById("closeLetterBtn");

// ==========================
// LETTER TEXT
// ==========================

const letterText = `Hai Sultan... 🤍

Selamat ulang tahun yaa.

Semoga di usia yang baru ini kamu selalu diberi kesehatan, kebahagiaan, dimudahkan semua urusanmu, dilancarkan rezekinya, dan semua cita-cita yang sedang kamu perjuangkan bisa tercapai satu per satu.

Terima kasih sudah menjadi orang baik.

Jangan terlalu keras sama diri sendiri ya. Kalau lagi capek, istirahat. Kalau lagi sedih, semoga selalu ada alasan untuk tersenyum lagi.

Semoga tahun ini menjadi tahun yang jauh lebih indah daripada tahun sebelumnya.

Sekali lagi...

Selamat Ulang Tahun, Muhammad Sultan Aminuddin Masfuk. 🌷🤍`;

// ==========================
// OPEN LETTER
// ==========================

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.add("hidden");

        letterContent.classList.remove("hidden");

        typingLetter.innerHTML = "";

        typeLetter();

    });

}

// ==========================
// TYPING EFFECT
// ==========================

let letterIndex = 0;

function typeLetter() {

    if (letterIndex < letterText.length) {

        typingLetter.innerHTML += letterText.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter, 35);

    }

}

// ==========================
// CLOSE LETTER
// ==========================

if (closeLetterBtn) {

    closeLetterBtn.addEventListener("click", () => {

        letterIndex = 0;

        typingLetter.innerHTML = "";

        letterContent.classList.add("hidden");

        envelope.classList.remove("hidden");

        showPage("chooseGiftPage");

    });

}
/* ==========================================
        SCRIPT.JS PART 7
        SURPRISE → ENDING
========================================== */

// ==========================
// ELEMENT
// ==========================

const typingGiftText = document.getElementById("typingGiftText");
const giftForm = document.getElementById("giftForm");

const shirtSize = document.getElementById("shirtSize");
const hoodieSize = document.getElementById("hoodieSize");
const sandalSize = document.getElementById("sandalSize");

const sendGiftBtn = document.getElementById("sendGiftBtn");

const endingPage = document.getElementById("endingPage");
const replayBtn = document.getElementById("replayBtn");

const giftMessage = `Aku sebenarnya bingung mau ngasih hadiah apa...

Akhirnya kepikiran pengen ngasih sesuatu yang bisa dipakai.

Tapi aku belum tahu ukuranmu. 🥹

Kalau berkenan, boleh isi ukuran baju, sweater, dan sandal yaa.

Makasih banyak yaa 🤍🌷`;

// ==========================
// TYPING EFFECT
// ==========================

let giftIndex = 0;

function typeGiftMessage() {

    typingGiftText.innerHTML = "";

    giftIndex = 0;

    function typing() {

        if (giftIndex < giftMessage.length) {

            typingGiftText.innerHTML += giftMessage.charAt(giftIndex);

            giftIndex++;

            setTimeout(typing, 30);

        }

    }

    typing();

}

// ==========================
// OPEN SURPRISE
// ==========================

if (surpriseBox) {

    surpriseBox.addEventListener("click", () => {

        showPage("surprisePage");

        typeGiftMessage();

    });

}

// ==========================
// SEND FORM
// ==========================

giftForm.addEventListener("submit", function(e){

    e.preventDefault();

    if(
        shirtSize.value.trim()==="" ||
        hoodieSize.value.trim()==="" ||
        sandalSize.value.trim()===""
    ){

        alert("Isi semuanya dulu yaa 🤍");

        return;

    }

    sendGiftBtn.disabled = true;

    sendGiftBtn.innerHTML = "💖 Terima Kasih";

    setTimeout(()=>{

        showPage("endingPage");

    },1800);

});

// ==========================
// REPLAY
// ==========================

replayBtn.addEventListener("click",()=>{

    location.reload();

});
