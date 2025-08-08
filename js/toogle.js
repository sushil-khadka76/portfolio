
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    document.body.classList.add('no-scroll'); // Freeze scroll
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    document.body.classList.remove('no-scroll'); // Unfreeze scroll
}

// Hide sidebar when any <a> inside it is clicked
document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', hideSidebar);
    });
});
