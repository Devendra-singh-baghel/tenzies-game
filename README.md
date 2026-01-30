# 🎲 Thenzies – A Strategy-Based Dice Game

Thenzies is a fun, strategy-driven dice game inspired by classic dice games like _Tenzies_, but with stricter rules and deeper decision-making.

The goal is simple:
**Make all 10 dice show the same value in the fewest number of rolls possible.**

But the challenge lies in commitment — once you choose a number, you must stick with it for the entire game.

---

## Links

- GitHub Repo: [click here](https://github.com/Devendra-singh-baghel/tenzies-game)
- Live Preview: [click here](https://tenzies-game-nine-omega.vercel.app/)

---

## Live Gameplay Concept

- The game starts with **10 dice**, each showing a random value (1–6)
- On the **first click**, the player selects a target value
- All dice with that value are automatically **held (locked)**
- On every roll:
  - Only **unheld dice** are re-rolled
  - If new dice match the selected value, the player can hold them
- The game ends when **all 10 dice are held with the same value**
- Final score is based on **total roll count** (lower is better)

---

## Core Rules

- **One-time commitment**:  
  Once a value is selected, it becomes the target for the entire game.
- **No cheating**:  
  Dice with a different value cannot be held.
- **Invalid click feedback**:  
  Clicking a wrong-value die triggers a red blink warning.
- **Rolling logic**:
  - Held dice stay unchanged
  - Unheld dice get new random values
- **Win condition**:
  - All dice are held
  - All dice have the same value

---

## Strategy Element

This is not a luck-only game.

Players must:

- Choose the right value early
- Decide when to hold or wait
- Optimize rolls to achieve the **best (lowest) score**

---

## Scoring System

- **Score** = Total number of rolls taken to win
- **Best Score**:
  - Stored locally using `localStorage`
  - Updates automatically if a better score is achieved

---

## Features

- 10 interactive dice
- Visual feedback (green hold, red invalid blink)
- Best score tracking
- Confetti animation on win
- Accessible win announcement (ARIA live region)

---

## Built With

- **React**
- **JavaScript (ES6+)**
- **CSS / Tailwind CSS**
- **React Hooks**
  - `useState`
  - `useEffect`
  - `useRef`

---

## Setup Instructions

To run MealMate locally:

1. Clone the repository:
```bash
git clone https://github.com/Devendra-singh-baghel/tenzies-game
```
2. Navigate to the project folder:
```bash
cd tenzies-game
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```
5. Open your browser and visit `http://localhost:5173/`

---

## Author

**Devendra Singh Baghel**

- Aspiring Frontend Developer

- GitHub: [@Devendra-singh-baghel](https://github.com/Devendra-singh-baghel)   
- LinkedIn: [Devendra Singh Baghel](https://linkedin.com/in/devendra-singh-baghel-267023351)
- Twitter: [@DevendraSingh_4](https://x.com/DevendraSingh_4)
- Email: [devendrabaghel0220@gmail.com]

