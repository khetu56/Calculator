
const input = document.getElementById('num');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        switch (buttonText) {
            case 'DEL':
                input.value = input.value.slice(0, -1);
                break;
            case 'RESET':
                input.value = '0';
                break;
            case '=':
                try {
                    input.value = eval(input.value);
                } catch (error) {
                    input.value = 'Error';
                }
                break;
            default:

                if (input.value === '' && '*/'.includes(buttonText)) {
                    return;
                }

                if ('+-*/'.includes(buttonText) && '+-*/'.includes(input.value.slice(-1))) {
                    return;
                }

                input.value += buttonText;
        }
    });
});
