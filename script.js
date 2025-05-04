// Common Variables
let currentQuestion = 0;
let score = 0;

const quizData = [
    //...पहले वाले 5 प्रश्न
    {
        question: "भारत का राष्ट्रीय फल कौन सा है?",
        options: ["आम", "सेब", "अनार", "केला"],
        correct: 0
    },
    {
        question: "चंद्रमा पर पहुंचने वाला पहला व्यक्ति कौन था?",
        options: ["नील आर्मस्ट्रांग", "राकेश शर्मा", "कल्पना चावला", "यूरी गगारिन"],
        correct: 0
    },
    {
        question: "इंद्रधनुष में कितने रंग होते हैं?",
        options: ["5", "7", "6", "8"],
        correct: 1
    },
    {
        question: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        options: ["सरोजिनी नायडू", "इंदिरा गांधी", "प्रतिभा पाटिल", "सुषमा स्वराज"],
        correct: 1
    },
    {
        question: "गुरुत्वाकर्षण का सिद्धांत किसने दिया?",
        options: ["आइंस्टीन", "न्यूटन", "गैलीलियो", "आर्किमिडीज"],
        correct: 1
    },
    {
        question: "स्वतंत्र भारत के पहले गवर्नर जनरल कौन थे?",
        options: ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद"],
        correct: 1
    },
    {
        question: "विश्व स्वास्थ्य संगठन का मुख्यालय कहाँ है?",
        options: ["न्यूयॉर्क", "जेनेवा", "पेरिस", "लंदन"],
        correct: 1
    },
    {
        question: "भारत की पहली 3D फिल्म कौन सी थी?",
        options: ["चेन्नई एक्सप्रेस", "हॉटी", "माय डियर कुट्टीचाथन", "रोबोट"],
        correct: 2
    },
    {
        question: "सांपों का राष्ट्रीय उद्यान कहाँ स्थित है?",
        options: ["काजीरंगा", "पेरियार", "साइलेंट वैली", "इम्फाल"],
        correct: 1
    },
    {
        question: "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
        options: ["थार", "सहारा", "गोबी", "कालाहारी"],
        correct: 0
    },
    //...और 10 प्रश्न
    {
        question: "किस वेद को 'भारतीय संगीत का मूल' माना जाता है?",
        options: ["ऋग्वेद", "सामवेद", "यजुर्वेद", "अथर्ववेद"],
        correct: 1
    },
    {
        question: "भारत में सबसे लंबी तटरेखा वाला राज्य कौन सा है?",
        options: ["गुजरात", "आंध्र प्रदेश", "तमिलनाडु", "केरल"],
        correct: 0
    }

    [
    {
        "question": "भारत में सबसे लंबी तटरेखा वाला राज्य कौन सा है?",
        "options": ["गुजरात", "आंध्र प्रदेश", "तमिलनाडु", "केरल"],
        "correct": 0
    },
    {
        "question": "भारत का सबसे बड़ा राज्य क्षेत्रफल के आधार पर कौन सा है?",
        "options": ["उत्तर प्रदेश", "राजस्थान", "मध्य प्रदेश", "महाराष्ट्र"],
        "correct": 1
    },
    {
        "question": "भारत का सबसे छोटा राज्य क्षेत्रफल के अनुसार कौन सा है?",
        "options": ["त्रिपुरा", "मिजोरम", "गोवा", "सिक्किम"],
        "correct": 2
    },
    {
        "question": "भारत की सबसे लंबी नदी कौन सी है?",
        "options": ["यमुना", "ब्रह्मपुत्र", "नर्मदा", "गंगा"],
        "correct": 3
    },
    {
        "question": "भारत का सबसे ऊँचा जलप्रपात कौन सा है?",
        "options": ["दुधसागर", "जोग फॉल्स", "भद्रा फॉल्स", "शिवसमुद्रम"],
        "correct": 1
    },
    {
        "question": "सूरज सबसे पहले भारत में कहाँ उगता है?",
        "options": ["अरुणाचल प्रदेश", "सिक्किम", "नागालैंड", "असम"],
        "correct": 0
    },
    {
        "question": "भारत की सबसे बड़ी झील कौन सी है?",
        "options": ["वूलर झील", "चिल्का झील", "पुलिकट झील", "लोखटक झील"],
        "correct": 0
    },
    {
        "question": "भारत में किस राज्य की सीमा सबसे अधिक देशों से लगती है?",
        "options": ["जम्मू-कश्मीर", "असम", "उत्तर प्रदेश", "अरुणाचल प्रदेश"],
        "correct": 3
    },
    {
        "question": "भारत का ‘धान का कटोरा’ किसे कहा जाता है?",
        "options": ["बिहार", "छत्तीसगढ़", "पंजाब", "ओडिशा"],
        "correct": 1
    },
    {
        "question": "भारत का सबसे ऊँचा पर्वत शिखर कौन सा है?",
        "options": ["नंदा देवी", "माउंट एवरेस्ट", "कंचनजंगा", "धौलागिरि"],
        "correct": 2
    },
    {
        "question": "भारत में सबसे अधिक वर्षा किस स्थान पर होती है?",
        "options": ["चेरापूंजी", "मसूरी", "शिलांग", "मावसिनराम"],
        "correct": 3
    },
    {
        "question": "भारत में 'ब्लू माउंटेन' किसे कहा जाता है?",
        "options": ["नीलगिरि", "अण्णामलाई", "अरावली", "सतपुड़ा"],
        "correct": 0
    },
    {
        "question": "तारापुर परमाणु बिजलीघर किस राज्य में स्थित है?",
        "options": ["कर्नाटक", "महाराष्ट्र", "तमिलनाडु", "गुजरात"],
        "correct": 1
    },
    {
        "question": "भारत में सबसे लंबा राष्ट्रीय राजमार्ग कौन सा है?",
        "options": ["NH 7", "NH 44", "NH 27", "NH 48"],
        "correct": 1
    },
    {
        "question": "भारत का सबसे पुराना पर्वतमाला कौन सा है?",
        "options": ["विंध्याचल", "सतपुड़ा", "अरावली", "सह्याद्री"],
        "correct": 2
    },
    {
        "question": "भारत का सबसे गहरा बंदरगाह कौन सा है?",
        "options": ["कोचीन", "विशाखापट्टनम", "मुंबई", "मर्मगांव"],
        "correct": 1
    },
    {
        "question": "भारत में थार मरुस्थल किस राज्य में स्थित है?",
        "options": ["गुजरात", "पंजाब", "राजस्थान", "हरियाणा"],
        "correct": 2
    },
    {
        "question": "सुंदरबन डेल्टा किस दो नदियों के संगम से बना है?",
        "options": ["गंगा और यमुना", "गंगा और ब्रह्मपुत्र", "गंगा और गोमती", "ब्रह्मपुत्र और तीस्ता"],
        "correct": 1
    },
    {
        "question": "भारत में सबसे अधिक तापमान किस स्थान पर दर्ज किया गया है?",
        "options": ["जैसलमेर", "चुरू", "बांदा", "फालोदी"],
        "correct": 3
    },
    {
        "question": "भारत में 'सात बहनें' किन्हें कहा जाता है?",
        "options": ["उत्तर भारत के राज्य", "हिमालयी राज्य", "दक्षिण भारतीय राज्य", "पूर्वोत्तर राज्य"],
        "correct": 3
    },
    {
        "question": "भारत का राष्ट्रीय फल कौन सा है?",
        "options": ["आम", "सेब", "अनार", "केला"],
        "correct": 0
    }
]

];

