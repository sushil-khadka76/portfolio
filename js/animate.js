
const scrollTranslate = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // Reset when not in view
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.translateScroll').forEach(div => {
  scrollTranslate.observe(div);
});