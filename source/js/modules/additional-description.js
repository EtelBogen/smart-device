const additionalDescription = document.querySelectorAll('.additional-description');
const buttonAbout = document.querySelector('.additional-description__button');

const initAdditionalDescription = () => {
  const openAdditionalDescription = () => {
    additionalDescription.forEach((el) => {
      el.classList.add('additional-description--opened');
      buttonAbout.innerHTML = 'Свернуть';
    });
  };

  const closeAdditionalDescription = () => {
    additionalDescription.forEach((el) => {
      el.classList.remove('additional-description--opened');
      buttonAbout.innerHTML = 'Подробнее';
    });
  };

  buttonAbout.addEventListener('click', () => {
    if (additionalDescription[0].classList.contains('additional-description--opened')) {
      closeAdditionalDescription();
    } else {
      openAdditionalDescription();
    }
  });
};

export {initAdditionalDescription};
