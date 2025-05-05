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
    const dateElement = document.querySelector('#today-date');
    const descriptionEl = document.querySelector('#today-edition .small-text');
    const readButton = document.querySelector('#today-edition .read-button');

    if (dateElement && descriptionEl && readButton) {
        const today = new Date();
        const formattedDate = getFormattedDate(today);
        const description = "The Plain Dealer's front page for";

        dateElement.innerHTML = `<a href="https://www.cleveland.com/staff/mrose/posts.html" target="_blank">${description} ${formattedDate}</a>`;
        descriptionEl.innerHTML = `<a href="https://www.cleveland.com/staff/mrose/posts.html" target="_blank">Mike Rose</a>`;
    }
}

// Funzione per aggiornare dinamicamente l'immagine con la data nel testo (opzionale)
function updateFrontPageImage() {
    const image = document.querySelector('.edition-preview img');
    const today = new Date();
    const monthName = months[today.getMonth()];
    const day = today.getDate();
    const textParam = `Front+Page+${monthName}+${day}`;
    image.src = `https://placehold.co/650x900?text=${textParam}`;
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
    const link = "https://www.cleveland.com/staff/mrose/posts.html";

    const html = `
        <div class="edition-preview">
            <a href="${link}" target="_blank">
                <img src="https://placehold.co/650x900?text=Front+Page+${monthName}+${day}" alt="Yesterday's edition front page" />
            </a>
            <div class="edition-info">
                <p><strong><a href="${link}" target="_blank">The Plain Dealer's front page for ${readableDate}</a></strong></p>
                <p class="small-text"><a href="${link}" target="_blank">Mike Rose</a></p>
            </div>
        </div>
    `;

    document.getElementById("yesterday-edition").innerHTML = html;
}
document.addEventListener('DOMContentLoaded', () => {
    updateTodayDate();
    updateFrontPageImage();
    insertYesterdayNextToToday();
});