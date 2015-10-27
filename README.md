# flashcards
Submission for General Assembly Project 1


Requested Documentation:

**Technologies Used:**
HTML, CSS, jQuery, Javascript

- Linked resources include:
    * [normalize.css] (http://necolas.github.io/normalize.css/latest/normalize.css)
    * [minified jQuery] (https://code.jquery.com/jquery-2.1.4.min.js)

**Approach taken:**
*Initial considerations.*
* wanted to use context and "this" so that I could reinforce concept
* wanted to use an array to store cards
* the front of the card should have a false value and the back of the card should have a true value.

Initially wanted to use object literal statement to push values into my array, but was not able to figure out how to pull value from the array and push into individual cards. Stackexchange offered example of how to use constructor functions, and I was able to pull the required value out that way(set variable to array.indexvalue then call variable.value). Second pass, I would like to go back and rewrite the code to use the object literal statement.

*referenced:* http://codereview.stackexchange.com/questions/78278/simplistic-flash-card-web-app

* Favorite feature: use of .fadeToggle(); updated card index (Card n of 20)
* Least favorite feature: Long list of cards

**Installation Instructions:**


**Unsolved problems:**
* Silver Feature: user clicks on card to make the definition disappear. Need to reset display none status.
* Silver Feature: add css to "turn" the card around using CSS transition
* user story 2: enter new cards. Rough draft of code in HTML has been created. Need to explore functionality and styling.
* user story 3: indicator that a card has been previously reviewed. Feature undeveloped.
* user story 4: user selector to indicate they have mastered the card. Feature undeveloped.
* would like to use JSON to store card data

**User Stories:**

1. As a user, I should be able to go between old cards and new cards so that I can access the breadth of content available. (Complete!)
2. As a user, I should be able to enter new cards so that I can contribute to the information I am learning. (Gold feature!)
3. As a user, I should be able to see if I have reviewed a card before so that I can keep track of my progress. (Gold feature!)
4. As a user, I should have a self-selected indicator so that I can note if I am improving. (Gold feature!)
5. As a user, I should have a counter so that I know how many cards I have reviewed. (Complete!)

**Prototype:**
![jQuery Flashcards] (/flashcards_prototype_lf.png)