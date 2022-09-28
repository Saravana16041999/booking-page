`use strict`;

const movieEl = document.getElementById('Movie')

let tecketpriceEl = movieEl.value; 

// need to select what movie watching 
// select the seat for booking
// calculate the amount and how much for each seat.
const seatsEl = document.getElementById('screen');

const count = document.getElementById('count');

const total = document.getElementById('total');

let seatCountEl = 0;

// function for calculation
function calculUi(){
    count.innerText = seatCountEl
    total.innerText = seatCountEl * tecketpriceEl
    
}


movieEl.addEventListener('change',()=>{
    tecketpriceEl = movieEl.value
    calculUi()
})
seatsEl.addEventListener('click',(e)=>{
    if(e.target.classList.contains('seat')){
        if(!e.target.classList.contains('Ocupied')){
            e.target.classList.toggle('selected')
            const selectedSeatEl = document.querySelectorAll('.row .selected')
            seatCountEl =  selectedSeatEl.length
            calculUi()
        }

    }
})