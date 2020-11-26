
function loadTitle(){
    var title = document.getElementById("title");
    title.innerHTML = "Welcome to JS Functions";
}
loadTitle();

function add(num1, num2){
    var total = num1 + num2;
    return total;
}

var result = add(20, 30);

document.getElementById("answer").innerHTML = result;

//Using the form values

function sum(){
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    
    //String to int conversion with parseInt(string);

    var tot = parseInt(num1) + parseInt(num2);
    return tot;
}

var res = sum();
document.write("<h4> Sum = "+res+"</h4>")