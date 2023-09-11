//object constructor for player and demon lord
function Character(name, health, attackPower, defense) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
    this.defense = defense;
}

// declaring player character and demon lord
let player = new Character('null', 100, 10, 10);
let demonLord = new Character('null', 100, 10, 10);

// function to generate demon lord's name
function demonLordNameGen() {
    const demonLordNames = ['Y\’garnh', 'Rag\’nyh']
    const randomValue = Math.random();
    if (randomValue < 0.5) {
        return demonLordNames[0];
    }
    else {
        return demonLordNames[1];
    }
}
demonLord.name = demonLordNameGen();


// declaring start of game constants
const playerNameInput = document.getElementById('playerName');
const okButton = document.getElementById('okButton');
const nameInputContainer = document.getElementById('nameInputContainer');

// function to obtain player's name and start the game
function startGame() {
    const playerName = playerNameInput.value;
    if (playerName.trim() === '') {
        alert('enter your name');
    }
    else {
        player.name = playerName;
        console.log('player name: ' + player.name);
        nameInputContainer.style.display = 'none';
    }
    
}

// event listener for ok button and start of game
okButton.addEventListener('click', startGame);

//start of game narration