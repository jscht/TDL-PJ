const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(images);

const bgImage = document.createElement("img");
// element를 생성하는 방법.
bgImage.src = `img/${chosenImage}`;
// img 태그에 src속성을 넣은 텍스트를 생성한 것이다.
// 아직 document에 존재하지않고 JS에만 존재한다.
console.log(bgImage);

document.body.appendChild(bgImage);
// 생성한 element를 body내부 제일 아래에 추가!
// prepend를 사용하면 body내부 가장 윗부분에 element 추가