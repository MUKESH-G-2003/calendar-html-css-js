const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const monthYear = document.getElementById('month-year');
const calendarDays = document.getElementById('calendar-days');

function renderCalendar(month, year) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();

    calendarDays.innerHTML = "";

    monthYear.innerText = `${monthNames[month]} ${year}`;

    for (let i = 0; i < firstDay; i++) {
        const blankDay = document.createElement('div');
        calendarDays.appendChild(blankDay);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.innerText = i;

        if (
            i === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
        ) {
            day.classList.add('current-day');
        }

        calendarDays.appendChild(day);
    }
}

document.getElementById('prev-month').addEventListener('click', () => {
    currentMonth--;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }

    renderCalendar(currentMonth, currentYear);
});

document.getElementById('next-month').addEventListener('click', () => {
    currentMonth++;

    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);
