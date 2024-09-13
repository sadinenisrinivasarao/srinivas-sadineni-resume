const navOpen = document.querySelector('.fa-bars');
const navClose = document.querySelector('.fa-x');
const nav = document.querySelector('.srinivas-nav-menu');

navOpen.addEventListener('click', () => {
    nav.style.right = "0";
})

navClose.addEventListener('click', () => {
    nav.style.right = "-20rem";
})

document.addEventListener('DOMContentLoaded', function () {

    const typingText = document.getElementById('typing-text');
    const fullText = 'Srinivasa Rao Sadineni,';
    let index = 0;
    const typingSpeed = 100;

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

});




