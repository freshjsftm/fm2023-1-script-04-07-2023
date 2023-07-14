/**
 *
 * @param {string} nameValue
 * @param {boolean} isMale
 * @param {number} age
 * @param {boolean} isSleeping
 * @param {string} color
 */
function Cat(nameValue, isMale, age, isSleeping, color) {
  this.name = nameValue;
  this.isMale = isMale;
  this.age = age;
  this.isSleeping = isSleeping;
  this.color = color;
  this.talk = function () {
    return 'meow';
  };
}

//debugger
const cat1 = new Cat('Ray', true, 1, false, 'wide');
const cat2 = new Cat('Pushok', true, 3, true, 'gray');

// console.log(cat1);

// const button1 = {
//   content: 'submit',
//   autoFocus: false,
//   backColor: 'red',
//   click: function () {
//     return this.content;
//   },
// };

function Button(content, autoFocus, backColor = 'gray') {
  this.content = content;
  this.autoFocus = autoFocus;
  this.backColor = backColor;
  this.borderStyle = 'solid';
  this.amounAngle = 4;
  this.click = function () {
    return this.content;
  };
}
// const button1 = new Button('submit', true);
// console.log(button1);
// button1.content = 'SEND';
// button1.borderStyle = '';
// console.log(button1.click());

// const button2 = new Button('reset', false, 'yellow', 'dotted');
// button2.amounAngle = 0;
// console.log(button2);

// // console.log(button1.backColor)
// // console.log(button1.click())
// // button1.name = 'send';

// const button2 = {
//   content: 'reset',
//   autoFocus: true,
//   backColor: 'blue',
//   click: function () {
//     return this.content;
//   },
// };

// const button3 = {
//   content: 'subscribe',
//   autoFocus: true,
//   backColor: 'blue',
//   click: function () {
//     return this.content;
//   },
// };

function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
}

// const user1 = new User("Michael", "Jordan", 60);
// const user2 = new User("Joe", "Biden", 80);
// const user3 = new User("Olaf", "Scholz", 65);

// console.log(user1.fullName());
// console.log(user2.fullName());
// console.log(user3.fullName());

// /**
//  *
//  * @param {*} name
//  * @param {*} pop
//  * @param {*} area
//  * @param {*} lang
//  */
// function Country(name, pop, area, lang) {
//   this.name = name;
//   this.population = pop;
//   this.area = area;
//   this.language = lang;
//   this.getInfo = function () {
//     return `
// name: ${this.name}
// population: ${this.population}
// area: ${this.area}
// language: ${this.language}
//     `;
//   };
//   this.getDensity = function () {
//     return this.population / this.area;
//   };
// }

// const country1 = new Country('Abubu Kingdom', 40000, 250000, 'abubian');
// console.log(country1.getDensity()); //0.16
// country1.population += 1000;
// console.log(country1.getDensity());
// console.log(country1.getInfo());

// function Country(name, population, area) {
//   this.name = name;
//   this.population = population;
//   this.area = area;
//   this.getInfo = function () {
//     return (
//       'Name:' +
//       ' ' +
//       this.name +
//       '\nPopulation' +
//       ' ' +
//       this.population +
//       '\nArea:' +
//       ' ' +
//       this.area
//     );
//   };
//   this.getDensity = function () {
//     return this.population / this.area;
//   };
// }
// const country1 = new Country('Ukraine', 36744636, 603628);
// const country2 = new Country('USA', 333287557, 3796742);
// const country3 = new Country('Germany', 84270625, 357592);

// console.log(country1.getInfo());
// console.log(country1.getDensity());

// console.log(country2.getInfo());
// console.log(country2.getDensity());

// console.log(country3.getInfo());
// console.log(country3.getDensity());


function Country (name, population, area) {
  this.name = name;
  this.population = population;
  this.area = area;
  this.getInfo = function () {
    return this.name +' population:' +this.population + ' area' + this.area;
  };
  this.getDensity = function () {
    return this.population / this.area ;
    
  };
}

const country1 = new Country ('Ukraine', 48457102, 603549);
console.log( country1.getInfo());
console.log( country1.getDensity());
