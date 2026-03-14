const dictionary = {
    tr: {
        nav_about: "Hakkımda",
        nav_edu: "Eğitim",
        nav_exp: "Deneyim",
        nav_skills: "Yetenekler",
        nav_ref: "Referanslar",

        name: "MUHAMMED ENES YAKAN",
        location: "Ankara, Türkiye",
        summary: "Yapay zeka, makine öğrenmesi, oyun geliştirme ve gömülü sistemler alanlarında projeler geliştirmiş takım çalışmasına yatkın, araştırmacı ve yeni teknolojileri hızla öğrenip uygulayabilen bir bilgisayar mühendisi.",
        
        education_title: "EĞİTİM",
        edu_uni: "Kırıkkale Üniversitesi | Bilgisayar Mühendisliği (Mezun)",
        edu_gpa: "AGNO: 2.96",

        experience_title: "DENEYİM",
        exp_lodos_title: "Oyun Geliştirme | Lodos Games",
        exp_lodos_loc: "<i class=\"fa-solid fa-location-dot\"></i> Ankara, Türkiye",
        exp_lodos_role: "Slot Oyunu",
        exp_lodos_desc: "Casino Simulator projesindeki slot oyununun frontend ve backend geliştirmesini tamamen üstlendim; oyuncuların daha eğlenceli vakit geçirmesini sağlamak amacıyla oyun döngüsü ve kullanıcı deneyimini optimize ettim; sonuç olarak modül, oyunun en çok oynanan parçası oldu.",
        steam_btn_text: "Steam'de İncele",
        community_title: "Topluluk Görselleri",

        exp_ai_title: "Yapay Zeka Modeli | Kişisel Proje",
        exp_ai_role: "Müzik Akor Tespiti İçin Yapay Zeka Modeli",
        exp_ai_desc: "İnternetten etiketli veri toplayarak NAS tekniğiyle bir yapay zeka modeli geliştirdim; müziklerden akor/nota tespitini gerçekleştirmek amacıyla çalıştım; %96 doğruluk oranına ulaştım ve STT entegrasyonu için arayüz planlaması yaptım.",

        exp_auto_title: "Otomasyon | Kişisel Proje",
        exp_auto_role: "ROI Tabanlı Ekran Yakalama ile Satın Alma Otomasyonu",
        exp_auto_desc: "Çevrimiçi platformlarda satın alma sürecini otomatikleştirmek için ROI tabanlı ekran yakalama ve OCR kullanan bir sistem geliştirdim; fiyatların eşik değerin altına düşmesini takip ederek çoklu ürün satın almayı hızlandırmak amacıyla çalıştım; otomatik satın alma akışı kurdum ve gelecekte %100 doğruluk için hook sistemi planladım.",

        exp_hw_title: "Donanım | Teknofest Projesi",
        exp_hw_role: "Joystick Tasarımı",
        exp_hw_desc: "STM32 mikrodenetleyicisiyle joystick verilerini düşük gürültüyle aktaran bir kontrolcü geliştirdim; dron ve araçların daha hassas kontrolünü sağlamak amacıyla tasarladım; sonuç olarak daha kontrollü hareketler elde ettim.",

        skills_title: "YETENEKLER",
        skill_prog: "Programlama Dilleri",
        skill_ai: "Yapay Zeka / ML",
        skill_game: "Oyun & Gömülü Sistemler",

        ref_title: "REFERANSLAR",
        ref_founder: "Kurucu",
        ref_uni: "KIRIKKALE ÜNİVERSİTESİ",
        
        footer_rights: "Tüm hakları saklıdır."
    },
    en: {
        nav_about: "About",
        nav_edu: "Education",
        nav_exp: "Experience",
        nav_skills: "Skills",
        nav_ref: "References",

        name: "MUHAMMED ENES YAKAN",
        location: "Ankara, Turkey",
        summary: "A computer engineer who has developed projects in artificial intelligence, machine learning, game development, and embedded systems; team-oriented, investigative, and able to quickly learn and apply new technologies.",
        
        education_title: "EDUCATION",
        edu_uni: "Kırıkkale University | Computer Engineering (Graduate)",
        edu_gpa: "GPA: 2.96",

        experience_title: "EXPERIENCE",
        exp_lodos_title: "Game Development | Lodos Games",
        exp_lodos_loc: "<i class=\"fa-solid fa-location-dot\"></i> Ankara, Turkey",
        exp_lodos_role: "Slot Game",
        exp_lodos_desc: "I fully undertook the frontend and backend development of the slot game in the Casino Simulator project; optimized the game loop and user experience to ensure players had a more enjoyable time; as a result, the module became the most played part of the game.",
        steam_btn_text: "View on Steam",
        community_title: "Community Screenshots",

        exp_ai_title: "Artificial Intelligence Model | Personal Project",
        exp_ai_role: "Music Chord Recognition AI Model",
        exp_ai_desc: "By collecting labeled data from the internet and using the NAS technique, I developed an artificial intelligence model; I worked to perform chord/note recognition from music; I achieved an accuracy rate of 96% and made interface planning for the future use of STT integration and vocal training.",

        exp_auto_title: "Automation | Personal Project",
        exp_auto_role: "ROI-Based Screen Capture for Purchase Automation",
        exp_auto_desc: "I developed a system using ROI-based screen capture and OCR to automate the purchasing process on online platforms; by tracking the prices of items and purchasing them when they fell below a certain threshold, I made it into an automation capable of handling multiple items; in the future, I planned to develop a hook system for colored or sharp-edged texts that OCR could not read, to achieve 100% purchase accuracy.",

        exp_hw_title: "Hardware | Teknofest Project",
        exp_hw_role: "Joystick Design",
        exp_hw_desc: "I developed a project with the STM32 microcontroller to read joystick data with low noise in a computer environment; this project became a controller that can be used for drones and cars, and more controlled movements were achieved.",

        skills_title: "SKILLS",
        skill_prog: "Programming Languages",
        skill_ai: "Artificial Intelligence / ML",
        skill_game: "Game & Embedded Systems",

        ref_title: "REFERENCES",
        ref_founder: "Founder",
        ref_uni: "KIRIKKALE UNIVERSITY",

        footer_rights: "All rights reserved."
    }
};

