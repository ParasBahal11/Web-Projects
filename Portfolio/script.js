const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});

// Show money popup on hover over project card
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
  const moneyPopup = card.querySelector('.money-popup');

  // Show popup when mouse enters the card
  card.addEventListener('mouseenter', () => {
    moneyPopup.style.display = 'block';
    card.classList.add('shaking'); // Add shaking animation
  });

  // Hide popup when mouse leaves the card
  card.addEventListener('mouseleave', () => {
    moneyPopup.style.display = 'none';
    card.classList.remove('shaking'); // Remove shaking animation
  });

  // Redirect to project link when clicking the card
  card.addEventListener('click', () => {
    const projectLink = card.getAttribute('data-link');
    window.open(projectLink, '_blank');
  });
});

// Toggle social platforms visibility
function toggleSocialPlatforms() {
  const socialContainer = document.getElementById('social-platforms');
  if (socialContainer.style.display === 'none' || socialContainer.style.display === '') {
    socialContainer.style.display = 'flex';
  } else {
    socialContainer.style.display = 'none';
  }
}