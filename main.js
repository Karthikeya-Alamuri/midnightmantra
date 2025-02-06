// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#8b5cf6'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#8b5cf6',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Animate logo letters with random delays
document.querySelectorAll('.logo-letter').forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.1}s`;
});

// Add mouse move parallax effect
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const moveX = (clientX - centerX) / 50;
    const moveY = (clientY - centerY) / 50;

    document.querySelectorAll('.tech-element').forEach(element => {
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    document.querySelectorAll('.glow').forEach(glow => {
        const speed = glow.classList.contains('glow-1') ? 2 : 
                     glow.classList.contains('glow-2') ? -2 : 1;
        glow.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
    });
});

// Add scroll reveal animation
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('.hero-content').style.transform = `translateY(${scrolled * 0.5}px)`;
    document.querySelector('.scroll-indicator').style.opacity = 1 - scrolled / 300;
});

// Add interactive hover effect to CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mousemove', (e) => {
        const { left, top } = ctaButton.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        
        ctaButton.style.setProperty('--x', `${x}px`);
        ctaButton.style.setProperty('--y', `${y}px`);
    });
}

// Event data
const events = [
    {
        id: 'typing-master',
        type: 'technical',
        title: 'Quick Fingers',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80',
        description: 'Quick Fingers is a competitive typing event that highlights the importance of both accuracy and speed',
        rules: [
            'Round Instructions:',
            '	Round 1: Accuracy and Speed Test All participants will type a given paragraph with minimal errors and high speed. o Scores will be based on a combination of accuracy (first preference) words- perminute (WPM).',
            '	Round 2: Top 50 Accuracy and Speed Challenge o The top 50 participants from Round 1 will compete in a similar typing challenge. o Both accuracy and speed will be evaluated, with accuracy given higher weightage.',
            '	Round 3: Top 10 Final Challenge o The top 10 participants from Round 2 will compete in the final round. o A more complex passage will be provided, and the final score will heavilyemphasize accuracy along with speed',
        ],
        Organisers: 'Varada sandeep', 
        timing: '10:30AM - 11:30AM',
        Whatsapp_Group_Link:  'https://chat.whatsapp.com/CtFBqZVWVGl2OReofBQnSQ',
    },
    {
        id: 'decode-tech',
        type: 'technical',
        title: 'Decode Tech',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80',
        description: 'Connect technical concepts in this innovative challenge',
        rules: [
            '	Round 1 will be conducted using Kahoot, where participants answer multiple-choice questions based on pictorial representations.',
            '	Top 25 participants from Round 1 will advance to Round 2 for a head-to-head Pictoword face-off.',
            '	Finalists  will test technical knowledge through pictorial representations of computer science concepts.',
            ,
        ],
        Organisers: 'R.Dhanush',
        timing: '2:00 PM - 3:00 PM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/GPFdoKDns9Q5re3iJbLGpN',
    },
    {
        id: 'ui-magician',
        type: 'technical',
        title: 'UI Magician',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
        description: 'Put your front-end skills to the test in this exciting challenge! Participants must accurately replicate a given web page within a set time limit, ensuring precision in design, layout, and styling. ',
        rules: [
            '	Internet access is strictly prohibited during the competition.',
            '	Only HTML and CSS are allowed; JavaScript is not required unless specified. Pre-written templates or code snippets are not allowed—everything must be coded from scratch',
            '	Participants must match the layout, colors, and spacing as closely as possible. Text content should be replicated exactly as given in the reference page.',
            
        ],
        Organisers: 'B.Vikas Reddy',
        timing: '10:30AM - 11:30AM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/IjlaE4u6KmbC5xYyLVyPpY',
    },
    {
        id: 'Chart it Out',
        type: 'technical',
        title: 'Chart it Out',
        image: '',
        description: 'Chart it Out is a poster presentation event that serves as an exciting platform where participants unleash their creativity and problem-solving skills. ',
        rules: [
            '		Themes will be announced at 11:30 AM and must be selected by the fishbowl method.',
            '		Participants must create their posters manually, laptops and electronic devices are allowed up to 15 minutes after theme selection.',
            '		Each theme will have an associated problem statement, and participants must base their poster on the given problem.',
            '		6.	Teams are allowed to have up to two members; single participation is also permitted.Plagiarsm or copying will result in immediate disqualification.',
        ],
        Organisers: 'P.V.SASIBHUSHAN RAJU ',
        timing: '11:30AM - 1:00PM',
        Whatsapp_Group_Link: ' https://chat.whatsapp.com/KdFOGx7mpMKGQySRFHVuIg',
    },
    {
        id: 'Pop n hunt',
        type: 'technical',
        title: 'Pop n hunt',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
        description: 'Hunting the accurate code from the given treasure box for the given problem statements.',
        rules: [
            '	Each team consists of 2 members.',
            '	Blow and pop a balloon to access the treasure box.',
            '	Marks are allotted based on the code accuracy and the time taken by them. ',
            '	The team with the highest marks wins.',
        ],
        Organisers: 'Dhivya SV ',
        timing: '11:30AM - 1:00PM',
        Whatsapp_Group_Link:'https://chat.whatsapp.com/JrNP1NABjYR0XdjPYDQhLF',
    },
 
    {
        id: 'tech-fusion',
        type: 'technical',
        title: 'Tech Fusion',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
        description: 'Tech Fusion is an innovative project expo showcasing groundbreaking student projects in technology, engineering, and automation. ',
        rules: [
            'Prototype Requirement – A working prototype or simulation is mandatory for evaluation',
            '	Team Size – Each team can have a maximum of 3 members',
            '	Decision Finality – Judges decisions are final and cannot be contested.',
            '	Code of Conduct – Participants must maintain professionalism and adhere to ethical ',
        ],
        Organisers: 'GOKULAKANNAN V',
        timing: '10:30 AM - 1:00 PM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/BdTjURSkAd6CYpztS3wLxq',
    },
    {
        id: 'STREET CODE',
        type: 'technical',
        title: 'STREET CODE ',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80',
        description: 'Street code is an event where programmers and coders participate in coding challenges while being exposed to external distractions like loud noises, random music, and other disturbances. ',
        rules: [
            '	Participants  must bring their own laptops',
            '	The coding environment will be set up in HackerEarth',
            '	Participants must solve coding challenges while handling distractions.',
            'The event consists of 2 rounds, each with increasing difficulty and chaos:	','Round 1 (60 minutes) – Coding challenge with mild disturbances.','	Round 2 (45 minutes) – Advanced coding challenge with extreme chaos',

        ],
        Organisers: 'v.Hema sarayu',
        timing: '11:30 AM - 1:00 PM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/IS1fWp7yNHa44c6TMstSxH',
    },
   
    {
        id: 'clueless-coder',
        type: 'technical',
        title: 'The Clueless Coder',
        image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80',
        description: 'Clueless code is a Dumb Charades event which is an exciting team-based event where participants act out words or phrases without speaking. ',
        rules: [
            '	Participants must act out the word or phrase without speaking.',
            '	No props or gestures that can directly give away the word are allowed.',
            '	Each team has a maximum of 1 minutes to guess the word.',
            '8.	Each team should have maximum of 2 members.',
        ],
        Organisers: 'S.Ganesh Raj ',
        timing: '11:30 AM - 1:00 PM',
       Whatsapp_Group_Link:'https://chat.whatsapp.com/Gxo4mOPMbEQ4OyPNPQQejU',
    },
    {
        id: 'techtrivia',
        type: 'technical',
        title: 'TechTrivia',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80',
        description: 'It is an event designed to test participants knowledge about technology, computers, programming, and the history of tech innovations.',
        rules: [
            '	Participate in teams (2 members).',
            '	No external help or resources allowed during the event.',
            '	Provide clear and concise answers .',
            '	Do not share solutions or details with others during the event.',
        ],
        Organisers: '	K Arun Kishore            ',
        timing: '10:30 AM - 11:30 AM',
        Whatsapp_Group_Link:'https://chat.whatsapp.com/EroTeg2lCluEfZgA5CixOA',
    }
,
{
    id: 'Prompt-wars',
    type: 'technical',
    title: 'Prompt wars',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80',
    description: ' Given a set of AI-based prompts, your challenge is to generate the most unique and engaging responses. ',
    rules: [
        '	Each team can have 1 member. ',
        '	Teams will have a time limit to respond to each prompt.',
        '	Judges will evaluate entries based on creativity, coherence, and relevance.',
        '	No AI tools or external assistance is allowed during the challenge.',
    ],
    Organisers: '	Ganesh Balaji            ',
    timing: '11:30 AM - 1:00 PM',
    Whatsapp_Group_Link:'https://chat.whatsapp.com/DJhFKJvVzZ8CFsn1IM7xuo',
}
,
{
    id: 'BrainByte',
    type: 'technical',
    title: 'BrainByte',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80',
    description: ' Get ready to test your brainpower at BrainByte! A thrilling event designed for computer science enthusiasts, where puzzles and riddles challenge your coding, problem solving, and logic skills.  ',
    rules: [
        '		Participate in teams (2-4 members). ',
        '		No external help or resources allowed during the event.',
        '		Provide clear and concise answers, explaining your approach if required.',
        '		Do not share solutions or details with others during the event.',
    ],
    Organisers: '	Sharon Varghese                       ',
    timing: '10:30 AM - 1:00 PM',
    Whatsapp_Group_Link:'https://chat.whatsapp.com/Hj1gGIuceXl33jFUJNrU5g',
}
,

    {
        id: 'rhythm-soul',
        type: 'non-technical',
        title: 'Rhythm of Soul',
        image: 'https://images.unsplash.com/photo-1535525153412-5a092c564c20?auto=format&fit=crop&q=80',
        description: 'Calling all dance enthusiasts! Get ready to groove and show off your moves at RHYTHM RIOT, the ultimate group dance competition! to Flaunt your dancing skills.',
        rules: [
            ' A team can have  maximum of 6 members.',
            'The duration for each performance is 3 to 5 mins.',
            'Participants must come  with their own tracks.',
            'Judges decision wil be final.',
        ],
        Organisers: 'S.Sarika         ',
        timing: '2:00 PM - 3:00 PM',
       Whatsapp_Group_Link:'https://chat.whatsapp.com/E2BPQ4OLadl91MbbdgdtyF',
    },
    {
        id: 'classy-genz',
        type: 'non-technical',
        title: 'ClassyGenz',
        image: 'https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?auto=format&fit=crop&q=80',
        description: 'A ramp walk is more than just walking—it’s about confidence, body language, and making a lasting impression. ',
        rules: [
            'Welcomed  in a descent  attire(no short dresses ) where you can express yourself  within duration: 60 secs.',
            'Any theme is encouraged  like from  a movie character, role models etc.  that enhances  your personality .',
            'Walk  with Dance  and showcase your moves within duration: 60 secs',
            'You can use properties as well.',
        ],
        Organisers: 'Ch. komala sri ',
        timing: '2:00 PM - 3:00 PM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/G2KEkKTcqvvDujWyHIn2Vz',
    },
];

// Coordinator data
const coordinators = {
    tech: {
        name: 'John Doe',
        role: 'Technical Events Head',
        contact: '+1234567890'
    },
    'non-tech': {
        name: 'Jane Smith',
        role: 'Non-Technical Events Head',
        contact: '+1234567891'
    },
    overall: {
        name: 'Mike Johnson',
        role: 'Overall Coordinator',
        contact: '+1234567892'
    }
};

// Function to create event cards
function createEventCards(filteredEvents = events) {
    const container = document.getElementById('events-container');
    container.innerHTML = ''; // Clear existing cards

    filteredEvents.forEach((event) => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-inner">
                <div class="event-front">
                    <img src="${event.image}" alt="${event.title}" class="event-image">
                    <div class="event-overlay">
                        <h3 class="event-title">${event.title}</h3>
                        <p>${event.description}</p>
                    </div>
                </div>
                <div class="event-back">
                    <h3 class="event-title">${event.title}</h3>
                    <p>${event.description}</p>
                    <button class="view-details" onclick="showEventDetails('${event.id}')">View Details</button>
                </div>
            </div>
        `;
        container.appendChild(eventCard);
    });
}

