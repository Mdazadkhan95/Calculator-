function ClearScreen()
{
    document.getElementById("result").value="";
}
function display(value)
{
    document.getElementById("result").value += value;
}
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value= q;
}
function dis()
{
    var  num1  = document.getElementById("result").value;
    var  num2  = eval(num1)   ;
    document.getElementById("result").value = num2;

}