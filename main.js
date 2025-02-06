// Sample Data for Events
const eventsData = [
    {
        title: "Decode Tech",
        image: "https://via.placeholder.com/300x200",
        description: "Unlock the secrets of modern technology.",
        link: "#"
    },
    {
        title: "UI Magician",
        image: "https://via.placeholder.com/300x200",
        description: "Create stunning user interfaces with ease.",
        link: "#"
    },
    {
        title: "Jumbled Code",
        image: "https://via.placeholder.com/300x200",
        description: "Solve the puzzle of jumbled code snippets.",
        link: "#"
    },
    {
        title: "Tech Fusion",
        image: "https://via.placeholder.com/300x200",
        description: "Explore the fusion of technology and creativity.",
        link: "#"
    }
];

// Function to Generate Cards
function generateEventCards() {
    const eventsGrid = document.getElementById('events-container');

    eventsData.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';

        const image = document.createElement('img');
        image.src = event.image;
        image.alt = event.title;
        image.className = 'event-image';

        const content = document.createElement('div');
        content.className = 'event-content';

        const title = document.createElement('h3');
        title.className = 'event-title';
        title.textContent = event.title;

        const description = document.createElement('p');
        description.className = 'event-description';
        description.textContent = event.description;

        const button = document.createElement('a');
        button.href = event.link;
        button.className = 'event-button';
        button.textContent = 'Learn More';

        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(button);

        card.appendChild(image);
        card.appendChild(content);

        eventsGrid.appendChild(card);
    });
}

// Call the Function to Generate Cards
document.addEventListener('DOMContentLoaded', generateEventCards);
