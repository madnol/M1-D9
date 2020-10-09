let bingoBoard = document.querySelector('#bingoBoard');

// BINGO BOARD
//This generates the Bingo Board with numbers from 1 to 76

const generateBoard = () => {
  for (let i = 1; i <= 76; i++) {
    let div = document.createElement('div');
    div.classList.add(i);
    div.innerHTML = `<h3>${i}</h3>`;
    bingoBoard.appendChild(div);
  }
};

// PLAYER CARD(S)
//the generateCard function is called when I load the browser and then if I want to add extra cards,every time I create a new card with the + button.
const generateCard = () => {
  let newCard = 
};