// पूरा डेटासेट डाउनलोड लिंक:
// https://example.com/quiz-data.json (उदाहरणार्थ)

const factCategories = [
    {
        category: "💡 दिलचस्प जानकारी",
        content: "मधुमक्खियां एक सेकंड में 200 बार अपने पंख फड़फड़ाती हैं"
    },
    {
        category: "🌍 भूगोल तथ्य", 
        content: "विश्व का सबसे बड़ा देश रूस है (क्षेत्रफल अनुसार)"
    },
    {
        category: "🐾 जानवर तथ्य",
        content: "कंगारू उल्टा नहीं चल सकते"
    },
    {
        category: "🧬 विज्ञान तथ्य",
        content: "मानव हड्डियाँ कंक्रीट से 4 गुना मजबूत होती हैं"
    },
    {
        category: "⏳ ऐतिहासिक तथ्य",
        content: "ताजमहल को बनाने में 22 वर्ष लगे और 20,000 मजदूरों ने काम किया"
    },
    {
        category: "📚 साहित्य तथ्य",
        content: "महाभारत विश्व का सबसे लंबा महाकाव्य है (1.8 मिलियन शब्द)"
    },
    {
        category: "🚀 अंतरिक्ष तथ्य",
        content: "शुक्र ग्रह एकमात्र ऐसा ग्रह है जो पूर्व से पश्चिम घूमता है"
    },
    {
        category: "💻 टेक्नोलॉजी तथ्य",
        content: "पहला कंप्यूटर माउस लकड़ी का बना था (1964 में)"
    },
    {
        category: "🧠 मानव शरीर",
        content: "मानव आँख 1 करोड़ से अधिक रंगों में अंतर कर सकती है"
    },
    {
        category: "🌱 पौधे तथ्य",
        content: "बांस विश्व का सबसे तेज बढ़ने वाला पौधा है (1 दिन में 91 सेमी तक)"
    },
    {
        category: "🌦️ मौसम तथ्य",
        content: "बिजली की चमक सूर्य से 5 गुना अधिक गर्म होती है"
    },
    {
        category: "🎬 फिल्म तथ्य",
        content: "बॉलीवुड की पहली फिल्म 'राजा हरिश्चंद्र' (1913) मूक फिल्म थी"
    },
    {
        category: "💰 अर्थशास्त्र तथ्य",
        content: "भारत में पहली पेपर करेंसी 18वीं शताब्दी में बैंक ऑफ हिंदुस्तान ने जारी की"
    },
    {
        category: "🏛️ स्थापत्य तथ्य",
        content: "कुतुब मीनार विश्व की सबसे ऊँची ईंटों से बनी मीनार है (72.5 मीटर)"
    },
    {
        category: "🎵 संगीत तथ्य",
        content: "वीणा को विश्व का सबसे पुराना तार वाद्य यंत्र माना जाता है"
    },
    {
        category: "🥘 खाद्य तथ्य",
        content: "आलू में पानी की मात्रा 80% होती है"
    },
    {
        category: "🚗 परिवहन तथ्य",
        content: "विश्व की पहली मेट्रो रेल लंदन में 1863 में शुरू हुई"
    },
    {
        category: "🦜 पक्षी तथ्य",
        content: "उल्लू अपनी आँखें घुमा सकता है लेकिन पलकें नहीं झपका सकता"
    },
    {
        category: "🌊 समुद्र तथ्य",
        content: "प्रशांत महासागर पृथ्वी के कुल क्षेत्रफल का 30% है"
    },
    {
        category: "🔬 आविष्कार तथ्य",
        content: "कैमरे का आविष्कार करने वाले जोसेफ नाइसफोर निएप्स थे (1826)"
    },
    {
        category: "🐳 समुद्री जीव",
        content: "ब्लू व्हेल का दिल एक कार जितना बड़ा होता है"
    }
];

