

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