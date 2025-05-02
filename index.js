/*function toggleDropdown() {
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
    }}*/
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
// Funzione per ottenere la data di oggi formattata
function getFormattedDate(date = new Date()) {
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${dayName}, ${monthName} ${day}, ${year}`;
}
// Funzione per aggiornare la data nel DOM
function updateTodayDate() {
    const dateElement = document.querySelector('.edition-info p strong');
    if (dateElement) {
        dateElement.textContent = getFormattedDate();
    }
}
// Funzione per aggiornare dinamicamente l'immagine con la data nel testo (opzionale)
function updateFrontPageImage() {
    const image = document.querySelector('.edition-preview img');
    const today = new Date();
    const monthName = months[today.getMonth()];
    const day = today.getDate();
    const textParam = `Front+Page+${monthName}+${day}`;
    image.src = `https://via.placeholder.com/600x800?text=${textParam}`;
}
// Inizializza quando il DOM è pronto
document.addEventListener('DOMContentLoaded', () => {
    updateTodayDate();
    updateFrontPageImage(); // Rimuovi questa riga se non vuoi aggiornare anche l'immagine
});
function insertYesterdayNextToToday() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const dayName = days[yesterday.getDay()];
    const monthName = months[yesterday.getMonth()];
    const monthNum = (yesterday.getMonth() + 1).toString().padStart(2, '0');
    const day = yesterday.getDate().toString().padStart(2, '0');
    const year = yesterday.getFullYear();
    const yearShort = year.toString().slice(2);
    const readableDate = `${dayName}, ${monthName} ${day}, ${year}`;
    const imageText = `${monthNum}/${day}/${yearShort}`;
    const html = `
      <a href="https://www.cleveland.com/staff/mrose/posts.html" target="_blank">
    <img src="https://via.placeholder.com/600x800?text=Front+Page+${monthName}+${day}" alt="Yesterday's edition front page" /></a>
    <div class="edition-info">
      <p><strong>${readableDate}</strong></p>
       <p class="small-text">
                    The Plain Dealer's front page for yesterday<br/>
                    Mike Rose
                </p>
      <a href="#" class="read-button">Read Now</a>
    </div>
  `;
    document.getElementById("yesterday-edition").innerHTML = html;
}
document.addEventListener('DOMContentLoaded', () => {
    updateTodayDate();
    updateFrontPageImage();
    insertYesterdayNextToToday();
});