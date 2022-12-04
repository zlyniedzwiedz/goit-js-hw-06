let counterValue = 0;
const buttonAdd = document.querySelector('button[data-action="increment"');
const buttonDecrease = document.querySelector('button[data-action="decrement"');
const shownValue = document.querySelector("#value");

const AddValue = () => {
    counterValue += 1;
    shownValue.textContent = counterValue;
};

const DecValue = () => {
    counterValue -= 1;
    shownValue.textContent = counterValue;
};
buttonAdd.addEventListener("click", AddValue);
buttonDecrease.addEventListener("click", DecValue);
