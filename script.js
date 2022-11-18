function pegarNome() {
    let name;
    name= document.getElementById("nome");

        var valorName = "";
        valorName=name.value;
       
        console.log("valor:" + valorName);

    if(valorName =="") {
        console.log("nome vazio");
        alert("First Name cannot be empty")
    
    }else {
        console.log("não é vazio");
        
    }    
}

function pegarEmail() {
    let email;
    email= document.getElementById("mail"); 

    var valorEmail = "";
    valorEmail=email.value;

    console.log("valor: "+valorEmail);

    if(valorEmail.includes("@") ) {
     console.log("inclui @");
  
    }else{
     console.log("não inclui @");
      alert("e-mail inválido");       
    }

    if(valorEmail.includes(".") ) {
        console.log("inclui .");
    }else{
        console.log("não inclui .");
         alert("e-mail inválido");  
    }

    if(valorEmail ==""){
         console.log("é vazio");
    }else{
        console.log("não é vazio");
         alert("e-mail inválido");       
    }

    if(valorEmail.includes (" ")) {
        console.log("não é válido");
    }else{
        console.log("é válido");
        }
    }

let btm; 
btm = document.getElementById("oi");

btm.adventListener("click", pegarNome);