/*Постоянные значения*/
const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');


/*Переменные значения*/
let profilName = document.querySelector('.profile__name');
let popupName = document.querySelector('.popup__input');
let profilDesk = document.querySelector('.profile__description');
let popupInfo =

    /*Открытие формы*/
    function openPopup() {
        popup.classList.add('popup_opened');
        popupName.value = profilName.textContent;
        popupInfo.value = profilDesk.textContent;
    }

function formSubmitHandler(evt) {
    evt.preventDefault();
    profilName.textContent = popupName.value;
    profilInfo.textContent = popupInfo.value;
    closePopup();
}

/*Закрытие формы*/
function closePopup() {
    popup.classList.remove('popup_opened');
}

/*Обработчики нажатия*/
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);