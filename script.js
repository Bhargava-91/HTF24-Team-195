const faqBoxes = document.getElementsByClassName("faqbox");

for (let i = 0; i < faqBoxes.length; i++) {
    faqBoxes[i].addEventListener('click', () => {
        const extraContent = faqBoxes[i].querySelector('.extra-content');
        console.log("clicked");

        extraContent.classList.toggle('visible');

        faqBoxes[i].setAttribute('aria-expanded', extraContent.classList.contains('visible'));
    });
}