//Animated text
const animatedText = document.getElementById("animatedText");

animatedText.addEventListener('animationiteration', (ev) => {
  if (ev.animationName === "typing") {
    if (ev.target.innerHTML === "frontend") {
      ev.target.innerHTML = "backend";
    } else if (ev.target.innerHTML === "backend") {
      ev.target.innerHTML = "fullstack";
    } else if (ev.target.innerHTML === "fullstack") {
      ev.target.innerHTML = "frontend";
    }
  }
})

//Appear when scroll animations
function onVisible(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shown")
      observer.unobserve(entry.target)
    }
  });
}

const oberverOptions = {
  threshold: 0.5
}

const observer = new IntersectionObserver(onVisible, oberverOptions);

const hiddenElements = document.querySelectorAll(".animatedElement");

hiddenElements.forEach((el) => {
  observer.observe(el);
})

//lightSwitch animation
const lightSwitch = document.getElementById("lightSwitch")

function grabKnob() {
  lightSwitch.classList.add("grabbed")
}

function releaseKnob() {
  lightSwitch.classList.remove("grabbed")
  lightSwitch.classList.remove("pulled")
}

function pullKnob() {
  lightSwitch.classList.add("pulled")
}

function stopPullingKnob() {
  lightSwitch.classList.remove("pulled")
}