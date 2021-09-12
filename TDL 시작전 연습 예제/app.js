const title = document.querySelector("div.hello:first-child h1");
// 기존에 적용된 헤으응 폰트를 삭제하지 않고 active class를 변경하고자 한다
// 방금 사용했던 classList의 다른 function 
// contains, add, remove를 한 줄에 구현할 수 있는 코드가 있다!

function handleTitleClick() {
    // 변수 하나만 받기 사용하기 때문에 따로 변수를 추가할 필요없음.

    title.classList.toggle("active");
    // title의 classList에 active class가 이미 있는지 확인하여 추가/제거를 해줌.
}

title.addEventListener("click", handleTitleClick);