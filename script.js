$(document).ready(function() {

  //used Constructor Function - was not able to pull a value from the object literal
  function Card(term, definition) {
    this.termValue = term;
    this.definitionValue = definition;
    this.display = function(side) {
      console.log(this)
      if (side === 0) {
        return this.termValue;
      } else {
        return this.definitionValue;
      }
    };
  }

  var cardDeck = {
    cardArray: [],
    cardIndex: 0,
    cardSide: 0,
    cardPosition: $("#card_index"),
    cardTerm: $("#card_term"),
    cardDefinition: $("#card_definition"),

    //Add a card
    cardAdd: function(term, definition) {
      this.cardArray.push(new Card(term, definition));
    },

    //Create the card position within the index. Update the card counter.
    cardUpdate: function() {
      var currentCard = this.cardArray[this.cardIndex];
      this.cardTerm.text(currentCard.termValue);
      this.cardDefinition.text(currentCard.definitionValue)
      this.cardDefinition.hide();
      this.cardPosition.html("Card " + (this.cardIndex + 1) + " of " + (this.cardArray.length));
    },

    //Move through the cards -- Gold feature would be to randomize the order of the cards.
    cardNext: function(changeCard) {
      this.cardIndex += changeCard;
      if (this.cardIndex < 0) {
        this.cardIndex += this.cardArray.length;
      }
      this.cardIndex = this.cardIndex % this.cardArray.length;
      this.cardSide = 0;
      this.cardUpdate();
      this.userCheckbox();
      $("#userKnowsAnswer").attr("checked", false);
    },

    cardClick: function() {
      this.cardUpdate();
      this.cardDefinition.fadeToggle();
      //Silver Feature: be able to hide cardTerm when cardDefinition is displayed then toggle back and forth on each click.
    },

    //User click if they know a card. Remove card from rotation.
    userCheckbox: function () {
      $("#userConfirmKnows").hide();
      $("#userKnowsAnswer").click(function () {
        $("#userConfirmKnows").toggle(this.check);
      });
    },

    // Move between cards
    previousButton: function() {
      $("#prev_card_button").on("click", function() {
        cardDeck.cardNext(-1);
      });
      $("body").keyup(function(evt) {
        if (evt.keyCode === 37) {
          cardDeck.cardNext(-1);
        }
      });
    },

    nextButton: function() {
      $("#next_card_button").on("click", function() {
        cardDeck.cardNext(1);
      });
      $("body").keyup(function(evt) {
        if (evt.keyCode === 39) {
          cardDeck.cardNext(1);
        }
      });
    }
  };

  // My cards /////////////
  //  cardDeck.cardAdd(" Term  "," Definition ");

  cardDeck.cardAdd(".html()", "Getter and Setter. Get the HTML content for the first element in the set of matched elements. Set HTML content for every matched element.");
  cardDeck.cardAdd("*", "Selects all elements");
  cardDeck.cardAdd(".class", "Selects all elements with a specified class.");
  cardDeck.cardAdd("#id", "Selects all elements with a specified ID.");
  cardDeck.cardAdd("selector1, selector2, selectorN", "Multiple selectors select the combined results of all the specified selectors.");
  cardDeck.cardAdd("parent > child", "Child Selector: selects all direct child elements specified by \"child\" of elements specified by \"parent\".");
  cardDeck.cardAdd(".attr()", "Getter and Setter. Get the value of an attribute for the first element in the set of matched elements. Set one or more attributes for every matched element.");
  cardDeck.cardAdd("removeAttr()", "Removes an attribute from each element in the set of matched elements.");
  cardDeck.cardAdd("val()", "Gets the current value of the first element in teh set of matched elements or sets the value of every matched element.");
  cardDeck.cardAdd(".addClass", "Adds the specified class(es) to each element in the set of matched elements.");
  cardDeck.cardAdd(".css()", "Gets the value of a styled property for the first element in the set of matched elements or sets CSS properties for every matched element.");
  cardDeck.cardAdd(":button", "Selects all button elements and elements of type button.");
  cardDeck.cardAdd(".eq()", "Select the element at index\[n\] withing the matched set.");
  cardDeck.cardAdd(".hide()", "Hides the matched elements by setting display: none.");
  cardDeck.cardAdd(".show()", "Displays the matched elements.");
  cardDeck.cardAdd(".toggle()", "Displays or hides the matched elements.");
  cardDeck.cardAdd(".click()", "Binds an event listener to the \"click\" Javascript event, or triggers that event on an element.");
  cardDeck.cardAdd("event.target", "The \[target\] property can be the element that registered for the event or a descendent of it. Similar to \"this\", context is useful to determine if the event is being handled.");
  cardDeck.cardAdd(".keyup()", "Binds an event listener to the \"keyup\" Javascript event, or triggers that event on an element.");
  cardDeck.cardAdd(".hover()", "Binds an action to matched elements that is executed when the mouse pointer enters and leaves the elements.");

  ///////////////////////////

  // function userCard() {
  //   var newTerm = $("#new_term").val();
  //   var newDefinition = $("#new_definition").val();
  //   cardDeck.cardAdd(newTerm, newDefinition);
  //   console.log(cardDeck.cardArray.length);
  //   cardDeck.cardUpdate();
  // };

  cardDeck.cardUpdate();
  cardDeck.previousButton();
  cardDeck.nextButton();
  cardDeck.userCheckbox();

  $("#card_face").on("click", function() {
    cardDeck.cardClick();
  });

  $("body").keyup(function(evt) {
    if (evt.keyCode === 32) {
      cardDeck.cardClick();
    }
  });

  //$("#new_card_submit").on("click", userCard());
})
