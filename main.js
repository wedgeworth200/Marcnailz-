console.log('Hello World!');
// Typing effect
document.addEventListener("DOMContentLoaded", function () {
  const text = "Welcome to Bob's Beauty Salon";
  let i = 0;
  const heading = document.querySelector(".home h2");

  function typeWriter() {
    if (i < text.length) {
      heading.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 80);
    }
  }
  heading.innerHTML = "";
  typeWriter();
});

// Scroll to top button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.background = "#f08bb4";
scrollBtn.style.color = "white";
scrollBtn.style.border = "none";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.display = "none";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
document.body.appendChild(scrollBtn);

scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";

  // Change navbar background on scroll
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "#d86e97";
  } else {
    header.style.background = "#f08bb4";
  }

  // Fade-in effect on scroll
  document.querySelectorAll("section").forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
};
