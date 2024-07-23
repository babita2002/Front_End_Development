  document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('colorButton');

    button.addEventListener('click', () => {
        // Array of colors
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1'];
        // Generate a random index
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        // Change the background color
        document.body.style.backgroundColor = randomColor;
    });
});
