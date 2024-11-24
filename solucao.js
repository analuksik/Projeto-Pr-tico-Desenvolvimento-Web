function gerarNumerosMegaSena() {
    // Cria um array de números de 1 a 60
    const numeros = Array.from({ length: 60 }, (_, i) => i + 1);
    
    // Embaralha o array de números
    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }
    
    // Seleciona os primeiros 6 números embaralhados
    return numeros.slice(0, 6).sort((a, b) => a - b);
}

// Teste a função
console.log(gerarNumerosMegaSena());
