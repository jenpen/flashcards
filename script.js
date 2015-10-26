$(document).ready(function(){

  function card (front, back) {
    var frontValue = front;
    var backValue = back;
    function cardValue(card) {
      if (card === 0) {
        return frontValue;
      } else {
        return backValue;
      }
    }
  };

  var cardDeck = {
    cards: [],
    cardIndex: 0,
    cardPosition: $("#card_index"),
    cardSide: 0,
    cardClick: $("#card_face"),
    cardText: $("#card_text"),

//Add a card
    cardAdd: function(front, back) {
      this.cards.push(card(front, back));
      this.cardText.html(front,back);
      console.log("cardAdd firing");
    },

//Create the card position within the index. UPdate the card counter.
    cardCreate: function() {
      var currentCard = this.cards[this.cardIndex];
      this.cardPosition.html("Card " + (this.cardIndex++) + " of " + (this.cards.length));
      console.log("cardCreate firing");

    }
  };

// My cards
//  cardDeck.cardAdd(" Front Card "," Back Card ");

  cardDeck.cardAdd(".HTML()","Get or set the HTML contents of an element");
  cardDeck.cardAdd("*","Selects all elements");
  cardDeck.cardAdd(".class","Selects all elements with a specified class");
  cardDeck.cardAdd("#id","Selects all elements with a specified ID");


//end of the document
})
