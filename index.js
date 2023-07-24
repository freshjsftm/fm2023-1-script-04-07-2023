'use strict';

const site = {
  title: 'Portfolio',
  headers: ['Welcome', 'About me', 'Contacts'],
  //showHeaders: function(){},
  // showHeaders(){
  //   //console.log(this);
  //   this.headers.forEach(function(header){
  //     console.log(this); //undefined
  //     console.log(header, this.title)
  //   })
  // }
  showHeaders() {
    //console.log(this); //site
    this.headers.forEach((header) => {
      //console.log(this); //site
      console.log(header, this.title);
    });
  },
};

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
