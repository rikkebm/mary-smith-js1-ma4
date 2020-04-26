const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

firstName.addEventListener("submit", checkLength);

function checkLength(event) {
    const inputValue = event.target.value;
    const valueLength = inputValue.length;

    if (valueLength >= 2) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
}
