const size = 100;
let canvas, ctx;
let pos_x, pos_y;
let img;
let score = 0;

let max_time = 30;
let time_left = max_time;
let timer_running = false;

window.addEventListener('load', () => {
    let score_element = document.getElementById("score");
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    canvas.addEventListener('click', (e) => {
        if (e.x >= pos_x && e.x <= (pos_x + size) && e.y >= pos_y && e.y <= (pos_y + size)) {
            if (!timer_running) {
                timer_running = true;
                time_left = max_time;
                score = 0;
            }
            score++;
            score_element.innerText = `Score: ${score}`;
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            // new_image();
            console.log("Touchey touchey");
        }
    });

    new_image();
});

function new_image() {
    img = new Image();
    img.addEventListener('load', () => {
        pos_x = Math.random() * (canvas.width - size);
        pos_y = Math.random() * (canvas.height - size);
        ctx.drawImage(img, pos_x, pos_y, size, size);
    });
    img.src = "images/black.png";
}

(function timer() {
    setTimeout(timer, 10);
    if (timer_running) {
        time_left -= 0.1;
        let timer_element = document.getElementById("timer");
        timer_element.innerText = `Time remaining: ${time_left.toFixed(1)} seconds`;
        if (time_left <= 0) {
            timer_running = false;
            timer_element.innerText = "Time's up!";
        }
    }
})()
