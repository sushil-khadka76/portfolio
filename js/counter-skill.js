



document.addEventListener('DOMContentLoaded', function () {
  const skillCircles = document.querySelectorAll('.skill-circle');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const circle = entry.target;
      const percent = parseInt(circle.getAttribute('data-percent'));
      const percentElement = circle.querySelector('.percentage');
      const circleFill = circle.querySelector('.circle-fill');
      
      // Reset animation state when element leaves viewport
      if (!entry.isIntersecting) {
        percentElement.textContent = '0%';
        circleFill.style.strokeDashoffset = '100';
        return;
      }

      // Only animate when entering viewport
      if (entry.isIntersecting) {
        const duration = Math.max(500, percent * 20); // Minimum 0.5 second
        let start = null;
        let animationId;

        function animate(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const currentPercent = Math.min((progress / duration) * percent, percent);

          percentElement.textContent = Math.floor(currentPercent) + '%';
          const offset = 100 - currentPercent;
          circleFill.style.strokeDashoffset = offset;

          if (progress < duration) {
            animationId = requestAnimationFrame(animate);
          } else {
            percentElement.textContent = percent + '%';
            circleFill.style.strokeDashoffset = 100 - percent;
          }
        }

        // Cancel any existing animation before starting new one
        cancelAnimationFrame(animationId);
        animationId = requestAnimationFrame(animate);
        
        // Optional: Unobserve after animation completes if you only want it to run once
        // observer.unobserve(circle);
      }
    });
  }, {
    threshold: 0.3, // When at least 30% of the element is visible
    rootMargin: '0px 0px -100px 0px' // Negative bottom margin to trigger a bit earlier
  });

  // Initialize all circles to 0
  skillCircles.forEach(circle => {
    const percentElement = circle.querySelector('.percentage');
    const circleFill = circle.querySelector('.circle-fill');
    percentElement.textContent = '0%';
    circleFill.style.strokeDashoffset = '100';
    observer.observe(circle);
  });
});