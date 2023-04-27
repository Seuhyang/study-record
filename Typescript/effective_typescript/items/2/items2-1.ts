// 해당 파일은 오류를 확인하기 위해 일부러 문제를 발생한 파일이다.
// 불편하면 맨 상단에 // @ts-nocheck 를 쓸 것.

function plus(a: number, b: number) {
  return a + b;
}

plus(10, null);
// strictNullChecks 옵션에 의해 null은 number 타입에 할당 할 수 없다.

const x: number = null;
const y: number | null = null;

const el = document.getElementById("status");

el.title = "Title Text";

if (el) {
  el.title = "Title Text";
}
el!.title = "Title Text";
