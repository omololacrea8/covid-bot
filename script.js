



function toggleDropdown() {
    let navbarToggle = document.getElementById("navbar-toggle");
    if (navbarToggle.className === 'navbar') {
        navbarToggle.className += ' responsive';

    } else {
        navbarToggle.className = 'navbar';
    }

}