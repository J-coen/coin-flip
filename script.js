// DOM elements
const coinDiv = document.getElementById('coin-container');
const tails = document.getElementById('tails');
const coin = document.querySelectorAll('img')

// Toss coin function
function tossCoin() {
    // Show tails side every 100 milliseconds
    const showTails = setInterval(() => {
        // Add show class to tails
        tails.classList.toggle('show');
    }, 100);
    
    // Start animation
    coinDiv.classList.add('anim');

    // Call just before coin lands
    setTimeout(() => {
        headsOrTails();
        // Stop tails showing
        clearInterval(showTails);
    }, 1200);

}

// Decide whether heads or tails
function headsOrTails() {
    // Create 50/50 chance
    const fiftyFifty = Math.random() < 0.5;

    // Head or tails conditional
    if(fiftyFifty === true) {
        // Remove class so tails doesn't show and heads does
        tails.classList.remove('show');
    } else {
        // Add class and show tails
        tails.classList.add('show');
    }

    // Remove animation class so coin and be flipped again
    setTimeout(() => {
        coinDiv.classList.remove('anim');
    }, 400);
}


// Event listener for either side of the coin
coin.forEach(coinSide => coinSide.addEventListener('click', tossCoin));

