// ==============================
// Mini Game
// ==============================

let score = 0;
let time = 30;

let intv;
let mv;

const d = document.getElementById("dot");
const s = document.getElementById("s");
const t = document.getElementById("t");
const a = document.getElementById("arena");

// ==============================
// Google Analytics Events
// ==============================

function track(eventName, data = {}) {

    if (typeof gtag === "function") {

        gtag("event", eventName, data);

    }

}

// ==============================
// Move Dot
// ==============================

function move() {

    d.style.left = Math.random() * (a.clientWidth - 40) + "px";

    d.style.top = Math.random() * (a.clientHeight - 40) + "px";

}

// ==============================
// Click Dot
// ==============================

d.onclick = () => {

    score++;

    s.textContent = score;

    move();

    clearInterval(mv);

    mv = setInterval(move, Math.max(250, 900 - score * 50));

};

// ==============================
// Start Game
// ==============================

function start() {

    track("game_start");

    score = 0;

    time = 30;

    s.textContent = 0;

    t.textContent = 30;

    move();

    clearInterval(intv);

    clearInterval(mv);

    mv = setInterval(move, 900);

    intv = setInterval(() => {

        time--;

        t.textContent = time;

        if (time <= 0) {

            clearInterval(intv);

            clearInterval(mv);

            track("game_over", {

                score: score

            });

            alert("Game Over!\n\nScore : " + score);

        }

    }, 1000);

}

start();

// ==============================
// Play Again Event
// ==============================

const playButton = document.querySelector("button");

if (playButton) {

    playButton.addEventListener("click", () => {

        track("play_again");

    });

}

// ==============================
// Scroll Tracking
// ==============================

let scrollTracked = false;

window.addEventListener("scroll", () => {

    if (scrollTracked) return;

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {

        track("scroll_100");

        scrollTracked = true;

    }

});

// ==============================
// Language Button (Demo)
// ==============================
const language = document.getElementById("language");

language.addEventListener("change", function () {

    const job = document.getElementById("job");

    if (this.value === "en") {

        job.textContent = "Control & Systems Engineer";

    }

    if (this.value === "ar") {

        job.textContent = "مهندس سيطرة ونظم";

    }

    if (this.value === "de") {

        job.textContent = "Control- und Systemingenieur";

    }

    if (this.value === "ku") {

        job.textContent = "ئەندازیاری کۆنترۆڵ و سیستەمەکان";

    }

});
    }

});
console.log("Portfolio v0.2 Alpha Loaded Successfully");
