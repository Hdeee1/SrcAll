document.getElementById("generate-btn").addEventListener("click", function () {
  const randomNumber = generateComplexRandomNumber();
  document.getElementById("result").textContent = `Angka Acak: ${randomNumber}`;
});

function generateComplexRandomNumber() {
  const max = 1000000;
  const min = 0;
  let randomValue = Math.random() * (max - min) + min;

  randomValue = Math.sin(randomValue * Math.PI) * (Math.random() * 1000);
  randomValue = Math.abs(randomValue) % max;

  return Math.floor(randomValue);
}

document.getElementById("spin-btn").addEventListener("click", function () {
  const wheel = document.getElementById("wheel");
  const result = document.getElementById("result");

  const angle = generateComplexAngle();

  wheel.style.transform = `rotate(${angle}deg)`;

  const selectedSegment = Math.floor((angle % 360) / 60) + 1;
  result.textContent = `Anda mendapatkan Hadiah ${selectedSegment}`;
});

function generateComplexAngle() {
  const maxAngle = 360;
  const minAngle = 0;
  let angle = Math.random() * (maxAngle - minAngle) + minAngle;

  const complexFactor = Math.sin(angle) * Math.cos(angle) * 1000;
  angle = (angle + complexFactor) % maxAngle;

  angle += Math.floor(Math.random() * 360);

  return angle;
}
