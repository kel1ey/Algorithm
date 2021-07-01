/* 
    문제 1) i번째 인덱스의 값이 i+1인 길이 10의 배열을 만드시오.
*/
let arr = Array(10).fill(null).map((value, index) => index+1);
console.log(arr);   // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


/*  
    문제 2) (독립된) 2차원 배열을 만드시오.
        - 자바스크립트 다차원 배열 선언 방법(https://smilerici.tistory.com/71)
*/
arr = Array(2).fill(0).map(v => Array(2).fill(0));
console.log(arr);   // [ [ 0, 0 ], [ 0, 0 ] ]
arr[0][0] = 1;
console.log(arr);  // [ [ 1, 0 ], [ 0, 0 ] ]

arr = Array(2).fill(null).map(() => Array());
arr[0][0] = 1;
console.log(arr); // [ [ 1 ], [] ]

arr = Array.from(Array(2), () => Array());
arr[0][0] = 1;
console.log(arr); // [ [ 1 ], [] ]

// (참고) 잘못된 예 : 얕은 복사가 일어남
arr = Array(2).fill([]);
arr[0][0] = 1;
console.log(arr);  // [ [ 1 ], [ 1 ] ]


/* 
    문제 3) [1,2,4,5] 배열의 중간에 3을 삽입하시오.
*/
arr = [1,2,4,5];
arr.splice(arr.length/2, 0, 3);
console.log(arr);   // [ 1, 2, 3, 4, 5 ]

/* 
    문제 4) [[1],[2],[3],[4]] 를 deepcopy 하시오.
*/
arr = [[1],[2],[3],[4]];
let copy_arr = JSON.parse(JSON.stringify(arr));
copy_arr[0][0] = 'A';
console.log(arr);   // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]

/* 
    문제 5) 2차원 배열의 중복을 제거하라.(중복 : 길이와 원소들이 같은 것)
        - 입력 : [[1],[1,2],[],[],[1],[2],[1]]
*/
console.log("12".length)
function compareArray(arr1, arr2){
    // 타입 비교?
    
    if(arr1.length != arr2.length) return false
}

function getUnoque(before, after){
    if(before.length == 0) return after;
    if(after.length == 0) after.push(before.shift());
    let is_unique = false
    // after.forEach(arr => {
    //     if(before[0].length == arr.length && ) 
    // })

    if(is_unique) after.push(before.shift());
    return getUnoque(before, after);
}
arr = [[1],[1,2],[],[],[1],[2],[1]];


/*     
    문제 6) 다차원 배열의 빈 배열 제거 
*/
arr = [[1],[1,2],[],[],[1],[2],[1]];
console.log(arr.filter(el => el.length > 0));    // [ [ 1 ], [ 1, 2 ], [ 1 ], [ 2 ], [ 1 ] ]

/* 
    문제 7) 1차원 배열의 중복 제거
*/
arr = [1,2,2,2,2,3,4,5,3,4];
console.log(arr.filter((value, index) => arr.indexOf(value) == index)); // [ 1, 2, 3, 4, 5 ]

/* 
    문제 8) : "HELLO HELLO HI HELLO" 에서 모든 HELLO를 HI로 바꿔라
*/
let str = "HELLO HELLO HI HELLO" ;
console.log(str.split("HELLO").join("HI")); // HI HI HI HI

/* 
    문제 9) : [1,2,4,8,16,32] 배열을 만들어라
*/
arr = Array(6).fill(null).map((value, index)=> 2**index);
console.log(arr);   // [ 1, 2, 4, 8, 16, 32 ]

/*  
    문제 10) : [1,2,3,5,6] splice()를 사용하여 [1,2,3,4,5,6]을 만들어라 
*/
arr = [1,2,3,5,6];
arr.splice(3,0,4);
console.log(arr);   // [ 1, 2, 3, 4, 5, 6 ]