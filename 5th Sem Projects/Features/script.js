// Smooth scroll for navigation links
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 20,  // Adjust for slight offset
        behavior: 'smooth',
      });
    });
  });

  
  ScrollReveal().reveal('.feature-section', {duration: 1000}, {interval: 2000}, {reset: true});