// ===== Audio pause/resume when tab hidden =====
const audio = document.getElementById('mpp3');
let wasPlaying = false;

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    wasPlaying = !audio.paused;
    audio.pause();
  } else if (wasPlaying) {
    audio.play();
  }
});

// ===== Random words display =====
const cropWords = [
  'also try <a style="color:rgb(201, 214, 205); font-size:50px; font-family:elephant;" href="https://burnedwebsite.vercel.app">burnedpopcorn!</a> its a better website than here and i like his crap',
  "THE REASON WHY YOUR COMPUTER BURNS",
  "THE CRAPPIEST WEBSITE TO MODERN DAY",
  "the person who made this website has bad font choices",
  "TRY MY MUSIC, ITS NOT BAD (i'm lying)",
  "THIS WEBSITE IS ABSOLUTELY HOT GARBAGE",
  "THE PERSON USING THIS WEBSITE IS A WEIRDO"
];
document.getElementById("crop").innerHTML = cropWords[Math.floor(Math.random() * cropWords.length)];

// ===== Replace 'to' with '2' safely =====
function replaceTo() { 
  const elems = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
  elems.forEach(el => {
    el.innerHTML = el.innerHTML.replace(/\bto\b/gi, "2");
  });
}

// ===== Random personal facts =====
