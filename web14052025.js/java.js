/*declarando variáveis*/
/*criando uma função para calculo do IMC*/
/*comentario de bloco*/
//comentario de linha//

function calcImc(){
    let altura = (document.getElementById("al").value)/100; //divisão por 100 para converter em metros.
    //enter
    let peso = document.getElementById("ps").value;

    //converter para número
    altura = parseFloat(altura);
    /*
    tipos de dados;
    int = numeros inteiros
    float = de ponto flutuante, exemplo o preço da gasolina 6,27
    storing = texto
    boolean = verdadeiro ou falso
    */
   peso = parseFloat(peso);


   let Imc = peso / (altura * altura);
   window.alert("Seu IMC é:  "  + Imc);
}
function alternarTema_escuro(){
    const corpo = document.body; //corpo do html
    corpo.classList.toggle("escuro");
    corpo.classList.toggle("claro");
}
function alternarTema_claro(){
    const corpo = document.body; //corpo do html
    corpo.classList.toggle("escuro");
    corpo.classList.toggle("claro");
}