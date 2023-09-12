//object constructor for player and demon lord
function Character(name, health, attackPower, defense, item1, item2, item3) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
    this.defense = defense;
    this.item1 = item1;
    this.item2 = item2;
    this.item3 = item3;
}

// declaring player character and demon lord
let player = new Character('', 100, 10, 10, '', '', '');
let demonLord = new Character('', 100, 10, 10, '', '', '');

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
        main();
    }
    
}

// event listener for ok button and start of game
okButton.addEventListener('click', startGame);

// function for the bulk of game after player enters name
function main() {

    // Function to scroll to the bottom of a container
    function scrollToBottom(container) {
    container.scrollTop = container.scrollHeight;
}

    // declaring main game constants
    // start of game narration and segue into item selection
    const startNarration = [
        "You, The Hero " + player.name + " have spent the last 30 years of your life making a name for yourself across the continent.",
        "You have slain countless monsters and demons, and have saved many villages from the brink of destruction and famine.",
        "You have become a legend, and your name is known far and wide!",
        "At long last, a year into your well deserved retirement, you receive a letter from your hometown that your old nemesis, " + demonLord.name + ", The Demon Lord has returned.",
        "The letter reads: \“Help us, Hero " + player.name + "! The Demon Lord's army has returned to the continent, and they are stealing all of our food and supplies! We are starving! Please, Hero " + player.name + ", you are our only hope!\”",
        "You know what you must do. You must defeat " + demonLord.name + ", The Demon Lord at his palace once and for all, and save the continent from his evil reign of terror!",
        "After a long and exhausting boat ride, some minor trickery and sneakiness, you have come face to face with The Demon Lord himself!",
        "You are standing in the throne room of " + demonLord.name + ", The Demon Lord. He is sitting on his throne, and he is laughing at you.",
        "You think to yourself that The Demon Lord may be laughing now, but he won't be laughing for long because unknown to him, you have brought with you the three items needed to defeat him!",
        "You think back on the three items you have brought with you..."
    ];

    // function to display start of game narration
    function displayStartNarration() {
        let index = 0;

        function displayNextNarration() {
            if (index < startNarration.length) {
                const startNarrationElement = document.createElement('p');
                const br = document.createElement('br');
                startNarrationElement.textContent = "Narrator: " + startNarration[index];
                document.getElementById('textContainer').appendChild(startNarrationElement);
                document.getElementById('textContainer').appendChild(br);
                index++;

                scrollToBottom(textContainer);
                setTimeout(displayNextNarration, 20); // Display next text after 2 seconds
            }
            else {
                itemSelect();
            }
        }

        displayNextNarration();
 
    }
    displayStartNarration();
    // end of start of game narration

    // item select section
    // declaring item constants
    const sword = document.getElementById('sword');
    const shield = document.getElementById('shield');
    const spellBook = document.getElementById('spellBook');
    const potion = document.getElementById('potion');
    const pasta = document.getElementById('pasta');

    // declaring item description constants
    const swordDescription = document.getElementById('swordDescription');  
    const shieldDescription = document.getElementById('shieldDescription');
    const spellBookDescription = document.getElementById('spellBookDescription');
    const potionDescription = document.getElementById('potionDescription');
    const pastaDescription = document.getElementById('pastaDescription');

    // function for item select section
    function itemSelect() {
        const itemSelect = document.getElementById('itemSelect');
        itemSelect.style.display = 'flex';

        // Get all list items (items)
        const items = document.querySelectorAll('.selectionChoices li');
        // Get all item descriptions
        const itemDescriptions = document.querySelectorAll('.itemDescription');

        // adding mousover event listeners to each item
        items.forEach((item, index) => {
            item.addEventListener('mouseover', () => {
                // Show the corresponding item description
                itemDescriptions[index].style.display = 'flex';
            });
    
            item.addEventListener('mouseout', () => {
                // Hide the corresponding item description
                itemDescriptions[index].style.display = 'none';
            });
        });

        const itemButtons = document.querySelectorAll('.selectionChoices button');

        // adding selected buttons to player's inventory
        itemButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // determining which item button was clicked
                const selectedItem = button.textContent;

                // updating the player's object based on the selected item
                if (index === 0) {
                    player.item1 = selectedItem;
                } else if (index === 1) {
                    player.item2 = selectedItem;
                } else if (index === 2) {
                    player.item3 = selectedItem;
                }

                // visual feedback
                button.style.display = 'none';

                // Checking if all three items are selected, then move to the next function
                if (player.item1 && player.item2 && player.item3) {
                    game();
                }
            });
        });
    }

    // end of itemSelect section
    function game() {
    
    }
}

