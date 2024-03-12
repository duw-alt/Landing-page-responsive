const darkModeBtn = document.querySelector('.dark-mode-button');
const lightModeBtn = document.querySelector('.light-mode-button');

lightModeBtn.style.display = 'none';

darkModeBtn.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
  lightModeBtn.style.display = 'block';
  darkModeBtn.style.display = 'none';
}
)

lightModeBtn.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  lightModeBtn.style.display = 'none';
  darkModeBtn.style.display = 'block';
});