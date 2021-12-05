const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const popupform = document.querySelector('#popup-form');

let popupName = document.querySelector('.popup__input_type_user-name');
let popupInfo = document.querySelector('.popup__input_type_user-info');
let profilName = document.querySelector('.profile__name');
let profilDesk = document.querySelector('.profile__description');

function openPopup() {
    popup.classList.add('popup_opened');
    popupName.value = profilName.textContent;
    popupInfo.value = profilDesk.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profilName.textContent = popupName.value;
    profilDesk.textContent = popupInfo.value;
    closePopup();
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupform.addEventListener('submit', formSubmitHandler);