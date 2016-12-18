(function () {
    const fieldsList = document.querySelectorAll('.field');
    const fieldsListArray = Array.prototype.slice.call(fieldsList);
    const signUpForEvent = document.querySelector('.event_details-intro .btn-register');
    const signUpForm = document.querySelector('.signUp-form');
    const modalOverlay = document.querySelector('.modal-overlay');
    const signUpFormCloseIcon = document.querySelector('.signUp-form .close-icon');
    const contactUsForm = document.querySelector('.contact_us-block');
    const contactUsFormMobile = document.querySelector('.contact_us-block.mobile');
    const contactUsMobile = document.querySelector('.contact_us-block.mobile .btn-contact-us');
    const contactUsFormCloseIcon = document.querySelector('.contact_us-form .close-icon');

    fieldsListArray.forEach(function (fieldListItem) {
        fieldListItem.querySelector('input, textarea').addEventListener('keyup', function (event) {
            event.preventDefault();
            if (event.target.value.trim()) {
                event.target.classList.add('not-empty');
            } else {
                event.target.classList.remove('not-empty');
            }
        })
    });

    signUpForEvent.addEventListener('click', function (event) {
        event.preventDefault();
        signUpForm.classList.add('show-centered');
        modalOverlay.classList.remove('hidden');
    })

    signUpFormCloseIcon.addEventListener('click', function (event) {
        event.preventDefault();
        signUpForm.classList.remove('show-centered');
        modalOverlay.classList.add('hidden');
    })

    contactUsMobile.addEventListener('click', function (event) {
        event.preventDefault();
        contactUsFormMobile.classList.add('hidden');
        contactUsForm.classList.add('withContactUsFormMobile');
        modalOverlay.classList.remove('hidden');
    })

    contactUsFormCloseIcon.addEventListener('click', function (event) {
        event.preventDefault();
        contactUsFormMobile.classList.remove('hidden');
        contactUsForm.classList.remove('withContactUsFormMobile');
        modalOverlay.classList.add('hidden');
    })

    modalOverlay.addEventListener('click', function (event) {
        event.preventDefault();
        signUpForm.classList.remove('show-centered');
        contactUsFormMobile.classList.remove('hidden');
        contactUsForm.classList.remove('withContactUsFormMobile');
        modalOverlay.classList.add('hidden');
    })

}());


