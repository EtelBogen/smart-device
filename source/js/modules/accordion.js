const footerNavigation = document.querySelector('.page-footer__navigation');
const footerContacts = document.querySelector('.page-footer__contacts');
const navigationToggle = footerNavigation.querySelector('button');
const contactsToggle = footerContacts.querySelector('button');

const initFooterAccordion = () => {
  footerNavigation.classList.add('page-footer__navigation--close');
  footerContacts.classList.add('page-footer__contacts--close');

  navigationToggle.addEventListener('click', () => {
    if (footerNavigation.classList.contains('page-footer__navigation--close')) {
      footerNavigation.remove('page-footer__navigation--close');
      footerContacts.classList.add('page-footer__contacts--close');
    } else {
      footerNavigation.classList.add('page-footer__navigation--close');
    }
  });

  contactsToggle.addEventListener('click', () => {
    if (footerContacts.classList.contains('page-footer__contacts--close')) {
      footerContacts.classList.remove('page-footer__contacts--close');
      footerNavigation.classList.add('page-footer__navigation--close');
    } else {
      footerContacts.classList.add('page-footer__contacts--close');
    }
  });
};

export {initFooterAccordion};
