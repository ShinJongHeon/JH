function generateNumbers() {
    var min = parseInt(document.getElementById('minNumber').value, 10);
    var max = parseInt(document.getElementById('maxNumber').value, 10);
    var quantity = parseInt(document.getElementById('quantity').value, 10);
    var numbers = [];

    for (var i = 0; i < quantity; i++) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(randomNumber);
    }

    document.getElementById('numbersDisplay').innerText = numbers.join(", ");
}

var usedNumbers = [];

function initializeNumbers() {
    usedNumbers = []; // 사용된 번호 목록을 초기화
    document.getElementById('uniqueNumbersDisplay').innerText = ''; // 뽑힌 번호 표시 초기화
    document.getElementById('usedNumbersDisplay').innerText = ''; // 이미 뽑힌 번호 표시 초기화
    document.getElementById('remainingNumbersDisplay').innerText = '남은 번호 개수: '; // 남은 번호 개수 표시 초기화
    updateRemainingNumbersCount(); // 남은 번호 개수 업데이트
}

function generateUniqueNumber() {
    var min = parseInt(document.getElementById('minNumber2').value, 10);
    var max = parseInt(document.getElementById('maxNumber2').value, 10);
    var availableNumbers = [];

    for (var i = min; i <= max; i++) {
        if (!usedNumbers.includes(i)) {
            availableNumbers.push(i);
        }
    }

    if (availableNumbers.length === 0) {
        document.getElementById('uniqueNumberDisplay').innerText = '모든 숫자가 뽑혔습니다!';
        return;
    }

    var randomNumber = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
    usedNumbers.push(randomNumber);

    document.getElementById('uniqueNumberDisplay').innerText = randomNumber;
    document.getElementById('usedNumbersDisplay').innerText = usedNumbers.join(", ");
}

function generateMultipleUniqueNumbers() {
    var min = parseInt(document.getElementById('minNumber2').value, 10);
    var max = parseInt(document.getElementById('maxNumber2').value, 10);
    var quantity = parseInt(document.getElementById('quantity2').value, 10);
    var newNumbers = [];

    for (var i = 0; i < quantity; i++) {
        var availableNumbers = [];

        for (var j = min; j <= max; j++) {
            if (!usedNumbers.includes(j)) {
                availableNumbers.push(j);
            }
        }

        if (availableNumbers.length === 0) {
            break;
        }

        var randomNumber = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
        newNumbers.push(randomNumber);
        usedNumbers.push(randomNumber);
    }

    document.getElementById('uniqueNumbersDisplay').innerText = newNumbers.join(", ");
    document.getElementById('usedNumbersDisplay').innerText = usedNumbers.join(", ");
    updateRemainingNumbersCount();
}
function updateRemainingNumbersCount() {
    var min = parseInt(document.getElementById('minNumber2').value, 10);
    var max = parseInt(document.getElementById('maxNumber2').value, 10);
    var remainingCount = 0;

    for (var i = min; i <= max; i++) {
        if (!usedNumbers.includes(i)) {
            remainingCount++;
        }
    }

    document.getElementById('remainingNumbersDisplay').innerText = '남은 번호 개수: ' + remainingCount;
}

