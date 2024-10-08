// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('show');
        });
    });
});
