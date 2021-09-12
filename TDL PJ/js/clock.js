const clock = document.querySelector(".clock");

const CLOCK_SET = function setClock() {
    function getClock() {
        const date = new Date();
        // 날짜, 시간 정보가 담긴 object

        const GET_HOUR = String(date.getHours()).padStart(2,"0");
        const GET_MINUTES = String(date.getMinutes()).padStart(2,"0");
        const GET_SECONDS = String(date.getSeconds()).padStart(2,"0");

        // padStart, padEnd -> 가지고있는 'string'을 보다 길게 만들어야할때 사용
        // padStart는 앞쪽 빈자릿수, padEnd는 뒷쪽 빈자릿수 만큼의 텍스트를 채워넣음

        // getHour, getMinutes, getSeconds 들은 number이기 떄문에
        // 문자열이 앞쪽에 와야하므로 number타입을 String()으로 감싸줌.
        
        clock.innerText = `${GET_HOUR}:${GET_MINUTES}:${GET_SECONDS}`;
    }

    getClock();
    setInterval(getClock, 1000);
}

setTimeout(CLOCK_SET, 0);

// setInterval, setTimeout은 두 개의 argument를 받음.
    // 첫 번째 인자는 실행하고자하는 function, 
    // 두 번째 인자는 첫번째 안자(함수)의 실행 간격(ms) / 1초 = 1000ms