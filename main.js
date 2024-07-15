const toggleInput = document.getElementById('theme-toggle');
toggleInput.addEventListener('change', () => {
    if (toggleInput.checked) {
        document.body.style.backgroundColor = '#2c3e50';
    } else {
        document.body.style.backgroundColor = '#fff';
    }
});
