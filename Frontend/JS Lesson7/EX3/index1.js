//мы можем создать элементы с нуля и прекрепить их к документу html
const newElement= document.createElement("p");

newElement.textContent = "Я был создан при помощи JS";

newElement.style.border = " 4px solid red";

document.body.append(newElement);

const targetElement = document.getElementById("target-element");

const newBtn = document.createElement("button");

newBtn.type = "button";

newBtn.textContent = "нажми на меня"
targetElement.append(newBtn);