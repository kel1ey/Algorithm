/* [Javascript Object Methods] */

let obj = { deep: { key: 'value' }, shallow: false };

// [1] deep copy 
// [1-1] JOSN.parse() : string -> object
console.log(typeof JSON.parse('{}'));   // object
// [1-2] JOSN.stringify() : object -> string
console.log(typeof JSON.stringify({})); // string

// [1-3] depp copy
let copy = JSON.parse(JSON.stringify(obj));
console.log(copy); // { deep: { key: 'value' }, shallow: false }
obj.deep.key = 'change';
obj.shallow = true;
console.log(obj); // { deep: { key: 'change' }, shallow: true }
console.log(copy); // { deep: { key: 'value' }, shallow: false }

// [2] Object methods : object -> array
// [2-1] Object.keys(obj) : return array
console.log(Object.keys(obj));  // [ 'deep', 'shallow' ]

// [2-2] Object.values(obj) : return array
console.log(Object.values(obj)); // [ { key: 'change' }, true ]

// [2-2] Object.entries(obj) : return array
// [[키1, 값1], [키2, 값2]]
// (참고) arr.entries() : [[인덱스1, 값1], [인덱스2, 값2]]
console.log(Object.entries(obj)) // [ [ 'deep', { key: 'change' } ], [ 'shallow', true ] ]


// [3] obj.hasOwnProperty(v) : return true/false
console.log(obj.hasOwnProperty('deep'));  // true

// [4] for-in : object의 key
// (참고) for-of는 사용불가(obj is not iterable)
for(key in obj){
    console.log(key);
}
//deep
//shallow

