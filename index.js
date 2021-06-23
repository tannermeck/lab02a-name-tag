const nameTag = document.getElementById("name-tag");

const topSection = document.getElementById("top-section");

const nameSection = document.getElementById("name-section");

const bottomSection = document.getElementById("bottom-section");

const nameInput = document.getElementById("name-input");

const submitButton = document.getElementById("submit-button")

submitButton.addEventListener('click', ()=>{
    nameSection.innerText = nameInput.value.toUpperCase()
})

const pronounInput = document.getElementById("pronoun-input")

const pronounButton = document.getElementById("pronoun-button")

const pronounSection = document.getElementById("pronoun-section")

pronounButton.addEventListener('click', ()=>{
    pronounSection.innerText = pronounInput.value.toLowerCase()
})

let eventValue = document.getElementById("event-value")
let attempts = 0
 submitButton.addEventListener('click', (event)=> {
    attempts++
    eventValue.textContent = attempts;
});
//color section
const colorInput = document.getElementById("color-input");
const colorButton = document.getElementById("color-button")

colorButton.addEventListener('click', ()=> {
    topSection.style.backgroundColor = colorInput.value;
    bottomSection.style.backgroundColor = colorInput.value;
});

//font section
const fontInput = document.getElementById("font-input");
const fontButton = document.getElementById("font-button");
const tnr = document.getElementById("tnr");
const cursive = document.getElementById("cursive");

fontButton.addEventListener('click', ()=> {
    nameSection.style.fontFamily = fontInput.value
    console.log(fontInput.value)

})


