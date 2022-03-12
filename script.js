var first_number = "";
var operator = "";
var second_number = "";
var result = "";

function add_digit(cell){
    if(operator == ""){
        first_number += cell.innerHTML;
    }else{
        second_number += cell.innerHTML;
    }

    reflect_progress();
}

function set_operator(cell){
    switch(cell.innerHTML){
        case "+":
            operator = "+";
            break;
        case "-":
            operator = "-";
            break;
        case "×":
            operator = "*";
            break;
        case "÷":
            operator = "/";
    }

    reflect_progress();
}

function calculate_result(){
    var num1 = parseInt(first_number);
    var num2 = parseInt(second_number);

    switch(operator){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
    }

    reflect_result();
}

function reflect_progress(){
    var result_display = document.getElementById("result");
    result_display.innerHTML = first_number + " " + operator + " " + second_number;
}

function reflect_result(){
    var result_display = document.getElementById("result");
    result_display.innerHTML = first_number + " " + operator + " " + second_number + " =" + result;
}

function reset(){
    first_number = "";
    operator = "";
    second_number = "";
    result = "";
    
    document.getElementById("result").innerHTML = "result";
}
