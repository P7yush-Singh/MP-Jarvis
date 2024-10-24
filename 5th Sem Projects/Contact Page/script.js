const texts = [
    "You can reach us easily by filling out the Get in Touch Form",
    "Our team is available 24/7 to assist you with any queries",
    "We value your feedback and strive to provide excellent service"
];

let speed = 100;
const textElement = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if (characterIndex < texts[textIndex].length){
        textElement.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElement.innerHTML.length > 0){
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter;