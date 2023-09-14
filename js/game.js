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
let player = new Character('', 100, 10, 0, 'null', 'null', 'null');
let demonLord = new Character('', 100, 30, 0, 'null', 'null', 'null');

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
                setTimeout(displayNextNarration, 300); // display next text after 3 seconds
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
    // function for item select section
    function itemSelect() {
        const itemSelect = document.getElementById('itemSelect');
        itemSelect.style.display = 'flex';

        // get all list items (items)
        const items = document.querySelectorAll('.selectionChoices li');
        // get all item descriptions
        const itemDescriptions = document.querySelectorAll('.itemDescription');

        // adding mousover event listeners to each item
        items.forEach((item, index) => {
            item.addEventListener('mouseover', () => {
                // Check if itemDescriptions[index] exists before accessing its style
                if (itemDescriptions[index]) {
                    itemDescriptions[index].style.display = 'flex';
                }
            });
        
            item.addEventListener('mouseout', () => {
                // Check if itemDescriptions[index] exists before accessing its style
                if (itemDescriptions[index]) {
                    itemDescriptions[index].style.display = 'none';
                }
            });
        });

        const itemButtons = document.querySelectorAll('.selectionChoices button');
        let selectedItems = 0; // Counter for selected items
        let item1Button = document.getElementById('item1Button');
        let item2Button = document.getElementById('item2Button');
        let item3Button = document.getElementById('item3Button');

        // adding selected buttons to player's inventory
        itemButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // determining which item button was clicked
                const selectedItemText = button.textContent;

                // updating the player's object based on the selected item
                // if the player has the sword or shield, add 10 to attack or defense
                if (index === 0) {
                    player.item1 = selectedItemText;
                    if (player.item1 === "The Sword: Famish") {
                        player.attackPower += 10;
                    } else if (player.item1 === "The Shield: Olea") {
                        player.defense += 10;
                    }
                } else if (index === 1) {
                    player.item2 = selectedItemText;
                    if (player.item2 === "The Sword: Famish") {
                        player.attackPower += 10;
                    } else if (player.item2 === "The Shield: Olea") {
                        player.defense += 10;
                    }
                } else if (index === 2) {
                    player.item3 = selectedItemText;
                    if (player.item3 === "The Sword: Famish") {
                        player.attackPower += 10;
                    } else if (player.item3 === "The Shield: Olea") {
                        player.defense += 10;
                    }
                }

                button.style.display = 'none';
                selectedItems++;

                // Checking if all three items are selected, then move to the next function
                if (selectedItems === 3) {
                    itemSelect.style.display = 'none';
                    game();
                }
            });
        });
    }

    // end of itemSelect section
    function game() {
        
        // demon lord's first dialogue
        const demonLordText0 = [
            "So, Hero " + player.name + ", you have at last come to face me once again.",
            "It has been a long time since we last met, but to me, a being who has lived for millennia, it feels as if it was just yesterday.",
            "I have been waiting for you, Hero " + player.name + ".",
            "Now then, FACE ME!"
        ]

        // function to display demon lord's first dialogue
        function displayDemonLordText0() {
            let index = 0;

            function displayNextDemonLordText0() {
                if (index < demonLordText0.length) {
                    const demonLordText0Element = document.createElement('p');
                    const br = document.createElement('br');
                    demonLordText0Element.textContent = demonLord.name + ", The Demon Lord: " + demonLordText0[index];
                    document.getElementById('textContainer').appendChild(demonLordText0Element);
                    document.getElementById('textContainer').appendChild(br);
                    index++;

                    scrollToBottom(textContainer);
                    setTimeout(displayNextDemonLordText0, 300); // display next text after 2 seconds
                }
                else {
                    battleSequence();
                }
            }
            displayNextDemonLordText0();
        }
        displayDemonLordText0();


        
        // battle sequence
        function battleSequence() {

            // declaring variables and constants used in battle sequence
            // variable to keep track of who's turn it is
            let playerTurn = true;

            // constants for action messages
            const attackMessage = "You attack " + demonLord.name + ", The Demon Lord!";
            const talkMessage = "You try to talk to " + demonLord.name + ", The Demon Lord.";
            const itemMessage = "You use an item!";

            // declaring functions used in battle sequence
            // function to disable buttons
            function disableButtons() {
                document.getElementById('attackButton').disabled = true;
                document.getElementById('talkButton').disabled = true;
                document.getElementById('itemButton').disabled = true;
            };

            //function to display dialogue in text container
            function displayDialogue(text) {
                const dialogueElement = document.createElement('p');
                const br = document.createElement('br');
                dialogueElement.textContent = text;
                document.getElementById('textContainer').appendChild(dialogueElement);
                document.getElementById('textContainer').appendChild(br);
                scrollToBottom(textContainer);
            };

            // function to generate Demon Lord's response to the player's chosen dialogue selection choice
            function demonLordResponse(playerDialogue) {
                if (playerDialogue.includes('Why did you come back?!')) {
                    return "Why? Because it's in my nature, Hero. My hunger for chaos and destruction knows no bounds!";
                }
                else if (playerDialogue.includes("I give up!")) {
                    return "HAHAHAHAHAHAHA!!! I knew you were a coward, Hero " + player.name + "! I knew you would give up! You are no match for me!";
                }
                else if (playerDialogue.includes("I'll give you whatever you want, just stop!")) {
                    return "(He pauses for a second) ...Hero " + player.name + ", all I have wanted for the past 30 years is to see your precious continent be consumed by chaos and carnage. But, if you are truly asking me about my deepest desire; What I have truly wanted for the past 30 years is for something to satiate my endless appetite. It has truly driven me mad!!!! HAHAHAHAHAHAHAHA!!!!!"
                }
                else if (playerDialogue.includes("It's over for you!")) {
                    return "HAHAHAHAHAHAHA!!! You think you can defeat me, Hero " + player.name + "?! I am going to eat you alive!";
                }
            };

            // function for talk options
            function talkOptions() {
                // display talk options
                document.getElementById('dialogueSelect').style.display = 'flex';
            
                // Add event listener to the parent container of dialogue choices
                const dialogueContainer = document.querySelector('.dialogueSelectionChoices');
                dialogueContainer.addEventListener('click', (event) => {
                    if (event.target.tagName === 'BUTTON') {
                        // Get the text of the clicked button (the player's chosen dialogue)
                        const playerDialogue = event.target.textContent;
            
                        // Display Demon Lord's response
                        const demonLordResponseText = demonLordResponse(playerDialogue);
                        displayDialogue("The Hero, " + player.name + ": " + playerDialogue);
                        setTimeout(() => {
                            displayDialogue(demonLord.name + ", The Demon Lord: " + demonLordResponseText);
                        }, 1000);
            
                        // Hide the dialogue selection and proceed to the Demon Lord's turn
                        document.getElementById('dialogueSelect').style.display = 'none';
                        demonLordTurnHandler();
                    }
                });
            };

            // functions for items
            // function to use spell book
            function useSpellBook() {
                const response = "I created that book, Hero. Magic won't work on me!";
                const spellBookMessage = "You read out loud a random page from The Spell Book of Power! A fireball forms in front of you and shoots out towards " + demonLord.name + ", The Demon Lord!";
                const spellBookFailMessage = "The spell hits The Demon Lord, but he shrugs it off like it was nothing!";
                
                displayDialogue("Narrator: " + spellBookMessage);
                setTimeout(() => {
                    displayDialogue("Narrator: " + spellBookFailMessage);
                }, 3000);
                setTimeout(() => {
                    displayDialogue(demonLord.name + ", The Demon Lord: " + response);
                }, 3000);
            }

            // function to use potion
            function usePotion() {
                displayDialogue("Narrator: You drink a potion and feel your your vitality and vigor coming back to you. You feel yourself coming into good health!");
                setTimeout(() => {
                    displayDialogue("Narrator: ...");
                }, 1000);
                setTimeout(() => {
                    displayDialogue("Narrator: ...");
                }, 1000);
                setTimeout(() => {
                    displayDialogue("Narrator: ...");
                }, 1000);
                setTimeout(() => {
                    displayDialogue("Narrator: You remember to yourself that that potion you just consumed is incredibly old. You feel yourself getting sick! Your insides are burning and you feel like you need to lay down this very moment!");
                }, 1000);
                setTimeout(() => {
                    displayDialogue(demonLord.name + ", The Demon Lord: HAHAHAHA, WHAT'S WRONG HERO??? YOU'RE LOOKING A LITTLE GREEN AROUND THE GILLS!!!");
                }, 2000);
                player.health -= 20;
            };

            // function to use pasta
            function usePasta() {
                displayDialogue("Narrator: You pull the big bowl of pasta and for a moment notice out of the corner of your eye the look on The Demon Lord's face.");
                setTimeout(() => {
                    displayDialogue("Narrator: He is salivating and envious. It seems like he hasn't eaten in a long time.");
                }, 2000);
                setTimeout(() => {
                    displayDialogue(demonLord.name + ", The Demon Lord: You know Hero " + player.name + ", I would give up this whole Demon Lord thing if I could just have a bite of that pasta. It looks so delicious!");
                }, 2000);
                setTimeout(() => {
                    displayDialogue("Narrator: You think to yourself that you could use this to your advantage, however you relish in the spite of eating this pasta right in front of him. You take a bite of the pasta and it is delicious! You feel some of your strength and vitality coming back to you!");
                }, 2000);
                setTimeout(() => {
                    displayDialogue(demonLord.name + ", The Demon Lord:(He looks at you with a real hatred in his eyes) I'M GOING TO EAT YOU ALIVE, HERO " + player.name.toUpperCase() + "!!!!!");
                }, 3000);
                player.health += 10;
            };

            // function to use item
            function useItem() {
                // Check which item the player selected (item1, item2, or item3)
                const selectedItem = player.item1 || player.item2 || player.item3;
            
                if (selectedItem === "The Spell Book of Power") {
                    useSpellBook();
                } else if (selectedItem === "A Potion of Health") {
                    usePotion();
                } else if (selectedItem === "Homemade Pasta") {
                    usePasta();
                }
            
                // Remove the used item from the player's inventory
                if (selectedItem === player.item1) {
                    player.item1 = "null";
                } else if (selectedItem === player.item2) {
                    player.item2 = "null";
                } else if (selectedItem === player.item3) {
                    player.item3 = "null";
                }
            
                // Disable the item button to prevent further use during this turn
                document.getElementById('itemButton').disabled = true;
            
                // After using an item, proceed to the Demon Lord's turn
                demonLordTurnHandler();
            };



            // function to handle player's turn
            function playerTurnHandler() {
                // enable player action buttons (e.g., attack, guard, etc.)
                document.getElementById('attackButton').disabled = false;
                document.getElementById('talkButton').disabled = false;
                document.getElementById('itemButton').disabled = false;
                       
                // handle the attack button click
                document.getElementById('attackButton').addEventListener('click', () => {
                    // Implement player's attack
                    demonLord.health -= player.attackPower - demonLord.defense;  
                    // display attack message
                    const attackMessageElement = document.createElement('p');
                    const br = document.createElement('br');
                    attackMessageElement.textContent = "Narrator: " + attackMessage;
                    document.getElementById('textContainer').appendChild(attackMessageElement);
                    document.getElementById('textContainer').appendChild(br);
                    scrollToBottom(textContainer);

                    // disable buttons at the end of the player's turn
                    disableButtons();
                    // switch to the demon lord's turn
                    demonLordTurnHandler();
                });

                // handle the talk button click
                document.getElementById('talkButton').addEventListener('click', () => {
                    // display talk message
                    const talkMessageElement = document.createElement('p');
                    const br = document.createElement('br');
                    talkMessageElement.textContent = "Narrator: " + talkMessage;
                    document.getElementById('textContainer').appendChild(talkMessageElement);
                    document.getElementById('textContainer').appendChild(br);
                    scrollToBottom(textContainer);

                    // present talk options
                    talkOptions();
                    // disable buttons at the end of the player's turn
                    disableButtons();
                    // switch to the demon lord's turn
                    demonLordTurnHandler();
                });

                // handle the item button click
                document.getElementById('itemButton').addEventListener('click', () => {
                    displayDialogue("Narrator: You decide to use an item!");
                        const itemContainer = document.getElementById('itemContainer');
                        itemContainer.style.display = 'flex';
                    // calling useItem function
                    useItem();
                });
            };

            // Function to handle demon lord's turn
            function demonLordTurnHandler() {
                // Implement demon lord's actions (e.g., attack player, etc.)

                // After demon lord's turn is done, check for victory conditions and go back to player's turn if needed
                if (player.health > 0 && demonLord.health > 0) {
                    playerTurn = true;
                    playerTurnHandler();
                } else {
                    // Handle end of battle, victory, or defeat
                }
            }

            // Start the battle with the player's turn
            playerTurnHandler();
        }    
    }
}

