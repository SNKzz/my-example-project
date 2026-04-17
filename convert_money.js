const button = document.getElementById("button_convert");
const resultFinal = document.getElementById("result");
const moneyInput = document.getElementById("money");

moneyInput.onkeydown = function(e) {
    // Chặn các ký tự: e, E, +, -
    if (["e", "E", "+", "-"].includes(e.key)) {
        e.preventDefault();
    }
};

button.onclick = function convertMoney(){
    
    let money = Number(document.getElementById("money").value);
   
        let fromCurrency = document.getElementById("fromCurrent").value;
        let toCurrency = document.getElementById("toCurrent").value;

        if(fromCurrency === toCurrency) {
            if(fromCurrency === "Vietnam"){
                resultFinal.innerText="Result: " +money+ "VND";
            } else {
                resultFinal.innerText="Result: " +money+ "USD";
            }
            
        } else {
            if(fromCurrency === "Vietnam"){
                let value = money / 24000
               resultFinal.innerText="Result: " +value.toFixed(2)+ "USD";
            } else {
                let value = money * 24000

                resultFinal.innerText="Result: " +value.toLocaleString()+ "VND";
            }
        }
    
}

