
function login(){
 var userw = document.getElementById("txtuser").value
 let PASSw= document.getElementById("txtpass").value
 console.log("tu password no es tan secreta....mira"+ PASSw)
 console.log("hola "+ userw)
 if (userw !=""){
     alert("te damos la bienvenida :"+ userw);

 }
}
 
 
 function sumar(){
     var userw = parseInt(document.getElementById("txtuser").value);
     var PASSw= parseInt(document.getElementById("txtpass").value);
     var a= (userw + PASSw);
     alert("la suma es :"+ a );
 }
 
