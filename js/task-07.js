const sizeControl = document.querySelector("#font-size-control");
const currentSize = document.querySelector("#text");

sizeControl.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value
    currentSize.style.fontSize = `${inputValue}px`
})

