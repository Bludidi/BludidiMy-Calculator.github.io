function clearScreen(){
      document.getElementById("display").value = ""; //Clearing anything in display 
}

function display(value){
      document.getElementById("display").value += value; //displaying clicked button's value  
}

function calculate() {
    var p = document.getElementById("display").value;   //declaring what's on the display 
    var answer = eval(p);                             //calculate what's displayed on the display 
    document.getElementById("display").value = answer;        //display answer
}
