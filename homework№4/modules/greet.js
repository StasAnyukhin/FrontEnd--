let myName;
  myName = "Станислав";
export function greet(myName, greet){
  greet = "Привет";
  alert (`${greet}, ${myName}!`);
}

greet(myName);