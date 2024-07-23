import words from './wordList.js';

export class Star{
  constructor(number){
    this.element = document.createElement('div');
    this.element.classList.add('star');
    this.element.innerHTML = number;

    // this.element.addEventListener('click', ()=>{
    //   const lists = document.querySelector('.choose_list');
    //   const list = document.createElement('li');
    //   list.classList.add('check_word');
    //   list.innerHTML = 'word';
    //   lists.append(list);
    // });
    
    document.body.append(this.element);
  }
}

export class Word{
  constructor(number){
    this.text = document.createElement('div');
    this.text.classList.add('word');
    this.text.innerHTML = words[number];

    this.text.addEventListener('click', ()=>{
      const lists = document.querySelector('.choose_list');
      const list = document.createElement('li');
      list.classList.add('check_word');
      list.innerHTML = this.text.innerHTML;
      lists.append(list);
    });

    document.body.append(this.text);
  }
}