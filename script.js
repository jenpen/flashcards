$(document).ready(function(){

  var cardDeck = {
    cardArray : [],
    cardIndex : 0,
    cardSide : 0,
    cardPosition : $("#card_index"),
    cardFace : $("#card_face"),
    cardText : $("#card_text"),

//Add a card
    cardAdd: function(term, definition) {
      this.cardArray.push({term : term, definition : definition});
      this.cardText.html(term,definition);
      console.log("cardAdd firing");
    },

//Create the card position within the index. Update the card counter.
    cardUpdate: function() {
      var currentCard = this.cardArray[this.cardIndex];
      this.cardPosition.html("Card " + (this.cardIndex + 1) + " of " + (this.cardArray.length));
      this.cardText.html("something"); //show currentCard and the specified side of that card

      console.log(currentCard);
    },

// Get other side of the card
    cardClick: function () {
      this.cardText.on("click", function () {
      console.log("I'm clicking!");
      })
    },

// Move between cards
    cardNext: function (changeCard) {
      this.cardIndex += changeCard;
      if (this.cardIndex < 0) {
        this.cardIndex += this.cardArray.length;
      }
      this.cardIndex = this.cardIndex % this.cardArray.length;
      this.cardSide = 0;
      this.cardUpdate();
    },

    previousButton: function () {
      $("#prev_card_button").on("click", function () {
        cardDeck.cardNext(-1);
      });
    },

    nextButton: function () {
      $("#next_card_button").on("click", function () {
        cardDeck.cardNext(1);
      });
    }
  };



// My cards /////////////
//  cardDeck.cardAdd(" Term  "," Definition ");

  cardDeck.cardAdd(".HTML()","Get or set the HTML contents of an element");
  cardDeck.cardAdd("*","Selects all elements");
  cardDeck.cardAdd(".class","Selects all elements with a specified class");
  cardDeck.cardAdd("#id","Selects all elements with a specified ID");


///////////////////////////
  cardDeck.cardUpdate();
  cardDeck.cardClick();
  cardDeck.previousButton();
  cardDeck.nextButton();

//end of the document
})