const dailyFacts = [
    "मानव मस्तिष्क 60% वसा से बना है",
    "शहद कभी खराब नहीं होता",
    "चींटियाँ कभी सोती नहीं हैं",
    "बिल्लियाँ अपने जीवन का 70% समय सोने में बिताती हैं"
];

// Quiz Functions
function loadQuestion() {
    const quizCard = document.querySelector('.quiz-card');
    if(!quizCard) return;
    
    const questionObj = quizData[currentQuestion];
    quizCard.innerHTML = `
        <div class="question">
            <p>${currentQuestion + 1}. ${questionObj.question}</p>
        </div>
        <div class="options">
            ${questionObj.options.map((option, index) => `
                <button class="option" onclick="checkAnswer(${index})">${option}</button>
            `).join('')}
        </div>
        <div class="progress">प्रश्न ${currentQuestion + 1}/${quizData.length}</div>
        <div class="score">स्कोर: ${score}</div>
    `;
}

function checkAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestion].correct;
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => option.disabled = true);
    
    if(selectedIndex === correctIndex) {
        options[selectedIndex].style.backgroundColor = '#2ecc71';
        score++;
    } else {
        options[selectedIndex].style.backgroundColor = '#e74c3c';
        options[correctIndex].style.backgroundColor = '#2ecc71';
    }

    setTimeout(() => {
        currentQuestion++;
        currentQuestion < quizData.length ? loadQuestion() : showFinalResults();
    }, 1500);
}

function showFinalResults() {
    const quizCard = document.querySelector('.quiz-card');
    if(!quizCard) return;
    
    quizCard.innerHTML = `
        <h3>क्विज़ परिणाम</h3>
        <p>आपका स्कोर: ${score}/${quizData.length}</p>
        <button onclick="resetQuiz()">फिर से खेलें</button>
    `;
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

// Fact Functions
function loadFacts() {
    const factGrid = document.querySelector('.fact-grid');
    if(!factGrid) return;
    
    factGrid.innerHTML = factCategories.map(fact => `
        <div class="fact-card">
            <h3>${fact.category}</h3>
            <p>${fact.content}</p>
        </div>
    `).join('');
}

function showDailyFact() {
    const today = new Date().getDate();
    const factIndex = today % dailyFacts.length;
    const dailyFactContainer = document.getElementById('daily-fact');
    
    if(dailyFactContainer) {
        dailyFactContainer.innerHTML = `
            <div class="fact-of-day">
                <h3>📆 दिन का तथ्य</h3>
                <p>${dailyFacts[factIndex]}</p>
            </div>
        `;
    }
}

// Common Functions
function initializeAnimations() {
    const factCards = document.querySelectorAll('.fact-card');
    factCards.forEach(card => {
        card.style.transform = 'translateY(20px)';
        card.style.opacity = '0';
        card.style.transition = 'all 0.5s ease';
    });

    setTimeout(() => {
        factCards.forEach(card => {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        });
    }, 500);
}

function handleScroll() {
    const scrollBtn = document.querySelector('.scroll-top');
    if(window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize App
window.onload = function() {
    // Common Initialization
    document.body.innerHTML += `<button class="scroll-top" onclick="scrollToTop()">↑</button>`;
    window.addEventListener('scroll', handleScroll);
    
    // Page Specific Initialization
    loadQuestion();
    loadFacts();
    showDailyFact();
    initializeAnimations();
};

// FAQ Toggle Functionality
document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.question').addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
