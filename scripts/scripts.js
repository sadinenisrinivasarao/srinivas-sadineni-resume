const navOpen = document.querySelector('.fa-bars');
const navClose = document.querySelector('.fa-x');
const nav = document.querySelector('.srinivas-nav-menu');

navOpen.addEventListener('click', () => {
    nav.style.right = "0";
})

navClose.addEventListener('click', () => {
    nav.style.right = "-20rem";
})
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
        location.reload();
    }
});

document.addEventListener('DOMContentLoaded', function () {

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

    const navbar = document.getElementsByClassName("navbar")[0];
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky")

        }
    });

   
});




