const pageBody = document.querySelector('.page__body');
const modal = document.querySelector('.modal');
const buttonOpenModal = document.querySelector('.page-header__button');
const overlayModal = modal.querySelector('.modal__overlay');
const buttonCloseModal = modal.querySelector('.modal__close-button');
const nonFocusByModal = document.querySelector('.wrapper');
const inputName = modal.querySelector('#name-pop-up');
const inputPhone = modal.querySelector('#client-phone-pop-up');
const inputQuestion = modal.querySelector('#question-pop-up');
const checkboxAgreement = modal.querySelector('#agreement-pop-up');

const KEYCODE_TAB = 9;
const SELECTORS = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
  'select:not([disabled]):not([aria-hidden])',
  'textarea:not([disabled]):not([aria-hidden])',
  'button:not([disabled]):not([aria-hidden])',
  'iframe',
  'object',
  'embed',
  '[contenteditable]',
  '[tabindex]:not([tabindex^="-"])'
];


function initFocusLock(element) {
  const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];

  function tabHandler(e) {
    let isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) /* shift + tab */ {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } else /* tab */ {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  }

  element.addEventListener('keydown', tabHandler);
}

function initModals() {

  let focusableElementsOutModal = nonFocusByModal.querySelectorAll(SELECTORS);
  let focusableElementsInModal = modal.querySelectorAll(SELECTORS);

  initFocusLock(nonFocusByModal);

  const setFocus = (elements) => {
    elements.forEach((el) => {
      el.setAttribute('tabindex', '1');
    });
  };

  const removeFocus = (elements) => {
    elements.forEach((el) => {
      el.setAttribute('tabindex', '-1');
    });
  };

  const keyEscDownHandler = (evt) => {
    const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';
    if (isEscKey) {
      evt.preventDefault();
      closeModal();
    }
  };

  const openModal = () => {
    modal.classList.add('is-active');
    pageBody.classList.add('scroll-lock');
    initFocusLock(modal);
    inputName.focus();
    document.addEventListener('keydown', keyEscDownHandler);
    setFocus(focusableElementsInModal);
    removeFocus(focusableElementsOutModal);
  };

  const clearModal = () => {
    inputName.value = '';
    inputPhone.value = '';
    inputQuestion.value = '';
    checkboxAgreement.checked = true;
  };

  const closeModal = () => {
    clearModal();
    modal.classList.remove('is-active');
    pageBody.classList.remove('scroll-lock');
    document.removeEventListener('keydown', keyEscDownHandler);
    setFocus(focusableElementsOutModal);
    removeFocus(focusableElementsInModal);
    initFocusLock(nonFocusByModal);
    focusableElementsOutModal[2].focus();
  };

  buttonOpenModal.addEventListener('click', openModal);
  overlayModal.addEventListener('click', closeModal);
  buttonCloseModal.addEventListener('click', closeModal);
}

export {initModals};
