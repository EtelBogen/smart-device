import { mobileScreen } from './accordion';

const catalogHeaders = document.querySelectorAll('[data-header]');

const addNewCatalogHeader = () => {
  catalogHeaders.forEach ((header) => {
    const valueCatalogHeader = header.getAttribute('data-header');

    if (mobileScreen.matches) {
      header.textContent = valueCatalogHeader;
    }

    mobileScreen.addEventListener('change', () => {
      if (mobileScreen.matches) {
        header.textContent = valueCatalogHeader;
      }
    });
  });
};

export {addNewCatalogHeader};
