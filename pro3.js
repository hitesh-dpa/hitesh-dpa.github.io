var num = "";
        
function func(element){
    var inputValue = document.getElementById("inputField").value;
    document.getElementById("inputField").value = inputValue + element.textContent;
    num = inputValue + element.textContent;
}

function funcclear(){
    document.getElementById("inputField").value = "";
    num = "";
    document.querySelector("#output").innerHTML = "";
}
document.querySelector("#output").innerHTML="output";
var out=document.getElementById("output");
out.style.background="white";
out.style.borderRadius="10px";
out.style.textAlign="Center";

document.querySelector("body").addEventListener("keydown",function oper(e){
    console.log(e.key);
    if (e.key==="Enter"){
        funcres();
    }
    else{
        
    }
})
function funcres(){
    if (num !== "") {
        var result = eval(num);
        document.querySelector("#output").innerHTML = result;
    } else {
        document.querySelector("#output").innerHTML = "Error";
    }
}
function advan(){
    var advance = document.querySelector("#adv");
    advance.addEventListener("click", function() {
    window.open("https://www.desmos.com/scientific");
});
}

function reload(){
    var rd=document.querySelector("#rdl");
    rd.addEventListener("click",function(e){
        e.background="green";
        location.reload();
    })
}