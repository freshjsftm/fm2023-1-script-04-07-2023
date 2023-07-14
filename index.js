// const obj1 = {};

// const obj2 = Object();
// const obj3 = new Object();

// const cat = {
//   name:'Ray',
//   isMale: true,
//   age: 1,
//   isSleeping: false,
//   talk: function(){
//     return 'meow';
//   }
// };

// const cat2 = {
//   name:'Pushok',
//   isMale: true,
//   age: 3,
//   isSleeping: true,
//   color: 'gray',
//   talk: function(){
//     return 'meow';
//   }
// };

// console.log(cat.name);
// console.log(cat.age);

// console.log('cat', cat);

// cat.age++;
// console.log(cat.age);

// delete cat.isSleeping;
// console.log('cat', cat);

// cat.color = 'wide';

const button1 = {
  content: 'submit',
  autoFocus: false,
  backColor: 'red',
  click: function () {
    return this.content;
  },
};

// console.log(button1.backColor)
// console.log(button1.click())
// button1.name = 'send';

const button2 = {
  content: 'reset',
  autoFocus: true,
  backColor: 'blue',
  click: function () {
    return this.content;
  },
};

const button3 = {
  content: 'subscribe',
  autoFocus: true,
  backColor: 'blue',
  click: function () {
    return this.content;
  },
};

