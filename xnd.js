const tagnome = document.querySelector("#nome");
const tagemail = document.querySelector("#email");
const tagsenha = document.querySelector("#senha");
const btnCadastro = document.querySelector("#cadastro");

let cadastro = JSON.parse(localStorage.getItem("usuarios")) || [];

let usuariosLogados = JSON.parse(localStorage.getItem("usuarioLogados")) || null;

const tagloginemail = document.querySelector("#emaillogin");
const tagloginsenha = document.querySelector("#senhalogin");
const btnLogin = document.querySelector("#login");

const  btnSair = document.querySelector("#desconectar");
const exibirnome = document.querySelector("#exibirUsuario");
const btnjogar = document.querySelector('#jogar')
const bntHome = document.querySelector("#home")

if(window.location.pathname.endsWith("xnd.html")&& usuariosLogados){
  window.location.href = "pagina2.html";
}

if(window.location.pathname.endsWith("pagina2.html")&& !usuariosLogados){
  window.location.href = "xnd.html";
}

if(window.location.pathname.endsWith("raiz.html")){
  bntHome.addEventListener("click", function(){
    window.location.href ="pagina2.html"
  })
}
if(window.location.pathname.endsWith("pagina2.html")){
  btnjogar.addEventListener("click", function(){
    window.location.href ="raiz.html"
  })
}

if(window.location.pathname.endsWith("pagina2.html")){
btnSair.addEventListener("click" , function(){
  localStorage.removeItem("usuarioLogados");
  usuariosLogados = null;
  window.location.href = "xnd.html"

}
)
}

if(window.location.pathname.endsWith("xnd.html")){

btnCadastro.addEventListener("click" , function(){
     const nome = tagnome.value
     const email = tagemail.value
     const senha = tagsenha.value
     if (nome === "" | email ==="" | senha ==="" ) {
    return (alert ("Preencha todos os campos!") )
    } 

    else {
     if (email.includes ("@")) {

     const usuario = {nome: nome , email:  email , senha: senha} ;
     cadastro.push(usuario);
     localStorage.setItem("usuarios" , JSON.stringify(cadastro));
              // Gera o hash do JSON atualizado
    const texto = JSON.stringify(cadastro);
    const hash = CryptoJS.SHA256(texto).toString();
    localStorage.setItem("usuarios_hash", hash);
     alert ("Cadastrado com sucesso!") 
     console.log(cadastro);
      tagnome.value = "" 
      tagemail.value = ""  
      tagsenha.value = ""

    }
    else {
      
      return(alert ("O Email '"+ email + "' não é válido, tente novamente"))
    }
  };
 }
);
    btnLogin.addEventListener("click" , function(){

    const emaillogin = tagloginemail.value
    const senhalogin = tagloginsenha.value

    const existe = cadastro.find(function(usuario){
        return usuario.email === emaillogin && usuario.senha === senhalogin

    })
    
    if (existe) {
      usuariosLogados = {nome: existe.nome , email:  existe.email};
      localStorage.setItem("usuarioLogados", JSON.stringify(usuariosLogados));
      alert("Login realizado com sucesso!")
      window.location.href = "pagina2.html"
    }
     else{
      alert("O usuario não foi encontrado!")      
    }
    tagloginemail.value = ""
    tagloginsenha.value = ""
  }
)

}
if (window.location.pathname.endsWith("pagina2.html")) {
  const usuariosLogados = JSON.parse(localStorage.getItem("usuarioLogados"));
  const saudacao = document.querySelector("#saudaçao");

  if (usuariosLogados && saudacao) {
    saudacao.textContent = `Olá, ${usuariosLogados.nome}!` ;
  }
}


