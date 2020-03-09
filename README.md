## Kakuro App

Logic Puzzle app, using React

### `Features`

- Randomized games
- Hint and solve button
- User-friendly design
  <br />

### `Development`

Was a lot of fun to make. I learnt a lot about React practices during this project, such as understanding how to thread class methods through props, and maintaining state in a single parent component. The game features include randomised game selection, hints and cheat option.

In development, there were two large bugs to overcome: firstly, how to compare two arrays to check if they match. The solution was to use JSON.stringify(). Secondly, when populating an empty array with user answers, when starting a new game, the array was not clearing before the next game. It turned out using the spread operator to create a copy of the original empty array was only creating a shallow copy, meaning that the same array was continually being used. The solution to this involved using JSON.parse(JSON.stringify(array)).
