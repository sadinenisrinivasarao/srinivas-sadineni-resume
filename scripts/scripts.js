window.onload = function () {
    const navOpen = document.querySelector('.fa-bars');
    const navClose = document.querySelector('.fa-x');
    const nav = document.querySelector('.srinivas-nav-menu');
    const intro_pic = document.querySelector('.intro-pic');
    const intro_text = document.getElementById('intro-text');
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

    navOpen.addEventListener('click', () => {
        nav.style.right = "0";
    });

    navClose.addEventListener('click', () => {
        nav.style.right = "-20rem";
    });
    intro_text.textContent = "I'm"
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') {
            location.reload();
        }
    });

    const typingText = document.getElementById('typing-text');
    const fullText = 'Srinivasa Rao Sadineni,';
    let index = 0;
    const typingSpeed = 50;

    function typeLetter() {
        if (index < fullText.length) {
            typingText.textContent += fullText.charAt(index);
            index++;
            setTimeout(typeLetter, typingSpeed);
        } else {
            document.getElementById('rest-text').style.opacity = 1;
        }
    }

    setTimeout(() => {
        typeLetter();
    }, 100);

    const sections = document.querySelectorAll('.sri-container-items');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });
    intro_pic.src = "./assets/dev-pic.png"
    const navbar = document.getElementsByClassName("navbar")[0];
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });

    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');

    let currentIndex = 0;
    let autoSlideInterval;

    function updateCarousel() {
        const itemWidth = items[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
        startAutoSlide();
    });

    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
        startAutoSlide();
    });

    let startX;
    track.addEventListener('touchstart', (e) => {
        stopAutoSlide();
        startX = e.touches[0].clientX;
    });

    track.addEventListener('touchmove', (e) => {
        const deltaX = e.touches[0].clientX - startX;
        if (deltaX > 50) {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
            startX = e.touches[0].clientX;
        } else if (deltaX < -50) {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
            startX = e.touches[0].clientX;
        }
        startAutoSlide();
    });

    updateCarousel();
    startAutoSlide();


};

