function setDate() {
    const now = new Date();
    // second hand
    const seconds = now.getSeconds();
    // console.log(seconds);
    const secondsDegrees = ((seconds /60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 
    // minutes  hand
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
    // hour hand
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
 

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setInterval(setDate , 1000);