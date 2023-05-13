<!-- JavaScript code to toggle sidebar on menu button click -->
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

const showMoreBtn = document.querySelector('.show-more-btn');

showMoreBtn.addEventListener('click', function() {
  displayMoreWallpapers();
});

function displayMoreWallpapers() {
  const wallpapers = document.querySelectorAll('.wallpaper');

  // Update the number of wallpapers to display
  const numWallpapersToShow = 6;
  const numWallpapersDisplayed = document.querySelectorAll('.wallpaper:not(.hidden)').length;
  const numWallpapersToDisplay = Math.min(numWallpapersDisplayed + numWallpapersToShow, wallpapers.length);

  // Show the next set of wallpapers
  for (let i = numWallpapersDisplayed; i < numWallpapersToDisplay; i++) {
    wallpapers[i].classList.remove('hidden');
  }

  // Hide the "Show More" button if all wallpapers have been displayed
  if (numWallpapersToDisplay === wallpapers.length) {
    showMoreBtn.classList.add('hidden');
    document.querySelector('.show-all-btn').classList.remove('hidden');
  }
}
