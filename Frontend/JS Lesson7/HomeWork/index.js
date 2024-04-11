const btn = document.getElementById("magic-btn");
const clonedBtn = btn.cloneNode(true);
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  clonedBtn.style.width = "180px";
  clonedBtn.style.height ="55px";
  clonedBtn.style.borderRadius ="15px";
  clonedBtn.style.backgroundColor="#a78b71";
  clonedBtn.style.color= "white";
  clonedBtn.style.fontSize= "20px";
  clonedBtn.textContent = "Я изменю тебя";
    document.body.append(clonedBtn);
})

clonedBtn.addEventListener("click", () =>{
  btn.style.backgroundColor= "#9c4a1a";
  btn.style.color= "black";
})