// Function to filter events
function filterEvents(type) {
    const filteredEvents = type === 'all' ? events : events.filter(event => event.type === type);
    createEventCards(filteredEvents);
    document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
}

// Function to show event details
function showEventDetails(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = event.title;
    modalBody.innerHTML = `
        <div class="modal-details">
            <img src="${event.image}" alt="${event.title}" class="modal-image">
            
            <div class="modal-section">
                <h3>Description</h3>
                <p>${event.description}</p>
            </div>
            
            <div class="modal-section">
                <h3>Rules</h3>
                <ul>
                    ${event.rules.map(rule => `<li>${rule}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-info">
                <div>
                    <h3>Organisers: </h3>
                    <p>${event.Organisers}</p>
                </div>
                <div>
                    <h3>Timing</h3>
                    <p>${event.timing}</p>
                </div>
                
            </div>
            <a href="${event.Whatsapp_Group_Link}" target="_blank" class="register-event-button">Join in ${event.title} Whatsapp Group </a>

        </div>
    `;

    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Function to show coordinator details
function showCoordinator(type) {
    const coordinator = coordinators[type];
    if (coordinator) {
        alert(`${coordinator.role}\nName: ${coordinator.name}\nContact: ${coordinator.contact}`);
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};

// Initialize event cards when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createEventCards();
    
    // Add rainbow effect to logo on hover
    const logoTexts = document.querySelectorAll('.logo-text');
    const colors = ['#8b5cf6', '#9f7aea', '#b794f4', '#c3dafe', '#a78bfa', '#8b5cf6'];
    
    logoTexts.forEach((text, index) => {
        text.addEventListener('mouseover', () => {
            text.style.color = colors[index % colors.length];
            text.style.textShadow = `0 0 20px ${colors[index % colors.length]}`;
        });
        
        text.addEventListener('mouseout', () => {
            text.style.color = '#8b5cf6';
            text.style.textShadow = '0 0 10px rgba(139, 92, 246, 0.5)';
        });
    });
});

// Toggle Sidebar Menu
document.getElementById('menu-button-123').addEventListener('click', () => {
    document.querySelector('.sidebar-505').classList.add('active');
});

document.getElementById('close-button-606').addEventListener('click', () => {
    document.querySelector('.sidebar-505').classList.remove('active');
});

// Close sidebar when clicking outside
document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.sidebar-505');
    const menuButton = document.getElementById('menu-button-123');
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

// Toggle Sidebar Menu
document.getElementById('menu-button-123').addEventListener('click', () => {
    document.querySelector('.sidebar-505').classList.add('active');
});

document.getElementById('close-button-606').addEventListener('click', () => {
    document.querySelector('.sidebar-505').classList.remove('active');
});

// Close sidebar when clicking outside
document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.sidebar-505');
    const menuButton = document.getElementById('menu-button-123');
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});