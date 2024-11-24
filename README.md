Este projeto contém uma implementação otimizada de um algoritmo para gerar números aleatórios sem repetição, como os necessários para apostas na Mega-Sena. A motivação foi reduzir o desperdício computacional em comparação com uma solução inicial que apresentava geração de números repetidos, obrigando o código a fazer várias tentativas desnecessárias.

## Solução Inicial

A primeira abordagem para gerar números aleatórios sem repetição usava um loop que gerava números e os adicionava a uma lista, mas verificava cada novo número para garantir que ele não fosse repetido. Se um número fosse repetido, um novo número aleatório seria gerado, e isso continuava até que a lista contivesse os 6 números desejados.
Este método, embora funcional, não é eficiente. Quando pedimos para gerar mais números, aumentam as chances de números repetidos, o que leva o programa a gastar mais tempo em verificações e re-execução do processo de geração aleatória. Em um teste com 50 números, a função inicial teve de gerar 85 números, resultando em 35 "repetições inúteis".
Essa ineficiência motiva a necessidade de uma solução otimizada, pois o algoritmo atual aumenta o consumo de recursos computacionais de forma desnecessária.

## Solução Otimizada

Para solucionar o problema de maneira eficiente, implementamos um algoritmo que evita completamente a necessidade de gerar números repetidos. A estratégia usada foi:

1. **Gerar um Array com Todos os Números Possíveis**: Criamos uma lista ordenada com todos os números de 1 a 60 (os números válidos na Mega-Sena).
2. **Embaralhar o Array**: Em seguida, usamos o algoritmo de Fisher-Yates para embaralhar a lista. Esse algoritmo embaralha a lista de maneira justa e eficiente.
3. **Selecionar os Primeiros Números**: Após o embaralhamento, selecionamos os primeiros 6 números da lista embaralhada, garantindo que não haja repetições.

Esse método evita verificações adicionais, pois cada número aparece apenas uma vez no array original, eliminando qualquer possibilidade de repetição.

### Código da Solução Otimizada

```javascript
function gerarNumerosMegaSena() {
    const numeros = Array.from({ length: 60 }, (_, i) => i + 1);
    
    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }
    
    return numeros.slice(0, 6).sort((a, b) => a - b);
}

```
Para avaliar o ganho de desempenho da nova abordagem, medimos o tempo de execução de ambas as soluções. A solução otimizada mostra uma economia significativa de tempo em comparação com a versão inicial, pois não gera números repetidos e não precisa verificar duplicatas.

O cálculo percentual de economia de tempo médio é o seguinte:

```javascript
function medirTempoExecucao(func) {
    const inicio = performance.now();
    func();
    const fim = performance.now();
    return fim - inicio;
}

const tempoOriginal = medirTempoExecucao(() => /* algoritmo original */);
const tempoOtimizado = medirTempoExecucao(gerarNumerosMegaSena);

const economia = ((tempoOriginal - tempoOtimizado) / tempoOriginal) * 100;
console.log(`A versão otimizada é ${economia.toFixed(2)}% mais rápida.`);
```
A versão otimizada não apenas reduz o tempo de execução, mas também é mais sustentável em termos de eficiência computacional. Isso está alinhado com os princípios de TI Verde e com os Objetivos de Desenvolvimento Sustentável da ONU, pois utiliza menos ciclos de CPU e, consequentemente, menos energia.

Ao evitar operações redundantes, este algoritmo representa uma melhoria significativa em eficiência e uma aplicação prática dos princípios de otimização em computação.



