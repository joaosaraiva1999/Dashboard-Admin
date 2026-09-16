
// Lucide Function
lucide.createIcons();
// Lucide Function


const currentPage = window.location.pathname.split('/').pop();
const sidebar = document.querySelector('.sidebar');
const mainSideBarContent = document.querySelector('.sidebar-content')
const smallSideBarContent = document.querySelector('.sidebar-content-smallver')
const app = document.querySelector('.app')
const iconBtn = document.querySelector('.icon-btn')
const sidebarFooter = document.querySelector('.sidebar-footer')

document.querySelectorAll('.sidebar-links li a').forEach(link => {
  const linkPage = link.getAttribute('href')

  if (linkPage === currentPage) {
    link.classList.add('active')
  }
})

iconBtn.addEventListener('click', () => {
  sidebar.classList.toggle('is-collapsed')
  if (sidebar.classList.contains('is-collapsed')) {
    mainSideBarContent.style.display = 'none';
    smallSideBarContent.style.display = 'flex';
    sidebarFooter.style.display = 'none';
  } else {
    mainSideBarContent.style.display = 'flex';
    smallSideBarContent.style.display = 'none';
    sidebarFooter.style.display = 'block';
  }
})
