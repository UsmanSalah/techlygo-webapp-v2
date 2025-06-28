
document.getElementById('spin').addEventListener('click', function () {
    const wheel = document.getElementById('wheel');
    const deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = 'transform 5s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
});
