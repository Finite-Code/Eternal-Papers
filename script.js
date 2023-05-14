document.addEventListener('DOMContentLoaded', function() {
  // JavaScript code to toggle sidebar on menu button click
  document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });

  const showMoreButton = document.getElementById('show-more-button');
  const additionalCards = document.querySelectorAll('.additional-card');

  showMoreButton.addEventListener('click', () => {
    const parent = document.getElementById('additional-cards-container');
    parent.classList.toggle('hide');

    // Change the text of the "Show More" button to "Show All" if all the cards are visible
    const hiddenCards = document.querySelectorAll('.card.hide');
    if (hiddenCards.length === 0) {
      showMoreButton.textContent = 'Show All';
    } else {
      showMoreButton.textContent = 'Show More';
    }
  })

  // Select the last three cards
  const lastThreeCards = document.querySelectorAll('.card:nth-child(n+4)');

  // Hide the last three cards initially
  lastThreeCards.forEach(card => {
    card.classList.add('hide');
  });
});
