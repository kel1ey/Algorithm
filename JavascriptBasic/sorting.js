/* [Javascript Sorting] */


const A = [1,3,5,2,4];

// [1] 숫자 배열의 정렬
// [1-1] 오름차순
A.sort((a, b)=> a-b);
console.log(A); // [ 1, 2, 3, 4, 5 ]

// [1-2] 내림차순
A.sort((a, b)=> b-a);
console.log(A); // [ 5, 4, 3, 2, 1 ]


// [2] 문자열 정렬
// 문자열의 경우, 수식 사용이 불가능. 즉, 부등호를 사용!
const B = ["가","다","마","나","라","바"];
// [2-1] 오름차순
B.sort();
console.log(B); //[ '가', '나', '다', '라', '마', '바' ]

B.sort((a, b) => a > b);
console.log(B); //[ '가', '나', '다', '라', '마', '바' ]

//[2-2] 내림차순
B.sort().reverse();
console.log(B); //[ '바', '마', '라', '다', '나', '가' ]

B.sort((a, b) => a < b);
console.log(B); //[ '바', '마', '라', '다', '나', '가' ]


// [3] 2차원 배열의 정렬
// [3-1] 전체 오름차순
let C = [["I", "S"], ["I", "A"], ["A", "S"], ["A", "C"]];
C.sort();
console.log(C); // [ [ 'A', 'C' ], [ 'A', 'S' ], [ 'I', 'A' ], [ 'I', 'S' ] ]

// [3-2] C[1]에 대해 오름차순
C = [["I", "S"], ["I", "A"], ["A", "S"], ["A", "C"]];
C.sort((arr1, arr2) => arr1[1] > arr2[1]);
console.log(C); // [ [ 'I', 'A' ], [ 'A', 'C' ], [ 'I', 'S' ], [ 'A', 'S' ] ]

// [3-1] C[0]에 대해 오름차순. C[1]에 대해 내림차순
C = [[5, "I"], [8, "S"], [5, "S"], [5, "A"], [7, "S"]];
C.sort((arr1, arr2) => {
    if(arr1[0] == arr2[0]) return arr1[1] < arr2[1];
    return arr1[0] > arr2[0];
});
console.log(C); //[ [ 5, 'S' ], [ 5, 'I' ], [ 5, 'A' ], [ 7, 'S' ], [ 8, 'S' ] ]

// [참고]
const as_order = (a, b) => a>b;
const des_order = (a, b) => a<b;

const T = [1,3,5,2,4];
console.log(T.sort((a,b)=> as_order(a, b)));    // [ 1, 2, 3, 4, 5 ]
console.log(T.sort((a,b)=> des_order(a, b)));    // [ 5, 4, 3, 2, 1 ]


// [주의] 자바스크립트의 sort는 기본적으로 string 비교를 수행
// 숫자 비교를 하고 싶으면, - 연산자를 사용하자!
const arr = ['1','10','2'];

console.log(arr.sort());    // [ '1', '10', '2' ]
console.log(arr.sort((a,b)=> as_order(a, b)));    // [ '1', '10', '2' ]
console.log(arr.sort((a,b)=> des_order(a, b)));     // [ '2', '10', '1' ]

const as_order_n = (a, b) => a-b;
const des_order_n = (a, b) => b-a;
console.log(arr.sort((a,b)=> as_order_n(a, b)));    // [ '1', '2', '10' ]
console.log(arr.sort((a,b)=> des_order_n(a, b)));   // [ '10', '2', '1' ]