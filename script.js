

let events = [
    {
        id: 1,
        title: "AI Bootcamp",
        category: "Technology",
        seats: 30,
        registered: 10
    },
    {
        id: 2,
        title: "Sports Day",
        category: "Sports",
        seats: 50,
        registered: 20
    }
];


function loadFromLocalStorage() {
    let data = localStorage.getItem("events");
    if (data) {
        events = JSON.parse(data);
    }
}

function saveToLocalStorage() {
    localStorage.setItem("events", JSON.stringify(events));
}

function renderEvents() {
    let container = document.getElementById("eventContainer");
    container.innerHTML = "";

    events.forEach(event => {

        let card = document.createElement("div");
        card.className = "bg-white p-4 rounded shadow";

        card.innerHTML = `
            <h2 class="font-bold text-lg">${event.title}</h2>
            <p>Category: ${event.category}</p>
            <p>Total Seats: ${event.seats}</p>
            <p>Registered: ${event.registered}</p>
            <p>Remaining: ${event.seats - event.registered}</p>

            <button onclick="register(${event.id})"
                class="bg-blue-500 text-white p-2 mt-2 rounded w-full">
                Register
            </button>

             <button onclick="cancel(${event.id})"
                class="bg-red-500 text-white p-2 mt-2 rounded w-full">
                Cancel
            </button>
        `;

        container.appendChild(card);
    });

    updateStats();
}

function register(id) {
    let event = events.find(e => e.id === id);

    if (event.registered < event.seats) {
        event.registered++;
        saveToLocalStorage();
        renderEvents();
    } else {
        alert("No seats available!");
    }
}

function cancel(id) {
    let event = events.find(e => e.id === id);

    if (event.registered > 0) {
        event.registered--;
        saveToLocalStorage();
        renderEvents();
    }
}

document.getElementById("eventForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let title = document.getElementById("title").value.trim();
    let category = document.getElementById("category").value.trim();
    let seats = parseInt(document.getElementById("seats").value);

    if (!title || !category || seats <= 0) {
        alert("Please enter valid event data");
        return;
    }

    let newEvent = {
        id: Date.now(),
        title,
        category,
        seats,
        registered: 0
    };

    events.push(newEvent);

    saveToLocalStorage();
    renderEvents();

    this.reset();
});
 document.getElementById("searchInput").addEventListener("input", function () {
    let value = this.value.toLowerCase();

    let filtered = events.filter(event =>
        event.title.toLowerCase().includes(value) ||
        event.category.toLowerCase().includes(value)
    );

    renderFilteredEvents(filtered);
});

function renderFilteredEvents(filteredEvents) {
    let container = document.getElementById("eventContainer");
    container.innerHTML = "";

    filteredEvents.forEach(event => {

            let card = document.createElement("div");
        card.className = "bg-white p-4 rounded shadow";

        card.innerHTML = `
            <h2 class="font-bold text-lg">${event.title}</h2>
            <p>Category: ${event.category}</p>
            <p>Total Seats: ${event.seats}</p>
            <p>Registered: ${event.registered}</p>
            <p>Remaining: ${event.seats - event.registered}</p>

            <button onclick="register(${event.id})"
                class="bg-blue-500 text-white p-2 mt-2 rounded w-full">
                Register
            </button>

            <button onclick="cancel(${event.id})"
                class="bg-red-500 text-white p-2 mt-2 rounded w-full">
                Cancel
            </button>
        `;

        container.appendChild(card);
    });

    updateStats();
}

function updateStats() {
    document.getElementById("totalEvents").textContent = events.length;

    let totalRegistered = events.reduce((sum, e) => sum + e.registered, 0);
    document.getElementById("totalRegistered").textContent = totalRegistered;

    let remaining = events.reduce((sum, e) => sum + (e.seats - e.registered), 0);
    document.getElementById("remainingSeats").textContent = remaining;
}

loadFromLocalStorage();
renderEvents();