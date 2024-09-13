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

    document.getElementById('contactForm').addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => { data[key] = value; });

        try {
            const response = await fetch('https://formsubmit.co/srinivasaraofullstackdev@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            document.getElementById('formResponse').textContent = 'Form submitted successfully!';

            window.location.href = window.location.href;

        } catch (error) {
            console.error('Error:', error);
            document.getElementById('formResponse').textContent = 'There was an error submitting the form.';
        }
    });

});


