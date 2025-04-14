window.onload = function() {
  generateRandomCard();
  
  document.querySelector('#newCardBtn').addEventListener('click', generateRandomCard);
  
  // Opcional: Temporizador para cambiar carta cada 10 segundos
  setInterval(generateRandomCard, 10000);
};

function generateRandomCard() {
  const card = document.querySelector('#card');
  // Palos
  const suits = ['heart', 'diamond', 'spade', 'club'];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)]; 
  // Valores
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const randomValue = values[Math.floor(Math.random() * values.length)]; 

  // Remover Clases anteriores y agregar nuevas 
  card.className = 'card ' + randomSuit;
  card.innerHTML = `<div style= "font-size: 80px; text-align: center; margin: auto;">${randomValue}</div>`;

}