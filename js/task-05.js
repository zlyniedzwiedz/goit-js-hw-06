const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value.length === 0) {
        return (textOutput.textContent = "Anonymous");
    }
    textOutput.textContent = event.currentTarget.value;
});
