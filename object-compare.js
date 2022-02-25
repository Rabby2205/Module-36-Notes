const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;
const first1 = { a: 1, b: 2 }
const second1 = { b: 2, a: 1 }
// console.log(JSON.stringify(first));
// console.log(JSON.stringify(second));
if (JSON.stringify(first) == JSON.stringify(second)) {//stringify compare only value && position
    // console.log('objects are equal');
}
else {
    // console.log('objects are defferent');
}
// simple object comparision 
function compareObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}
const isEqual = compareObject(first1, second1);
console.log(isEqual);