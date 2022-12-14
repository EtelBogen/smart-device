const accordionElements = document.querySelectorAll('.page-footer__navigation, .page-footer__contacts');
const accordionTogglers = document.querySelectorAll('.page-footer__navigation button, .page-footer__contacts button');
const mobileScreen = window.matchMedia('(max-width: 767px)');

const initFooterAccordion = () => {

  if (accordionElements.length < 1 || accordionTogglers.length < 1) {
    return;
  }

  const turnOnAccordion = () => {
    for (const accordionElement of accordionElements) {
      accordionElement.classList.add('accordion');
      accordionElement.classList.add('accordion--closed');
    }
  };

  const turnOffAccordion = () => {
    for (const accordionElement of accordionElements) {
      accordionElement.classList.remove('accordion');
      accordionElement.classList.remove('accordion--closed');
    }
  };

  const onMenuToggle = (accordionElement) => {
    if (mobileScreen.matches) {
      const isClosed = accordionElement.classList.contains('accordion--closed');
      for (const element of accordionElements) {
        element.classList.add('accordion--closed');
      }
      if (isClosed) {
        accordionElement.classList.remove('accordion--closed');
      }
    }
  };

  if (mobileScreen.matches) {
    turnOnAccordion();
  }

  for (const accordionElement of accordionElements) {
    accordionElement.querySelector('button').addEventListener('click', onMenuToggle.bind(null, accordionElement));
  }

  mobileScreen.addEventListener('change', () => {
    if (mobileScreen.matches) {
      turnOnAccordion();
    } else {
      turnOffAccordion();
    }
  });
};

export {initFooterAccordion, mobileScreen};
