const calculator = () => {
    const calcBlock = document.querySelector('.calc-block');
    const calcInputs = calcBlock.querySelectorAll('input.calc-item');

    calcInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/g, '');
        })
    })

    console.log(calcInputs);
}

export default calculator;