/*Постоянные значения*/
const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const background = document.querySelector('.popup__background');
const submitButton = document.querySelector('.popup__submit-button');

/*Переменные значения*/
let profilName = document.querySelector('.profile__name');
let popupName = document.querySelector('.popup__username-text');
let profilDesk = document.querySelector('.profile__description');
let popupInfo = document.querySelector('.popup__text');

/*Присваиваем данные для формы*/
popupName.value = 'Жак-Ив Кусто';
popupInfo.value = 'Исследователь океана';

/*Открытие формы*/
function openPopup() {
    popup.classList.add('popup_opened');
    popupName.value;
    popupInfo.value;
}

/*Передача новых данных из формы на страницу*/
function formSubmitHandler() {
    profilName.textContent = popupName.value;
    console.log(popupName.value)
    profilDesk.textContent = popupInfo.value;
    console.log(profilName);
}

/*Закрытие формы*/
function closePopup() {
    popup.classList.remove('popup_opened');
}

/*Обработчики нажатия*/
background.addEventListener('click', closePopup);
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
submitButton.addEventListener('click', formSubmitHandler);
submitButton.addEventListener('click', closePopup);