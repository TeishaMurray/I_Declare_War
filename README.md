# I Declare War
https://teishamurray.github.io/I_Declare_War/

# Description
This is a modified version of the children’s card game, I Declare War, with a breakdancer theme. Each player (user and computer) is given 10 cards from a deck. They each draw the card from the top of the deck. The player with the higher number scores a point. 

# The Logic
Currently the deck is a total of 20 cards; two cards each for numbers 0 through 9.
The cards are placed into an array that is shuffled using math.floor() and math.random().
The array is then split in half using slice() array method, giving each player one half of the deck.
Because the deck has a limited number of cards, when the players draw the same card the player with the higher score at the time loses a point. 
When there are no cards left a modal appears declaring the winner, with a button to refresh the page. 

# Additional Features
Moving forward I would like to add multiple modals that appear at different points in the game. The content would include information about the history of hip hop, and breakdancing in particular.
I would also like to add breakdancer silhouettes to the faces of the cards to enhance the design. Possibly increasing the size of the deck as well
