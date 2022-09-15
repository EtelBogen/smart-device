const additionalDescription = document.querySelectorAll('.about-company__additional-description');
const buttonAbout = document.querySelector('.about-company__button');

const initAdditionalDescription = () => {
  const openAdditionalDescription = () => {
    additionalDescription.forEach((el) => {
      el.classList.add('about-company__additional-description--opened');
      buttonAbout.innerHTML = 'Свернуть';
    });
  };

  const closeAdditionalDescription = () => {
    additionalDescription.forEach((el) => {
      el.classList.remove('about-company__additional-description--opened');
      buttonAbout.innerHTML = 'Подробнее';
    });
  };

  buttonAbout.addEventListener('click', () => {
    if (additionalDescription[0].classList.contains('about-company__additional-description--opened')) {
      closeAdditionalDescription();
    } else {
      openAdditionalDescription();
    }
  });
};

export {initAdditionalDescription};
