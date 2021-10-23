// console.log("hello");
// alert('warning you are learning JS')
// var b ='hello maaz ';
// console.log(b)
// var JsAge = promt("what is your age");

// document.getElementById("fromindex").innerHTML=JsAge
prompt("what is your name");

var Score = Math.random() * 100;
Score = Math.floor(Score)+1;


if(Score > 70){
    alert("your amazing.....!! " + Score + "%");
}
if(Score >30 && Score<=70){
    alert("your Good....!! " + Score + "%");
}
if (Score <=30){
    alert("your worst.....!! " + Score + "%");
    

}