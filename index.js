/*
написати функцію, яка створює об'єкт родина (3)
ключами об'єкта будуть імена
значеннями - назви членів родини
*/

function createObjFamily(members = 3) {
  const family = {};
  for (let i = 0; i < members; i++) {
    const nameMember = prompt('Enter name member'); 
    const statusMember = prompt('Enter status member');
    family[nameMember] = statusMember;
  }
  return family;
}

// const userFamily = createObjFamily();
// console.log(userFamily);
