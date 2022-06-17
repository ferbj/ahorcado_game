import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ahorcado';
  word = this.makeword();
  hideword='';
  words = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  attempts = 0;
  win = false;
  lost = false;

  constructor(){
    this.hideword='_ '.repeat(this.word.length)
  }

  testword(letter:string){
    this.existletter(letter);
    let wordshidearray = this.hideword.split(' ');

    for (let i = 0; i<this.word.length;i++){
      if(this.word[i] === letter){
        wordshidearray[i] = letter;
      }
    }
    this.hideword = wordshidearray.join(' ');
    this.verifywin();
  }

  makeword() {
    faker.setLocale("es")
    let text = faker.random.word().toUpperCase();
  //  console.log(text)
    return text;
  }

  verifywin(){

    const wordarr = this.hideword.split(' ')
    const wordtoeval = wordarr.join('');
    //if user win
    if (wordtoeval === this.word){
      console.log('User Win')
      this.win = true
    }
    // if user lost
    if (this.attempts>=9)
    {
      console.log('User Lost')
      this.lost = true
    }
  }

  existletter(letter:string){
    if (this.word.indexOf(letter) >=0){
      //letter founded
    }else{
      // letter not founded
      this.attempts++;
    }
  }

}
