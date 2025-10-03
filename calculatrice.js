function somme(){
    var a = document.getElementById("nmb1").value; 
    var b = document.getElementById("nmb2").value;
    var c = Number(a) + Number(b); 
    document.getElementById("result").value = c;
}