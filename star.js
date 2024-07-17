export default class Star{
  constructor(number){
    const element = document.createElement('div');
    element.classList.add('star');
    element.innerHTML = number;
    document.body.append(element);
  }
}