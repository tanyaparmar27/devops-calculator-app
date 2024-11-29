function addNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = num1 + num2;
  }

  function subtractNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = num1 - num2;
}

function multiplyNumbers(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = num1 * num2;
}

function divideNumbers(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if(num2 != 0){
        document.getElementById('result').innerText = num1 / num2;
    }else{
        document.getElementById('result').innerText = "divide by zero exception";
    }
    
}

function clearValues(){
    document.getElementById('num1').value = " ";
    document.getElementById('num2').value = " ";
    document.getElementById('result').value = " ";
}