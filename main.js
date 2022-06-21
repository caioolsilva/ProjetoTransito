// gerencia o Canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// gera um número aleatório

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// gera uma cor aleatória

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}//define um vetor de bolas
const bolas = [];
function criachuva(bols){

while (bolas.length < 500) {
   const size = random(2,3);
   const bola = new Bola(
      // posição de sempre uma bola de distância
      // fora das bordas para evitar erros de desenho
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(0,0),
      random(0,15),
      randomRGB(),
      size
   );
      //atualiza o vetor
  bols.push(bola);
   }





}
criachuva(bolas);
//realiza um loop em todas as bolas geradas
function loop() {

   ctx.fillStyle = 'rgba(255, 255, 255, 0.1 )';
   ctx.clearRect(0, 0,  width, height);
   ctx.fillRect(0, 0,  width, height);
  criachuva(bolas);
   for (const bola of bolas) {
    bola.draw();
    bola.update();
    bola.collisionDetect(bolas);
   }
   
   requestAnimationFrame(loop);
   
  }

loop();
