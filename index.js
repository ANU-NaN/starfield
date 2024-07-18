import Star from './star.js';

const starNumber = 200;
const zModifier = window.innerHeight;

let x,y,z;
for (let i=0; i<starNumber; i++){
  x = Math.random() * window.innerWidth;
  y = Math.random() * window.innerHeight;
  z = Math.random() * zModifier;
  
  new Star(i, x, y, z);
}