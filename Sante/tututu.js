document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.addEventListener('click', function() {
      cardContainer.classList.toggle('flipped');
    });
  });