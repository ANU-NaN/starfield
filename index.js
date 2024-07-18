import Star from './star.js';

const starNumber = 200;
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const zModifier = canvasHeight;
const effects = [];

let x,y,z;
let scale;
let keyframes, options;
let pointFrom, pointTo;
let star;

function set3DPoint(x, y, z){
  const scale = zModifier / (zModifier + z);
  const x2D = x * scale + canvasWidth * 0.5;
  const y2D = y * scale + canvasHeight * 0.5;

  return [x2D, y2D, scale];
}

for (let i=0; i<starNumber; i++){
  x = Math.random() * canvasWidth - canvasWidth * 0.5;
  y = Math.random() * canvasHeight - canvasHeight * 0.5;
  z = Math.random() * zModifier;
  
  scale = zModifier / (zModifier + z);

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
    duration: 5000 / scale,
    iterations: Infinity,
    fill: 'both',
    easing: 'linear'
  };

  effects.push(new KeyframeEffect(star.element, keyframes, options));
}

const groupEffect = new GroupEffect(effects);
document.timeline.play(groupEffect);
