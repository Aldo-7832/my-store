const username1 = 'Aldo';
const username2: string = 'Aldo';
const username3: string | number  = 1;


const sum = (a: number, b: number) => {
  return a+b;
}
sum(1, 3);

class Person{
  constructor(public age: number, public  lastname: string){

  }
}

const aldo = new Person(21, 'Aldo');
aldo.age
