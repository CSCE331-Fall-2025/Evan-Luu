const sheet1 = document.getElementById("stylesheet1");
const sheet2 = document.getElementById("stylesheet2");
const toggle = document.getElementById("toggleTheme");

function setTheme(theme) {
  if (theme === "theme2") {
    sheet1.disabled = true;
    sheet2.disabled = false;
  } else {
    sheet1.disabled = false;
    sheet2.disabled = true;
  }
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme("theme1"); 
}

toggle.addEventListener("click", () => {
  if (sheet2.disabled) {
    setTheme("theme2");
    localStorage.setItem("theme", "theme2");
  } else {
    setTheme("theme1");
    localStorage.setItem("theme", "theme1");
  }
});

const menuToggle = document.getElementById("menuToggle");
const buttonPanel = document.getElementById("buttonPanel");

menuToggle.addEventListener("click", () => {
  if (buttonPanel.style.display === "none" || buttonPanel.style.display === "") {
    buttonPanel.style.display = "block";  
  } else {
    buttonPanel.style.display = "none";   
  }
});

const myAudio = document.getElementById("myAudio");

  function playAudio() {
    myAudio.play();
  }

  function pauseAudio() {
    myAudio.pause();
  }

