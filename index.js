// const themeToggle = document.getElementById('theme-toggle');
// const body = document.body;

// // Check if a theme preference is stored in local storage
// const storedTheme = localStorage.getItem('theme');
// if (storedTheme) {
//   body.classList.add(storedTheme);
// } else {
//   // Default to light theme
//   body.classList.add('light');
// }

// themeToggle.addEventListener('click', () => {
//   body.classList.toggle('light');
//   body.classList.toggle('dark');

//   // Store the current theme in local storage
//   const currentTheme = body.classList.contains('light') ? 'light' : 'dark';
//   localStorage.setItem('theme', currentTheme);
// });
let button = document.getElementById("theme-button")

button.addEventListener("click", changeBackground);

function changeBackground () {
    if (element.style.backgroundImage = "url(indeximg.jpg)") {
        element.style.backgroundImage = "url(lightimg.jpg)"
    } else {
        element.style.backgroundImage = "url(indeximg.jpg)"
    }
}