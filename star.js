export default class Star{
  constructor(number){
    this.element = document.createElement('div');
    this.element.classList.add('star');
    this.element.innerHTML = number;

    this.element.addEventListener('click', ()=>{
      const lists = document.querySelector('.choose_list');
      const list = document.createElement('li');
      list.classList.add('check_word');
      list.innerHTML = 'word';
      lists.append(list);
    });
    
    document.body.append(this.element);
  }
}