const quizzes = {
    general: {
        easy: [
            { q: "2 + 2?", a: ["3", "4", "5", "6"], c: "4" },
            { q: "What is the color of the sky?", a: ["Green", "Blue", "Red", "Yellow"], c: "Blue" }
        ],
        medium: [
            { q: "Who is Gandhi?", a: ["Boy", "Girl", "Chor", "Father of the Nation"], c: "Father of the Nation" },
            { q: "What is the capital of India?", a: ["Mumbai", "Delhi", "Kolkata", "Chennai"], c: "Delhi" }
        ],
        hard: [
            { q: "Who wrote the Indian National Anthem?", a: ["Tagore", "Gandhi", "Nehru", "Patel"], c: "Tagore" },
            { q: "When did India gain independence?", a: ["1945", "1947", "1950", "1962"], c: "1947" }
        ]
    },
    science: {
        easy: [
            { q: "What is H2O?", a: ["Oxygen", "Hydrogen", "Water", "Carbon"], c: "Water" },
            { q: "Which gas do plants release?", a: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], c: "Oxygen" }
        ],
        medium: [
            { q: "Which planet is known as the Red Planet?", a: ["Earth", "Mars", "Jupiter", "Venus"], c: "Mars" },
            { q: "What is the boiling point of water?", a: ["50°C", "100°C", "150°C", "200°C"], c: "100°C" }
        ],
        hard: [
            { q: "What is the hardest natural substance?", a: ["Gold", "Iron", "Diamond", "Silver"], c: "Diamond" },
            { q: "What is the speed of light?", a: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "500,000 km/s"], c: "300,000 km/s" }
        ]
    },
    computer: {
        easy: [
            { q: "What does HTML stand for?", a: ["HyperText Markup Language", "Hyper Transfer Machine Language", "High Tech Machine Learning", "None"], c: "HyperText Markup Language" },
            { q: "What is used to browse the internet?", a: ["Notepad", "Browser", "Calculator", "Paint"], c: "Browser" }
        ],
        medium: [
            { q: "Which one is a programming language?", a: ["HTML", "CSS", "JavaScript", "JPEG"], c: "JavaScript" },
            { q: "What does CPU stand for?", a: ["Central Processing Unit", "Computer Power Unit", "Central Program Unit", "None"], c: "Central Processing Unit" }
        ],
        hard: [
            { q: "Who invented the first computer?", a: ["Alan Turing", "Charles Babbage", "Steve Jobs", "Bill Gates"], c: "Charles Babbage" },
            { q: "What is the full form of SQL?", a: ["Structured Query Language", "Sequential Query Language", "System Query Logic", "None"], c: "Structured Query Language" }
        ]
    },
    kannada: {
        easy: [
            { q: "ಕನ್ನಡ ನಾಡಿನ ಹಬ್ಬ ಯಾವದು?", a: ["ದೀಪಾವಳಿ", "ಗಣೇಶ ಚತುರ್ಥಿ", "ರಾಜ್ಯೋತ್ಸವ", "ಹೊಳಿ"], c: "ರಾಜ್ಯೋತ್ಸವ" },
            { q: "ಕನ್ನಡ ಭಾಷೆ ಯಾವ ರಾಜ್ಯದ ಅಧಿಕೃತ ಭಾಷೆ?", a: ["ಕೇರಳ", "ಕರ್ನಾಟಕ", "ತಮಿಳುನಾಡು", "ಆಂಧ್ರಪ್ರದೇಶ"], c: "ಕರ್ನಾಟಕ" }
        ],
        medium: [
            { q: "ಕುವೆಂಪು ಎಂಬವರು ಯಾವ ಕ್ಷೇತ್ರದ ಸಾಧಕರು?", a: ["ರಾಜಕಾರಣ", "ವಿಜ್ಞಾನ", "ಸಾಹಿತ್ಯ", "ಸಂಗೀತ"], c: "ಸಾಹಿತ್ಯ" },
            { q: "ದಾಸರ ಸಾಹಿತ್ಯದ ಪ್ರಮುಖ ವ್ಯಕ್ತಿ?", a: ["ಕುಡಲಸಂಗಮ", "ಬಸವಣ್ಣ", "ಪುಟಿಗೇರೆ", "ಪುರಂದರ ದಾಸ"], c: "ಪುರಂದರ ದಾಸ" }
        ],
        hard: [
            { q: "‘ರಾಮಾಯಣ ದರ್ಶನ’ ಯಾರು ಬರೆದವರು?", a: ["ಕುವೆಂಪು", "ಬೇಂದ್ರೆ", "ದ. ರಾ. ಬೇಂದ್ರೆ", "ತೇಜಸ್ವಿ"], c: "ಕುವೆಂಪು" },
            { q: "ಕನ್ನಡದಲ್ಲಿ ಮೊದಲ ಮುದ್ರಿತ ಪುಸ್ತಕ ಯಾವದು?", a: ["ಅಧ್ಯಾತ್ಮ ರಾಮಾಯಣ", "ಪಂಚತನ್ತ್ರ", "ಕಥಾಸರಿತ್ಸಾಗರ", "ಕಾವ್ಯಾಮೃತ"], c: "ಅಧ್ಯಾತ್ಮ ರಾಮಾಯಣ" }
        ]
    },
    hindi: {
        easy: [
            { q: "हिंदी दिवस कब मनाया जाता है?", a: ["14 अगस्त", "14 सितंबर", "2 अक्टूबर", "15 अगस्त"], c: "14 सितंबर" },
            { q: "भारत की राष्ट्रभाषा कौन सी है?", a: ["अंग्रेजी", "हिंदी", "संस्कृत", "उर्दू"], c: "हिंदी" }
        ],
        medium: [
            { q: "हिंदी साहित्य के पिता किसे कहते हैं?", a: ["मुंशी प्रेमचंद", "तुलसीदास", "सूरदास", "भवानी प्रसाद"], c: "मुंशी प्रेमचंद" },
            { q: "‘रामचरितमानस’ किसने लिखी?", a: ["तुलसीदास", "व्यास", "सूरदास", "कबीर"], c: "तुलसीदास" }
        ],
        hard: [
            { q: "पहली हिंदी फिल्म कौन सी थी?", a: ["राजा हरिश्चंद्र", "मुगल-ए-आज़म", "शोले", "कागज़ के फूल"], c: "राजा हरिश्चंद्र" },
            { q: "‘गोदान’ उपन्यास के लेखक कौन हैं?", a: ["रामधारी सिंह", "मुंशी प्रेमचंद", "हरिवंश राय", "जयशंकर प्रसाद"], c: "मुंशी प्रेमचंद" }
        ]
    }
};

