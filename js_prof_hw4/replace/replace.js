let block = document.getElementById('text');
document.getElementById('replace').addEventListener('click', () => {
    block.textContent = block.textContent.replace(/\B'|'\B/g, '"');
});
