const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById('resetBtn');

let facets = Number(document.getElementById("facets").value);
let number = Number(document.getElementById("number").value);
let modifier = document.getElementById("modifier").value;
let numMod = Number(document.getElementById("numMod").value);
let form = document.getElementById("form");
let rollResult = document.getElementById("rollResult");
let total = document.getElementById("total");
let resultArray = [];
let oneDaceRes = 0;
let totalRes = 0;

setInterval(formPrint, 200);
rollBtn.addEventListener('click', roll);
resetBtn.addEventListener('click', reset);

function roll(){
    let rollArray = [];
    oneDaceRes = 0;
    totalRes = 0;
    
    facets = Number(document.getElementById("facets").value);
    number = Number(document.getElementById("number").value);
    modifier = document.getElementById("modifier").value;
    numMod = Number(document.getElementById("numMod").value);
    
    for(let i = 1; i <= number; i++){
        oneDaceRes = Math.floor(Math.random() * facets) + 1
        totalRes += oneDaceRes
        rollArray.unshift(oneDaceRes);
    }
    if(modifier == "+"){
        totalRes += numMod;
    }
    else if(modifier == "-"){
        totalRes -= numMod;
    }
    if(result < 0){
        totalRes = 0;
    }

    printTotalRes(rollArray, resultArray);
}
function formPrint(){
    facets = Number(document.getElementById("facets").value);
    number = Number(document.getElementById("number").value);
    modifier = document.getElementById("modifier").value;
    numMod = Number(document.getElementById("numMod").value);

    form.textContent = `${number}d${facets} ${modifier} ${numMod}`;
}
function printTotalRes(rollArray, resultArray){
    let num = resultArray.length + 1;
    let string = num+ ": " + form.textContent + ": ";
    for(let i = 0; i < number; i++){
        if(i == (number - 1)){
            string += `${rollArray[i]} = `
        }
        else{
            string += `${rollArray[i]} + `;
        }
    }
    string += `${totalRes}<hr>`;
    total.textContent = totalRes;

    resultArray.unshift(string);
    resultArray.forEach(resultStrokePrint);
}
function resultStrokePrint(){
    rollResult.innerHTML = resultArray.join("");
}
function reset(){
    resultArray = [];
    rollResult.textContent = "";
    total.textContent = "";
}