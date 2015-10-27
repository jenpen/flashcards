$(document).ready(function(){

//using Constructor Function - was not able to pull a value from the object literal
  function Card (term, definition) {
    this.termValue = term;
    this.definitionValue = definition;
    this.display = function (side) {
      console.log(this)
      if (side === 0) {
        return this.termValue;
      } else {
        return this.definitionValue;
      }
    };
  }

  var cardDeck = {
    cardArray : [],
    cardIndex : 0,
    cardSide : 0,
    cardPosition : $("#card_index"),
    cardTerm : $("#card_term"),
    cardDefinition : $("#card_definition"),

//Add a card
    cardAdd: function(term, definition) {
      this.cardArray.push( new Card (term, definition));
      //this.cardText.html(term,definition);
      console.log("cardAdd firing");
    },

//Create the card position within the index. Update the card counter.
    cardUpdate: function() {
      var currentCard = this.cardArray[this.cardIndex];
      console.log(currentCard.termValue);
      console.log(currentCard.definitionValue);
      this.cardTerm.text(currentCard.termValue);
      this.cardDefinition.text(currentCard.definitionValue)
      this.cardDefinition.hide();
      this.cardPosition.html("Card " + (this.cardIndex + 1) + " of " + (this.cardArray.length));
      //this.cardText.html(cardDeck.cardAdd); //show currentCard and the specified side of that card. Maybe use toggleClass.
      // $.map(this.cardArray, function(definition, keyDefinition) {
      //   console.log(definition);
      //   return definition;
      //})
      console.log("cardUpdate Firing");
      //console.log(Card.term);
    },

// Get other side of the card
    // cardFlip: function () {
    //   this.cardSide = (this.cardSide + 1 ) % 2;
    // },

    cardNext: function (changeCard) {
      this.cardIndex += changeCard;
      if (this.cardIndex < 0) {
        this.cardIndex += this.cardArray.length;
      }
      this.cardIndex = this.cardIndex % this.cardArray.length;
      this.cardSide = 0;
      this.cardUpdate();
    },

    cardClick: function () {
      //this.cardFlip();
      this.cardUpdate();
      this.cardDefinition.toggle();

      console.log("I'm clicking!");

      //})
    },

// Move between cards
    previousButton: function () {
      $("#prev_card_button").on("click", function () {
        cardDeck.cardNext(-1);
        console.log("prev card firing")
      });
    },

    nextButton: function () {
      $("#next_card_button").on("click", function () {
        cardDeck.cardNext(1);
        console.log("next card firing")
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
  cardDeck.previousButton();
  cardDeck.nextButton();

  $("#card_face").on("click", function() {
    cardDeck.cardClick()
    });

  })

//end of the document
