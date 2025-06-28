
let spinsLeft = 1;
const spinBtn = document.getElementById("spin");
const result = document.getElementById("result");
const spinSound = document.getElementById("spinSound");
const winSound = document.getElementById("winSound");
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const prizes = [
    "Скидка 5%", "Подарок-сюрприз", "Подарочная наклейка",
    "Антистресс-игрушка", "Мини-гаджет", "Наклейка/Сувенир",
    "Бесплатная доставка", "Секретный приз"
];

function drawWheel() {
    const numSectors = prizes.length;
    const angle = (2 * Math.PI) / numSectors;

    for (let i = 0; i < numSectors; i++) {
        ctx.beginPath();
        ctx.moveTo(150, 150);
        ctx.arc(150, 150, 150, i * angle, (i + 1) * angle);
        ctx.fillStyle = i % 2 === 0 ? "#ff6f00" : "#fdd835";
        ctx.fill();
        ctx.save();
        ctx.translate(150, 150);
        ctx.rotate(i * angle + angle / 2);
        ctx.fillStyle = "#000";
        ctx.font = "14px sans-serif";
        ctx.fillText(prizes[i], 60, 5);
        ctx.restore();
    }
}

drawWheel();

spinBtn.addEventListener("click", () => {
    if (spinsLeft <= 0) {
        result.textContent = "Вы уже крутили! Попробуйте после покупки 🎁";
        return;
    }

    spinsLeft--;

    spinSound.play();
    const spinAngle = Math.floor(Math.random() * 360 + 1440); // 4+ spins
    canvas.style.transition = "transform 4s cubic-bezier(.17,.67,.83,.67)";
    canvas.style.transform = `rotate(${spinAngle}deg)`;

    setTimeout(() => {
        winSound.play();
        const prizeIndex = Math.floor(((spinAngle % 360) / 360) * prizes.length) % prizes.length;
        result.textContent = `🎉 Поздравляем! Вы выиграли: ${prizes[prizeIndex]}`;
    }, 4200);
});
