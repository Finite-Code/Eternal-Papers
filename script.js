<!-- JavaScript code to toggle sidebar on menu button click -->
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

const sidebarToggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggleBtn.addEventListener('click', function() {
  console.log('Sidebar button clicked');
  sidebar.classList.toggle('show-sidebar');
});
