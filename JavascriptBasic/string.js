/* [Javascript String Methods] */
let str = 'HELLO WORLD';

// [1] str.charAt(index) : 지정된 위치의 문자 반환
console.log(str.charAt(1)); // E
console.log(typeof str.charAt(1));  // string

// [2] str.indexOf(string), str.lastIndexOf(string) : return index/-1
console.log(str.indexOf('O'));  // 4
console.log(str.lastIndexOf('O'));  // 7

console.log(str.indexOf('LL')); // 2
console.log(str.lastIndexOf('LL')); // 2 
console.log(str.indexOf('OO')); // -1

// [3] str.replace("타겟문자", "치환문자") : 처음나오는 문자열만 치환됨
// 원본 변화 없음
console.log(str.replace("O", "o")); // HELLo WORLD
console.log(str); // HELLO WORLD

// [4] str.substring(시작인덱스, 끝날인덱스) : 시작 ~ 끝-1
// [4] str.sunstr(시작인덱스, 문자개수) : 시작부터 개수만큼
// 원본 변화 없음
console.log(str.substring(1,4));    // ELL
console.log(str.substr(1,4));    // ELLO
console.log(str); // HELLO WORLD

// [5] str.split("문자") : 문자를 기준으로 잘라서 배열을 반환
// 원본 변화 없음
console.log(str.split('O'));    // [ 'HELL', ' W', 'RLD' ]

// [6] str.toLowerCase(), str.toUpperCase()
console.log(str.toLocaleLowerCase());   // hello world

// [7] str.concat("문자열1", "문자열2", ...) : 문자열을 합쳐서 새로운 문자열 반환
// 원본 변화 없음
console.log(str.concat("!!!","#"));   // HELLO WORLD!!!#
console.log(str); // HELLO WORLD

// [8] : str.trim() : 양끝 공백 제거
// 원본 변화 없음
str = "  HELLO WORLD"
console.log(str.trim());   //HELLO WORLD
console.log(str); // HELLO WORLD
