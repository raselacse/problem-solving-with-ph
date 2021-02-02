var student1 = {name:'rasel',id:121,phone:775}; //ai gula object
var student2 = {name:'razib',id:122,phone:776};
var student3 = {name:'shawon',id:123,phone:777};

var phone_no = 'phone'; //new variable use kore student2 er phone access kora jai

// var phone_no = student2.phone; //new variable use kore student2 er phone access kora jai
// console.log(phone_no);

var value1 = student1.phone;    // object multiple use korar way number 1
var value2 = student2["phone"];  // object multiple use korar way number 2
var value3 = student3[phone_no];   // object multiple use korar way number 3

//object er value update or change korar way
student1.phone = 8576;  // way number 1
student2["phone"] = 8826;  // way number 2
student3[phone_no] = 5825226;  // way number 3

student1.cinema = 'oviman' // new property add korar way number 1
student2.cinema = 'aowar' // new property add korar way number 2
student3.cinema = 'bindash' // new property add korar way number 3

// console.log(value1);
// console.log(value2);
// console.log(value3);
console.log(student1);
console.log(student2);
console.log(student3);

