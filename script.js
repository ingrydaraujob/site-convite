// Função para mover o botão "Não" para um local aleatório quando o mouse se aproxima
const botaoNao = document.getElementById('botaoNao');

// Função para gerar um valor aleatório dentro de um intervalo
function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}

// Adiciona o evento de mouseover no botão "Não"
botaoNao.addEventListener('mouseover', () => {
    // Obtém a largura e altura da janela
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;

    // Define uma posição aleatória dentro da área da tela
    const novaPosicaoX = getRandomPosition(larguraTela - botaoNao.offsetWidth); // Subtrai a largura do botão
    const novaPosicaoY = getRandomPosition(alturaTela - botaoNao.offsetHeight); // Subtrai a altura do botão

    // Mover o botão para a nova posição
    botaoNao.style.position = 'absolute'; // Altera o posicionamento para 'absolute' para mover o botão
    botaoNao.style.left = `${novaPosicaoX}px`;
    botaoNao.style.top = `${novaPosicaoY}px`;
});