let selectedCategory = "";
let currentQuiz = [];
let i = 0, time, timer, q, a, t, score = 0;

function selectLevel(category) {
    selectedCategory = category;
    document.getElementById("category-selection").style.display = "none";
    document.getElementById("level-selection").style.display = "block";
}

function startQuiz(level) {
    if (!quizzes[selectedCategory] || !quizzes[selectedCategory][level]) {
        alert("Something went wrong! Please select again.");
        location.reload();
        return;
    }

    document.getElementById("level-selection").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    currentQuiz = quizzes[selectedCategory][level];
    q = document.getElementById("question");
    a = document.getElementById("answers");
    t = document.getElementById("timer");
    i = 0;
    score = 0;
    show();
}

function show() {
    if (i >= currentQuiz.length) {
        q.innerText = `Quiz Completed! Your Score: ${score}/${currentQuiz.length}`;
        a.innerHTML = "";
        t.innerText = "";
        setTimeout(() => {
            document.getElementById("quiz-container").style.display = "none";
            document.getElementById("thank-you-screen").style.display = "block";
        }, 2000);
        return;
    }

    time = 30;
    q.innerText = currentQuiz[i].q;
    a.innerHTML = currentQuiz[i].a.map(ans =>
        `<button onclick="check(this, '${ans.replace(/'/g, "\\'")}')">${ans}</button>`
    ).join("");
    updateTimer();
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    t.innerText = `Time left: ${time}s`;
    if (time-- <= 0) next();
}

function check(btn, ans) {
    clearInterval(timer);
    let buttons = document.querySelectorAll("#answers button");
    buttons.forEach(button => button.disabled = true);

    if (ans === currentQuiz[i].c) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
        buttons.forEach(button => {
            if (button.innerText === currentQuiz[i].c) {
                button.classList.add("correct");
            }
        });
    }

    setTimeout(next, 1000);
}

function next() {
    i++;
    show();
}
