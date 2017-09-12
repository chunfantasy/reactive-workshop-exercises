Exercise
===

Use the ex-2 solution as the start point. Change GameContainer component so that it uses /api/gameOfLife endpoint to computes the next state of the game. Everything else should remain the same. Here is how to make the remote call (response should be {"2_4":true,"3_4":true,"4_4":true}):

````
curl --header "Content-Type: application/json" \
--data '{"3_3": true, "3_4": true, "3_5": true}' \
http://localhost:3000/api/gameOfLife
````
