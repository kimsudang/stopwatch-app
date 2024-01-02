// html 영역에서 그린 요소들을 자스 파일에서 사용하기 위해 불러옴
const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');
const buttonStart = document.getElementById('btn-start');
const buttonStop = document.getElementById('btn-stop');
const buttonReset = document.getElementById('btn-reset');
// const buttonRecode = document.getElementById('btn-recode');

let seconds = 0;
let tens = 0;
// 중간 값을 저장하기 위한 변수
let interval;

// 이벤트 함수 등록
buttonStart.onclick = function () {
    interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function () {
    clearInterval(interval);
}

buttonReset.onclick = function () {
    // 혼자서 리셋 해보려고 했는데 interval의 값을 0으로 두는 경우, clearInterval(0); 둘다 초기화되지 않고 이전 기록 이후로 넘어감
    // 해결: 아예 원래 시간들의 값들을 0으로 다시 세팅하면 됨 => 코드 자동입력으로 도움받음
    // 27줄 코드는 스탑을 누르지 않고 리셋을 누른 경우에도 인터벌이 멈추고 초기화 되어야 함으로 clearInterval();이 필요하다.
    clearInterval(interval);
    seconds = 0;
    tens = 0;
    appendTens.innerText = 0;
    appendSeconds.innerText = 0;
}

function startTimer() {
    tens++;

    if (tens > 99) {
        seconds++;
        // 화면에 반영하기
        appendSeconds.innerText = seconds;
        tens = 0;
        appendTens.innerText = 0;
    } else {
        appendTens.innerText = tens;
    }
}