// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    // Sua implementação aqui
    const perimetro = 2 * (retangulo.largura + retangulo.altura);
    
    const area = retangulo.largura * retangulo.altura; 
    
    
    console.log(`Perímetro: ${perimetro.toFixed(2)}cm²`);
    console.log(`Area: ${area.toFixed(2)}cm²`);
}

const retangulo = {
    largura: 2.0,
    altura: 3.0,
};
//calcularRetangulo(retangulo);

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    // Sua implementação aqui

    let mensagem = "Não é maior de idade.";
    const idadeElegivel = 18;

    if (pessoa.idade >= idadeElegivel) {
        mensagem = "é maior de idade.";
    } 
    //else {
       // mensagem = " Não é maior de idade.";
        
    //}
    
    console.log(`mensagem: ${mensagem}`);

}
const pessoa = {
    nome: "John",
    idade: 25,
    cidade: "New York",
};
//ehAdulto(pessoa);

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    // Sua implementação aqui
    const mensagem = `A linguagem ${obj.linguagem} é regulada pela ${obj.especificação}.`;
    console.log(mensagem);
}
const obj = {
    linguagem: "JavaScript",
    especificação: "ECMAScript",

}; 
concatenaValores(obj);
module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
