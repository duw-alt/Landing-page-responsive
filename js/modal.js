const getQuotesBtn = document.querySelector('.get-quotes-btn');
const getQuotesBtn2 = document.querySelector('.get-quotes2-btn');
const contactUsBtn = document.querySelector('.contact-us-btn');
const closeBtn = document.querySelector('.close-button');
const modalWrap = document.querySelector('.modal-wrap');

modalWrap.classList.add('hidden');

getQuotesBtn.addEventListener('click', () => {
    modalWrap.classList.remove('hidden');
});

getQuotesBtn2.addEventListener('click', () => {
    modalWrap.classList.remove('hidden');
});

contactUsBtn.addEventListener('click', () => {
    modalWrap.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    modalWrap.classList.add('hidden');
});