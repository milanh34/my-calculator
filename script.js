const delbutton = document.querySelector(".del");   //for delete button
const clrbutton = document.querySelector(".ac");
const eqbutton = document.querySelector(".eq");

delbutton.addEventListener("click",dele);             //event on clicking delete button
clrbutton.addEventListener("click",clrscr);          //event on clicking clear all button
eqbutton.addEventListener("click",calculate);         //event on clicking equal to button

function display(e) {                                 //function to diplay the value
    document.getElementById("output").value+=e;
}

function clrscr(){                                  //functon of clear all 
    document.getElementById("output").value ="";
}

function calculate(){                               //function to calculate
    const ans = eval(document.getElementById("output").value);
    document.getElementById("output").value=ans;
}

function dele(){                                       //function to delete latest input from user
    document.getElementById("output").value=document.getElementById("output").value.substr(0,document.getElementById("output").value.length-1);
}