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
    const facts = [
      "My Mom and tita (for people who don't understand Tagalog it's aunts) used to know about coding HTML in college. But today she forgot how to code.",
      "One of my relatives worked (probably one of the animators) in Jujutsu Kaisen. I don't watch it, but it's cool to have a relative in it.",
      "I'm from the Philippines but I barely speak my native language Tagalog.",
      "My tita Camille knows and is a teacher of Taekwondo, which is a type of martial arts. My older brother is currently learning Taekwondo (I'm scared)."
    ];
    document.getElementById("factA").innerHTML = facts[Math.floor(Math.random() * facts.length)]; // ===== Audio pause/resume when tab hidden =====
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
    const facts = [
      "My Mom and tita (for people who don't understand Tagalog it's aunts) used to know about coding HTML in college. But today she forgot how to code.",
      "One of my relatives worked (probably one of the animators) in Jujutsu Kaisen. I don't watch it, but it's cool to have a relative in it.",
      "I'm from the Philippines but I barely speak my native language Tagalog.",
      "My tita Camille knows and is a teacher of Taekwondo, which is a type of martial arts. My older brother is currently learning Taekwondo (I'm scared)."
    ];
    document.getElementById("factA").innerHTML = facts[Math.floor(Math.random() * facts.length)];
