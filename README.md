<h1>Criando um jogo simples com HTML, CSS e JAVASCRIPT!</h1>

Utilizando o tutorial disponibilizado [nesse vídeo](https://www.youtube.com/watch?v=r9buAwVBDhA), pude desenvolver o código para criar um jogo simples, de pular obstáculos, utilizando principalmente a linguagem Javascript. 

Para *"ir além"*, pesquisei sobre diferentes funções como: incluir o botão de *restart*, um score rodando até o momento em que o usuário bate no obstáculo e também a funcionalidade de pular somente quando a tecla de espaço é acionada, algo diferente do que foi apresentado no vídeo.

Os códigos desenvolvidos por mim, após pesquisas e referências, são os abaixo:

**Botão Restart**

```
// cria a constante
const restart = document.querySelector('#restart');

// remove a classificação de 'escondido' do botão assim que o usuário atinge o obstáculo, fazendo com que o botão apareça no centro da tela
restart.classList.remove('hidden');

// ao clicar no botão restart, a página é recarregada e o jogo inicia novamente
restart.addEventListener('click', () => {
window.location.reload();
return false;
```

**Score Contínuo**

```
// inicia o jogo com a pontuação 0
let score = 0; 

// aumenta a pontuação continuamente se o loop não for parado, ou seja, se não encontrar obstáculo
score++;

// atualiza o elemento de pontuação na tela
document.getElementById('score').textContent = score;
```

**Pulo somente com a tecla espaço**

```
document.addEventListener('keydown', function(event) {

  if (event.code === 'Space') {

   jump();

  }

 });
```

