function checkAnswer() {
    const options = document.getElementsByName('answer');
    let selectedValue;
    for (const option of options) {
        if (option.checked) {
            selectedValue = option.value;
            break;
        }
    }

    const result = document.getElementById('result');
    if (selectedValue === '2') {
        result.textContent = 'Правильно!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Неправильно. Спробуйте ще раз.';
        result.style.color = 'red';
    }
}
