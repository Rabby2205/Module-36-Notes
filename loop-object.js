const student = {
    id: 101,
    money: 5000,
    name: 'Rabby isalm ',
    major: 'web-engineering',
    isRich: false,
}

/**
 * 
 * for (const num of numbers){} //use in array
 * for (const pro in student){} //use in object
 * 
 */
// objectName.property || objectName.["property"] || objectName.[expression] (this tree way  to get object velue of properties)

for (const prop in student) { //Loop through at objet to get value from object properties  .
    // console.log(student[prop]);// to get values only 
    // console.log(prop, student[prop]);//properties with value .
}
const keys = Object.keys(student);
// console.log(keys);
for (const prop of keys) {
    // console.log(student[prop]);
}
// advance
const entries = Object.entries(student);
// console.log(entries);
//const [key,value] = ['name','Rabby islam']-----be distructured and i getting
/**OUtput
 * [
  [ 'id', 101 ],
  [ 'money', 5000 ],
  [ 'name', 'Rabby isalm ' ],
  [ 'major', 'web-engineering' ],
  [ 'isRich', false ]
]

 * 
 */
for (const [key, vlaue] of Object.entries(student)) {
    console.log(key, vlaue);
    /** Output
     * id 101
    money 5000
    name Rabby isalm 
    major web-engineering
    isRich false
     * 
     */
}


