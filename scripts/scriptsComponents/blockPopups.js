const button = document.querySelector('.form__button--save-on-cloud');
const popup = document.querySelector('.popup--save-on-cloud');

const button2 = document.querySelector('.form__button--save');
const popup2 = document.querySelector('.popup_save-block_plan');

const button3 = document.querySelector('.form__button--delete');
const popup3 = document.querySelector('.popup-delete-block_plan');

const button4 = document.querySelector('.active__createpopup');
const popup4 = document.querySelector('.popup_create-plan');
const blockPlan = document.querySelector('.create-content');

const button5 = document.querySelector('.button__createNewBlock');
const popup5 = document.querySelector('.popup--add-block');
const blockPlan2 = document.querySelector('.create-content2');


button.addEventListener('click', () => {
  popup.style.display = 'block';
});

button2.addEventListener('click', () => {
  popup2.style.display = 'block';
});

button3.addEventListener('click', () => {
  popup3.style.display = 'block';
});

button4.addEventListener('click', () => {
  popup4.style.display = 'block';
  blockPlan.style.display = 'block';
});

button5.addEventListener('click', () => {
  popup5.style.display = 'block';
  blockPlan2.style.display = 'block';
});