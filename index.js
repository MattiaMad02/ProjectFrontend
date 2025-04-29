function toggleDropdown() {
    const dropdown = document.getElementById('signInDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}
// Close the dropdown if the user clicks anywhere
window.onclick = function(event) {
    if (!event.target.matches('.sign-in-btn')) {
        const dropdown = document.getElementById('signInDropdown');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }}
