// =========================
// Digital Clock - Task 6
// =========================


// Get HTML elements

const timeElement = document.getElementById("time");

const periodElement = document.getElementById("period");

const dateElement = document.getElementById("date");


// Clock Function

function updateClock() {

    // Get current date and time

    const now = new Date();


    // Get hours, minutes and seconds

    let hours = now.getHours();

    const minutes = now.getMinutes();

    const seconds = now.getSeconds();


    // Decide AM or PM

    const period = hours >= 12 ? "PM" : "AM";


    // Convert 24-hour format to 12-hour format

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }


    // Add zero before single digit numbers

    const formattedHours = String(hours).padStart(2, "0");

    const formattedMinutes = String(minutes).padStart(2, "0");

    const formattedSeconds = String(seconds).padStart(2, "0");


    // Display time

    timeElement.textContent =
        `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;


    // Display AM / PM

    periodElement.textContent = period;


    // Date formatting

    const dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };


    // Display current date

    dateElement.textContent =
        now.toLocaleDateString("en-IN", dateOptions);
}


// Run clock immediately

updateClock();


// Update clock every second

setInterval(updateClock, 1000);