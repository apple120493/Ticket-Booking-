let selectedSeats = [];

function selectSeat(seat) {
    const seatButton = document.querySelector(`button[onclick="selectSeat(${seat})"]`);
    if (selectedSeats.includes(seat)) {
        selectedSeats = selectedSeats.filter(item => item !== seat);
        seatButton.classList.remove('selected');
    } else {
        selectedSeats.push(seat);
        seatButton.classList.add('selected');
    }
}

function bookTicket() {
    if (selectedSeats.length === 0) {
        document.getElementById("status").innerText = "請選擇至少一個座位！";
        return;
    }

    // 隨機搶票成功或失敗
    const isSuccess = Math.random() > 0.5;

    if (isSuccess) {
        document.getElementById("status").innerText = "恭喜你！搶票成功！選擇的座位是：" + selectedSeats.join(", ");
    } else {
        document.getElementById("status").innerText = "很遺憾，搶票失敗。請再試一次。";
    }
}
