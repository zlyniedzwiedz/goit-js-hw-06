function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

const divBox = document.querySelector("#boxes");
//Create with
const createBoxes = (amount) => {
    let FirstboxSize = 30;
    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        divBox.append(box);
        box.style.height = FirstboxSize + "px";
        box.style.width = FirstboxSize + "px";
        box.style.backgroundColor = `${getRandomHexColor()}`;
        FirstboxSize += 10;
    }
};

createBtn.addEventListener("click", () => {
    if ( input.value > 100 || input.value < 1 ) {
        alert("Please use amount between 1 and 100!")
        input.value = 0
        return
    } 
    createBoxes(input.value);
});


// Seek And Destroy
const destroyBoxes = () => {
  while (divBox.firstChild) {
    divBox.removeChild(divBox.firstChild);
  }
};

destroyBtn.addEventListener("click", () => {
    destroyBoxes()
});


