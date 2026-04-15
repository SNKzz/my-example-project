function clickButtonText(){
    const replacedText = "Hello World"
    document.getElementById("text").innerHTML = replacedText;
}

function clickButtonAlert(){
    alert("Hello World");
}

function clickButtonConsole(){
    console.log("console da log ra");
}

const textPointed = document.getElementById("textOnChange");
textPointed.addEventListener("mouseover", overMouse) 
textPointed.addEventListener("mouseout", outMouse) 
function overMouse(){
    document.getElementById("textOnChange").style.color = "red";
}

function outMouse(){
    document.getElementById("textOnChange").style.color = "black";
}