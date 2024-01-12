const Button = (buttonText, isDisabled = false) => {
    return `<button class="button" ${isDisabled ? 'disabled' : ''}>${buttonText}</button>`;
};

  export default Button