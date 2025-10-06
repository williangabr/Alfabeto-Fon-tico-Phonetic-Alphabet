// 1. Mapeamento do Alfabeto Fonético
const phoneticAlphabet = {
    'A': 'ALFA', 'B': 'BRAVO', 'C': 'CHARLIE', 'D': 'DELTA', 
    'E': 'ECHO', 'F': 'FOXTROT', 'G': 'GOLF', 'H': 'HOTEL', 
    'I': 'INDIA', 'J': 'JULIET', 'K': 'KILO', 'L': 'LIMA', 
    'M': 'MIKE', 'N': 'NOVEMBER', 'O': 'OSCAR', 'P': 'PAPA', 
    'Q': 'QUEBEC', 'R': 'ROMEO', 'S': 'SIERRA', 'T': 'TANGO', 
    'U': 'UNIFORM', 'V': 'VICTOR', 'W': 'WHISKEY', 'X': 'X-RAY', 
    'Y': 'YANKEE', 'Z': 'ZULU',
    ' ': '/', // Trata espaços
};

// 2. Função principal de conversão
function convertToPhonetic() {
    const inputText = document.getElementById('inputText').value;
    const outputElement = document.getElementById('outputText');
    
    // Converte para maiúsculas e remove quaisquer caracteres não mapeados
    const upperCaseText = inputText.toUpperCase();
    
    let phoneticResult = [];
    
    for (let i = 0; i < upperCaseText.length; i++) {
        const character = upperCaseText[i];
        
        if (phoneticAlphabet[character]) {
            phoneticResult.push(phoneticAlphabet[character]);
        }
        // Caracteres não mapeados (pontuação, etc.) são simplesmente ignorados
    }
    
    outputElement.value = phoneticResult.join(' ');
}

// 3. Adicionar Event Listener ao botão e ao campo de texto (Enter)
document.addEventListener('DOMContentLoaded', () => {
    const convertButton = document.getElementById('convertButton');
    const inputTextElement = document.getElementById('inputText');

    if (convertButton) {
        convertButton.addEventListener('click', convertToPhonetic);
    }
    
    if (inputTextElement) {
        inputTextElement.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                convertToPhonetic();
                event.preventDefault();
            }
        });
    }
});