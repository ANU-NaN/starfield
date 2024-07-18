import Star from './star.js';

function set3DPoint(x, y, z){
  const scale = zModifier / (zModifier + z);
  const x2D = x * scale;
  const y2D = y * scale;

  return [x2D, y2D, scale];
}

const starNumber = 200;
const zModifier = window.innerHeight;
const effects = [];

let x,y,z;
let scale;
let keyframes, options;
let pointFrom, pointTo;
let star;

for (let i=0; i<starNumber; i++){
  x = Math.random() * window.innerWidth;
  y = Math.random() * window.innerHeight;
  z = Math.random() * zModifier;
  

  pointFrom = set3DPoint(x, y, z);
  pointTo = set3DPoint(x, y, z - zModifier);

  star = new Star(i);

  keyframes = [
    {transform: `translate(${pointFrom[0]}px, ${pointFrom[1]}px)
      scale(${pointFrom[2]})`},
    {transform: `translate(${pointTo[0]}px, ${pointTo[1]}px)
      scale(${pointTo[2]})`}
  ];
  options = {
    duration: 1000,
    iterations: Infinity,
    fill: 'both',
    easing: 'linear'
  };

  effects.push(new KeyframeEffect(star.element, keyframes, options));
}

const groupEffect = new GroupEffect(effects);
document.timeline.play(groupEffect);