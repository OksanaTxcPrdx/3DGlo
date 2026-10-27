const formValidation = () => {
    const forms = document.querySelectorAll('form');
    let textInputs = [];
    let emailInputs = [];
    let telInputs = [];
    const regExpErrorTextInput = /[^а-яё\-\s]+/gi;
    const regExpErrorEmailInput = /[^a-z\d\@\-\_\.\!\~\*\']+/gi;
    const regExpErrorTelInput = /[^\d\(\)\-]/g;
    const regExpErrorSpaces = /[\s]{2,}/g;
    const regExpErrorDashes = /[\-]{2,}/g;
    const regExpErrorStartEnd = /^[\s\-]|[\s\-]$/g;

    const prohibitInput = (inputs, regExpError) => {
        inputs.forEach(input => {
            input.addEventListener('blur', (event) => {
                input.value = input.value.replace(regExpError, '');
                input.value = input.value.replace(regExpErrorDashes, '-');
                input.value = input.value.replace(regExpErrorSpaces, ' ');
                input.value = input.value.replace(regExpErrorStartEnd, '');

                if (event.target.matches('input[type=text]') && !event.target.value === null) {

                    let words = event.target.value.split(' ');
                    words = words.map((word) => {
                        let firstL = word[0].toUpperCase();
                        let rest = word.slice(1).toLowerCase();
                        return `${firstL}${rest}`;
                    })
                    event.target.value = words.join(' ');
                }
            })
        })
    }

    forms.forEach(form => {
        let inputsText = form.querySelectorAll('input[type=text], input[placeholder="Ваше сообщение"]');
        inputsText.forEach(input => textInputs.push(input))
        let inputsEmail = form.querySelectorAll('input[type=email]');
        inputsEmail.forEach(input => emailInputs.push(input))
        let inputsTel = form.querySelectorAll('input[type=tel]');
        inputsTel.forEach(input => telInputs.push(input))
    })

    prohibitInput(textInputs, regExpErrorTextInput);
    prohibitInput(emailInputs, regExpErrorEmailInput);
    prohibitInput(telInputs, regExpErrorTelInput);

}

export default formValidation;