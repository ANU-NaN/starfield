export default class Star{
  constructor(number, x, y, z){
    const element = document.createElement('div');
    element.classList.add('star');
    element.innerHTML = number;
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    document.body.append(element);
  }
}