<!-- JavaScript code to toggle sidebar on menu button click -->
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

const showMoreButton = document.getElementById('show-more-button');
const additionalCards = document.querySelectorAll('.additional-card');

showMoreButton.addEventListener('click', () => {
  const parent = document.getElementById('additional-cards-container');
  parent.classList.toggle('hide');
})
