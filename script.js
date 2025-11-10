// Function to check if a section is in the viewport
function isSectionInViewport(section) {
  const rect = section.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0
  );
}


// Function to handle fading in the sections
function fadeInSections() {
const sections = document.querySelectorAll('.fade-section');
sections.forEach(section => {
  if (isSectionInViewport(section)) {
  section.style.opacity = 1;
  section.style.transform = 'translateY(0)';
  }
});
}

// Initial fade-in on page load
fadeInSections();

// Attach event listener to scroll
window.addEventListener('scroll', fadeInSections);