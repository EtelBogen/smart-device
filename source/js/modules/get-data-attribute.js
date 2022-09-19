import { mobileScreen } from './accordion';

const catalogMobileHeaders = document.querySelectorAll('[data-header]');

const addNewCatalogHeader = () => {
  catalogMobileHeaders.forEach ((header) => {
    const valueCatalogHeader = header.textContent
    const valueCatalogMobileHeader = header.getAttribute('data-header');

    if (mobileScreen.matches) {
      header.textContent = valueCatalogMobileHeader;
    }

    mobileScreen.addEventListener('change', () => {
      if (mobileScreen.matches) {
        header.textContent = valueCatalogMobileHeader;
      } else {
        header.textContent = valueCatalogHeader;
      }
    });
  });
};

export {addNewCatalogHeader};
