 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Aldo';
  age = 50;
  buttonDesabled = true;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  person = {
    name: 'Aldo',
    age: 10,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  toggleButton(){
    this.buttonDesabled = !this.buttonDesabled;
  }

  ageIncrease(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