let currentLang = 'tr';

function setLanguage(lang) {
    currentLang = lang;
    
    // Update active button state
    document.getElementById('btn-tr').classList.toggle('active', lang === 'tr');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    // Update texts
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (dictionary[lang][key]) {
            el.innerHTML = dictionary[lang][key]; // innerHTML so we can inject icons if necessary like location
        }
    });

    // Update document language
    document.documentElement.lang = lang;
}

// Event Listeners for language switch
document.getElementById('btn-tr').addEventListener('click', () => setLanguage('tr'));
document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));

// Initial observer to trigger intro animations if scrolled
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section-block').forEach(section => {
    observer.observe(section);
});

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainNav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (mainNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Lightbox Logic (Modified for dynamic carousel images)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');

// Event delegation for gallery images since they are dynamically cloned
document.querySelector('.carousel-track-wrapper').addEventListener('click', function(e) {
    if (e.target.classList.contains('comm-img')) {
        // Prevent opening if it's currently sliding (optional safety check)
        // ... but we allow it.
    }
});

// For pure static Lightbox functionality, handled by anchor tags via hrefs now.

// Infinite Carousel Logic
const track = document.getElementById('carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let items = Array.from(track.children);

// Set up infinite cloning
const itemsPerScreen = window.innerWidth <= 768 ? 1 : 3;

// Clone first and last few elements to create the illusion of infinite scrolling
items.forEach(item => {
    const clone = item.cloneNode(true);
    clone.classList.add('clone');
    track.appendChild(clone);
});

// To clone at the start, we prepend in reverse order
[...items].reverse().forEach(item => {
    const clone = item.cloneNode(true);
    clone.classList.add('clone');
    track.prepend(clone);
});

// Update the items array to include clones
let allItems = Array.from(track.children);
let currentIndex = items.length; // Start position is right after the prepended clones
let isTransitioning = false;

// Initialize track position
function updateCarouselPosition(animate = true) {
    const itemWidth = track.children[0].getBoundingClientRect().width;
    track.style.transition = animate ? 'transform 0.4s ease-in-out' : 'none';
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Ensure proper alignment on load and resize
let carouselResizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(carouselResizeTimer);
    carouselResizeTimer = setTimeout(() => updateCarouselPosition(false), 150);
});

// Next Slide
nextBtn.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex++;
    updateCarouselPosition();
});

// Prev Slide
prevBtn.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex--;
    updateCarouselPosition();
});

// Handle the reset after transition for infinite effect
track.addEventListener('transitionend', () => {
    isTransitioning = false;
    
    // Total original items
    const originalCount = items.length;
    
    if (currentIndex <= 0) {
        // Scrolled too far left, jump to the end of the original set
        currentIndex = originalCount;
        updateCarouselPosition(false);
    } else if (currentIndex >= allItems.length - itemsPerScreen) {
        // Scrolled too far right, jump to the start of the original set
        // Adding the visible items offset to prevent blank spacing wrap bugs
        currentIndex = originalCount; 
        updateCarouselPosition(false);
    }
});

// Initial position
updateCarouselPosition(false);

// Matrix Background Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

const chars = '01';
const fontSize = 14;
let columns, drops;

function initMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = Math.floor(Math.random() * (canvas.height / fontSize));
    }
}

function drawMatrix() {
    // Translucent black background to create fading tail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#10b981'; // Matrix green color
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

initMatrix();
setInterval(drawMatrix, 50);

let matrixResizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(matrixResizeTimer);
    matrixResizeTimer = setTimeout(() => initMatrix(), 150);
});
