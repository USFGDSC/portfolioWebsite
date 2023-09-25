function toggleDarkMode() {
    const body = document.body;
    const sections =  body.getElementsByTagName('section');
    const footer =  body.getElementsByTagName('footer');

    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.toggle('dark-mode');
    }

    footer[0].classList.toggle('dark-mode');
}

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', toggleDarkMode);