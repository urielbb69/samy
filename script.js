const openButton = document.getElementById('openLetter');
const letter = document.getElementById('letter');
const message = document.getElementById('message');
const countdown = document.getElementById('countdown');
const fireworks = document.getElementById('fireworks');
const happyNewYear = document.getElementById('happyNewYear');
const audio = document.getElementById('audio');

const mensaje = "                                                                 para ti que eres una persona muy importante en mi vida te quiero desear el mejor año que todo lo que te propongas se te cumpla que te la pases muy bien con tus seres queridos y quiero que sepas que en la vida hay muchos momentos hermosos pero sin duda el mejor de ellos fue cuando te conoci no boy a olividar ese momento sin duda dicen que los sueños se hacen realidad y yo creo que si porque simpre soñe con poder conocer a una niña linda y tierna como tu y la verdad el verte sonreir la vedad que no tine presio simpre tratare de sacarte una sonrisa porque es lo que me hace muy feliz la vedad si quiero algo bonito con tigo niña de ojos bonitos (la pregunto es tu quieres) ATT:uribb❤ ";

openButton.addEventListener('click', () => {
    
    letter.style.display = 'block';
    openButton.style.display = 'none';
    
    audio.play();
    
    let index = 0;
    const interval = setInterval(() => {
        if (index < mensaje.length) {
            message.textContent += mensaje[index];
            index++;
        } else {
            clearInterval(interval);
            showFireworks(); 
        }
    }, 100); 
});


function showFireworks() {
    let countdownValue = 5;
    countdown.style.display = 'block';
    countdown.textContent = countdownValue;

    const countdownInterval = setInterval(() => {
        countdownValue--;
        countdown.textContent = countdownValue;

        if (countdownValue === 0) {
            clearInterval(countdownInterval);
            fireworks.style.display = 'block';
            happyNewYear.style.display = 'block';
            launchConfetti(); 
        }
    }, 1000);
}


function launchConfetti() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { x: 0.5, y:0.5}
    });
}