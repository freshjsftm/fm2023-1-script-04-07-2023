const year = {
  winter: 'cold',
  spring: 'not cold',
  summer: 'hot',
  autumn: 'not hot',
  func: function(){return 123;}
};

for (const property in year) { 
  console.log(`${property} : ${year[property]}`);
}



const curSezon = 'winter';

console.log(curSezon in year);
console.log('summer' in year);
// console.log('winter' in year);
// console.log('fall' in year);

if (curSezon in year) {
  console.log(year[curSezon]);
} else {
  console.log('error');
}
