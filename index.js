'use strict';

// function test(){
//   console.log(this);
// }

// test();

function showHeader(header) {
  console.log(this); //undefined
  console.log(header, this.title);
}

// const landing = {
//   title: 'landing',
//   headers: ['Welcome', 'About me', 'Contacts']
// }

const site = {
  title: 'Portfolio',
  headers: ['Welcome', 'About me', 'Contacts'],
  //showHeaders: function(){},
  // // variant 1 - copy address site
  // showHeaders(){
  //   //console.log(this);
  //   const self = this; //copy address site
  //   this.headers.forEach(function(header){
  //     console.log(self); //site
  //     console.log(header, self.title)
  //   })
  // }
  // variant 2 - this argument
  // showHeaders() {
  //   //console.log(this);
  //   this.headers.forEach(showHeader, this); //this===site
  // },
  // variant 3 - bind
  // showHeaders() {
  //   //console.log(this);
  //   this.headers.forEach(showHeader.bind(this)); //this===site
  // },
  // variant 4 - arrow
  showHeaders() {
    //console.log(this); //site
    this.headers.forEach((header) => {
      //console.log(this); //site
      console.log(header, this.title);
    });
  },
};
// debugger
site.showHeaders();

// console.log(this);

// //declaration
// function test1() {
//   console.log(this);
// }

// //expression
// const test2 = function () {
//   console.log(this);
// };

// //arrow
// const test3 = () => {
//   console.log(this);
// };

// test1();
// test2();

// test3();
