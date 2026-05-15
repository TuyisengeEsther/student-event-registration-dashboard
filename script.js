

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

