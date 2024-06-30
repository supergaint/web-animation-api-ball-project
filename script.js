const ball = document.getElementById('ball')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const reverse = document.getElementById('reverse')
const speedUp = document.getElementById('speed-up')
const speeDown = document.getElementById('speed-down')


const rollAnimation = [{
    transform: 'rotate(0) translate3D(-50%, -50%, 0)',
    color: 'white',
},
{
color: 'blue',
ofset:0.3
},
{
    transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',
    color:'white'
}
];

const rollOptions = {
    duration : 3000,
    iterations: Infinity
};

const roll = ball.animate(rollAnimation, rollOptions)