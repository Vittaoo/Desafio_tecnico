
function inverterString(str) {
    let resultado = '';  
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];  
    }
    
    return resultado;  
  }
  const stringOriginal = "Olá, meu nome é vitor!";
  const stringInvertida = inverterString(stringOriginal);
  
  console.log(`Invertido: ${stringInvertida}`);  
  