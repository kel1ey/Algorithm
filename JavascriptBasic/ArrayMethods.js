/* [Javascript Array Methods] */

//[1] A.concat(B) : return A+B
let A = [1,2,3];
console.log(A.concat(4,5)); // [1,2,3,4,5]
console.log(A.concat([4,5])); // [1,2,3,4,5]
console.log(A.concat(4,[5])); // [1,2,3,4,5]
console.log(A) // [1,2,3]

//[2] A.every(func) : return true/false
// 모든 A의 원소가 해당 함수를 통과하는지 확인
A = [1,2,3];
console.log(A.every(el => el%2 === 0)); // false

//[3] A.some(func) : return true/false
// 어떤 A의 원소가 해당 함수를 통과하는지 확인
A = [1,2,3];
console.log(A.some(el => el%2 === 0)); // true

//[4] A.fill(v) : return A
// A의 모든 원소를 v로 바꿔서 리턴
// 원본이 바뀜
A = [1,2,3];
console.log(A.fill(3)); // [3,3,3]
console.log(A); // [3,3,3]

//[5] A.filter(func) : return A' 
// A의 원소 중 제공된 함수를 통과하는 원소로 이뤄진 배열
A = [1,2,3];
console.log(A.filter(el => el%2 === 1)); // [1,3]

//[6] A.forEach(func) : return undefined
// A의 원소를 돌면서 해당 함수를 실행, 리턴값이 없다.
A = [1,2,3];
console.log(A.forEach(el => el%2 === 0));
A.forEach(el => console.log(el));
//1
//2
//3
A.forEach((el, index) => console.log(index+'번쨰 원소는 '+el)); // index 넘기는거 가능!
// 0번쨰 원소는 1
// 1번쨰 원소는 2
// 2번쨰 원소는 3

//[7] A.includes(v) : return true/false
//배열에 특정 원소가 포함되어 있는지 확인
A = [1,2,[3]];
console.log(A.includes(1)); // true
console.log(A.includes('1')); // false
console.log(A.includes([3])); // false => 배열끼리 같은 주소를 참조하는 것이 아니라면 무조건 false

// [8] A.indexOf(v), A.lastIndexOf(v) : return index/-1
A = [1,2,3,2];
console.log(A.indexOf(2)); // 1
console.log(A.indexOf('2')); // -1
console.log(A.lastIndexOf(2)); // 3

// [9] A.join(String) : return String
// A의 모든 원소를 특정문자열로 연결
A = [1,2,3]
console.log(A.join()); // 1,2,3
console.log(A.join(" ")); // 1 2 3
console.log(A.join(":")); // 1:2:3

// [10] A.map(func) : return B
// 모든 A의 원소에 함수를 적용한 배열 반환
A = [1,2,3]
console.log(A.map(el => el*2)); // [2,4,6]

//[11] A.push(v) : return 배열개수 : 맨 뒤 추가
//[11] A.unshift(v) : return 배열개수 : 맨 앞 추가
//[11] A.pop() : return 삭제된 값 : 맨 뒤 삭제
//[11] A.shift() : retutn 삭제된 값 : 맨 앞 삭제
A = [1,2,3]
console.log(A.push(8))  // 4
console.log(A.unshift(7))  // 5
console.log(A.pop())  // 8
console.log(A.shift())  // 7

//[12] A.reduce(func), A.reduceRight(func) : return v
// A의 원소들을 누적해서 func 처리한 결과
A = [1,2,3]
console.log(A.reduce((a, b)=>a+b)); // 6
console.log(A.reduce((a, b)=>a+b, 10)); // 16

//[13] A.slice(s_index, {l_index}) : return A[s_index:l_index-1]
// 단, 배열의 start부터 end-1까지 shallow copy 진행
A = [1,2,3];
console.log(A.slice(1)); // [2,3] => 1번쨰부터 끝까지
console.log(A.slice(-2)); // [2,3] => -2번쨰부터 끝까지
console.log(A.slice(1,2)); // [2]

//[14] A.splice(s_index, size, item1, item2, ...) : return A[s_index, s_index+size-1] => 삭제될 배열 반환
// A의 원소 중, s_index부터 size개를 삭제한 뒤, item들을 추가
// 원본이 바뀜
A = [1,2,3];
console.log(A.splice(1)); // [ 2, 3 ]
console.log(A); // [ 1 ] 

A = [1,2,3];
console.log(A.splice(1,1)); // [2]
console.log(A); // [ 1, 3 ]

A = [1,2,3];
console.log(A.splice(1,2,7,8)); // [ 2, 3 ]
console.log(A); // [ 1, 7, 8 ]

//[15] A.sort(func) : return A
// 원본이 바뀜
A = [1,2,3];
console.log(A.sort((a, b) => b-a)); // [ 3, 2, 1 ]
console.log(A); // [ 3, 2, 1 ]

// [16] A.reverse() : return A
// 원본이 바뀜
A = [1,2,3];
console.log(A.reverse()); // [ 3, 2, 1 ]
console.log(A); // [ 3, 2, 1 ]

// [17] A.toString() : return String
// 배열의 원소를 문자열로 변환 === A.join(",")
A = [1,2,3];
console.log(A.toString()); // 1,2,3
console.log(A); // [ 1, 2, 3 ]

// [18] Array.from(유사배열, func) : return Array
// 유사배열(string, DOM elements)을 배열로 반환
console.log(Array.from("foo")); // [ 'f', 'o', 'o' ]
console.log(Array.from([1,2,3], x => x+x)); // [ 2, 4, 6 ]