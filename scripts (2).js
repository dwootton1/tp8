/* Js code for A Killer Memory, tp8js path*/

// set up card tracker
cardsClicked = 0;


// make sure the card hasn't been removed
function cardClicked(what) {
  if ( what.classList.contains("clicked") )  {
    // it's already clicked act appropriately
    what.classList.remove("clicked");
    cardsClicked--;
    
  } else {
    // it's not already clicked
     what.classList.add("clicked");
    cardsClicked++;
    
    if (cardsClicked == 2) {
      // compare card values
      cardCompare();
    }
  }
}

function cardCompare() {

  clickedCards = document.querySelectorAll(".clicked"); //collection of clicked cards

  //first clicked element will be clickedCards[0]
  //second clicked element will be clickedCards[1]

  matched = false; //track if the cards matched

  if (clickedCards[0].classList.contains("pic1") && clickedCards[1].classList.contains("pic1")) {
    matched = true; // matched pic 1

  } else if (clickedCards[0].classList.contains("pic2") && clickedCards[1].classList.contains("pic2")) {
    matched = true; // matched pic 2
    
  } else if (clickedCards[0].classList.contains("pic3") && clickedCards[1].classList.contains("pic3")) {
    matched = true; // matched pic 3
    
  } else if (clickedCards[0].classList.contains("pic4") && clickedCards[1].classList.contains("pic4")) {
    matched = true; // matched pic 4
  }
  
  else if (clickedCards[0].classList.contains("pic5") && clickedCards[1].classList.contains("pic5")) {
    matched = true; //they matched pic 5
  }
}

 if (matched) {
    //hide the cards 
    removeCards(clickedCards[0], clickedCards[1]);

  } else {
    //unflip the cards
    unflipCards(clickedCards[0], clickedCards[1]);

  

}


function removeCards(cardA, cardB) {
  
  pause = setTimeout(function() {
    cardA.classList.remove("clicked");
    cardB.classList.remove("clicked");

    cardA.classList.add("removed");
    cardB.classList.add("removed");
    
    cardsClicked = 0;
    
    checkWinning();
  }, 1000);  
}


function unflipCards(cardA, cardB) {
  
  pause = setTimeout(function() {
    cardA.classList.remove("clicked");
    cardB.classList.remove("clicked");
    
    cardsClicked = 0;
  }, 1000);  
}


function unflipCards(cardA, cardB) {
  
  pause = setTimeout(function() {
  cardA.classList.remove("clicked");
  cardB.classList.remove("clicked");
    
  cardsClicked = 0;  
  }, 1000);
}

function checkWinning () {
  remainingCards = document.querySelectorAll(".card"); 
  
  countCards = remainingCards.length
  
  // cycle through all cards and check for matched class
  for (c = 0; c < countCards; c++) {
   if ( !remainingCards[c].classList.contains("matched") ) {
     return; 
   }
  }
  
  document.getElementById("mainTable").innerHTML = "You're a true killer!"
}

function shuffleCards() {
  table = document.querySelector("#mainTable");
  cardCount = table.children.length;
 
  
  for (c = 0; c < cardCount; c++) {
   randomCard = Math.floor( Math.random() * cardCount );
   cardToMove = table.children[randomCard];
   table.appendChild( cardToMove );
    
  }
}

//stuff to do when page loads
window.onload = function() {
  
  shuffleCards();

  cardList = document.getElementsByClassName("card"); //collection of cards

  cardCount = cardList.length; //how many cards are on the table

  for (c = 0; c < cardCount; c++) {
    cardList[c].onclick = function() {
      cardClicked(this);
    }
  }
}