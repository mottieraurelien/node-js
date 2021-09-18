Game Of Life
=============

## Introduction
In the words of his creator, John Horton Conway :
> A no-player game.

This game refers to life since cells can emerge, keep living, or die.
Each new cell generation depends on its current state (alive or dead), and its neighbors' state.

The Game Of Life is what we call a "cellular automaton", meaning that its evolution is determined by its
initial state, requiring no further input. So we will start by an initial state and then the game will
apply some rules (that we will implement) to generate the next generation of the cells.

## Let's play first
You can find many online games based on the Game Of Life, here is an example : https://playgameoflife.com/
You can either start, or select a pattern from the lexicon.

A lot of people played this game over the years and discovered many patterns (simple and really complex) that will make you
enjoy watching your screen for few minutes ha ha !

A pattern is a starting situation that will evolve and "draw" something
fun as stable situations (nothing change at some point), repeated situations (keep switching between two schemes, that's it), ...

## Rules
This game is based on four simple rules :
* Any live cell with fewer than two live neighbours dies, as if by underpopulation.
* Any live cell with two or three live neighbours lives on to the next generation.
* Any live cell with more than three live neighbours dies, as if by overpopulation.
* Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The unit tests will definitely help you to implement them, no worry !

## Implementation

`#TestDrivenDevelopmentLovers`

To implement this game, you will need to match the technical requirements described through many existing unit tests.
The main idea was to lead the developer to implement this game without requiring a lot of experience or advanced
knowledge in algorithms and data structures.

### Implementing the rules
All you need to do is :
* Install the dependencies by running this command :
> npm install
* Make the unit tests [first.spec.ts](./src/_test_/first.spec.ts) pass.
* Make the unit tests [second.spec.ts](./src/_test_/second.spec.ts) pass.
* Make the unit tests [third.spec.ts](./src/_test_/third.spec.ts) pass.
* Make the unit tests [fourth.spec.ts](./src/_test_/fourth.spec.ts) pass.
* Make the unit tests [last.spec.ts](./src/_test_/last.spec.ts) pass.

It's important to respect the sequence of the unit tests if you don't want to get lost.

When they all pass, you can check one last time by running the command :
> npm test

### Watching the final result
As soon as you get all tests green, you can start the React app and discover the result by yourself.
Here is how you can start the React app :
> npm start

When it's started, you can open your browser and go to http://localhost:3000/.
Don't forget to open the web console to make sure that there is not any error !

### Initial state
The React app embeds a table of 200*200 `<td>` to build the grid.
Each `<td>` represents a cell that is 1px by 1px.

The system generates the initial state randomly. If after few seconds or minutes you want to start from
a new initial state then you can just reload the page.