const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const restart = document.querySelector('#restart');


// inicia com a pontuação 0
let score = 0; 

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

// condicionais para identificar se o jogador bateu no obstáculo

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clouds).left.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'images/game-over.png';
        mario.style.width = '120px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        restart.classList.remove('hidden');

        clearInterval(loop);

        // mostra o botão de restart se bater em um obstáculo

        restart.addEventListener('click', () => {
            window.location.reload();
            return false;
        });

    } else {
        // aumenta a pontuação continuamente se o loop não for parado, ou seja, se não encontrar obstáculo
        score++;
        // atualiza o elemento de pontuação na tela
        document.getElementById('score').textContent = score;
    }

}, 10);

// aciona o pulo com a tecla espaço

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      jump();
    }
  });