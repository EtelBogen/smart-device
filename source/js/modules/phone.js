
const phoneFields = document.querySelectorAll('#client-phone, #client-phone-pop-up');
const PHONE_TEMPLATE_START = '+7(';
const PHONE_TEMPLATE_MIDDLE = ')';
let isPhoneBeingWritten = false;

const checkPhoneSpelling = () => {
  if (phoneFields.length > 0) {
    for (const field of phoneFields) {
      field.addEventListener('focus', (evt) => {
        if (!evt.target.value) {
          evt.target.value = PHONE_TEMPLATE_START;
        }
      });

      field.addEventListener('blur', (evt) => {
        if (evt.target.value === PHONE_TEMPLATE_START) {
          evt.target.value = '';
        }
      });

      field.addEventListener('input', (evt) => {
        const userValue = evt.target.value;
        const regexp = /[^+?^\(?\)?\d?]/;

        if (userValue && userValue[userValue.length - 1].match(regexp)) {
          evt.target.value = userValue.slice(0, userValue.length - 1);
        }

        if (evt.target.value.length === 5) {
          isPhoneBeingWritten = true;
        }
        if (evt.target.value.length === 6 && isPhoneBeingWritten) {
          evt.target.value += PHONE_TEMPLATE_MIDDLE;
          isPhoneBeingWritten = false;
        }
      });
    }
  }
};

export {checkPhoneSpelling};
