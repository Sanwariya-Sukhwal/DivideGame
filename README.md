# Just Divide — ReactJS Game

A fun number-puzzle game built with **React + Vite** as part of the **Eklavya Game Dev Task**.  
Drag tiles onto the grid and use division logic to clear numbers and score points — before the timer runs out!


##  How to Play

1. A tile appears in the NEXT queue on the right panel.
2. Drag the current tile onto any empty cell in the 4×4 grid.
3. When a tile is placed next to a neighbor:
   - If they are equal → both tiles are removed.
   - If one divides the other → the larger is replaced by the quotient; the smaller is removed.
4. Score points for every successful division or cancellation.
5. Use the KEEP slot to save a tile and swap it back later.
6. Use TRASH to discard the current tile — limited to 10 uses.
7. The game ends when the timer reaches 0:00 or the grid is full with no valid moves.


## Features

| Feature | Description |
|---|---|
|  Peach gradient background | Radial gradient with decorative floating bubble circles |
|  Cat mascot | Cute cat image sits on top of the game board |
|  Countdown timer | 3-minute timer — game ends when it hits zero |
|  Level system | Level increases automatically based on your score |
|  Two-tile queue | See the current tile + the next upcoming tile |
|  Keep slot | Save one tile to use later; click to swap |
|  Trash (×10) | Discard the current tile — only 10 uses per game |
|  Pause / ▶ Resume | Pause modal stops the timer |
|  Help modal | In-game instructions overlay |
|  Responsive | Works on both desktop and mobile screens |
|  Best score | Best score is tracked across games via localStorage |


##  Project Structure

DivideGame_Updated/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                  # App entry point
    ├── App.jsx                   # Root component
    ├── styles/
    │   └── index.css             # All styles (gradient, tiles, panel, modals)
    ├── assets/
    │   ├── Cat.png               # Cat mascot image
    │   ├── eklavya.png           # Eklavya logo
    │   ├── orange.png            # Tile color reference
    │   ├── red.png
    │   ├── blue.png
    │   ├── pink.png
    │   └── purpule.png
    ├── pages/
    │   ├── Game.jsx              # Main game screen
    │   └── GameOver.jsx          # Game over screen
    ├── components/
    │   ├── Grid.jsx              # 4×4 drop-target grid
    │   ├── Tile.jsx              # Individual tile with color class
    │   ├── NextTile.jsx          # Shows current + next tile preview
    │   ├── KeepSlot.jsx          # Save/swap tile slot
    │   ├── Trash.jsx             # Discard tile (×10 uses)
    │   └── ScoreBoard.jsx        # (stub — badges rendered in Game.jsx)
    ├── hooks/
    │   ├── useTimer.js           # Countdown timer with pause/reset
    │   └── useScore.js           # Score state + localStorage best score
    └── utils/
        ├── generateTile.js       # Randomly picks a tile number
        ├── mergeLogic.js         # Division / cancellation logic
        ├── checkGameOver.js      # Checks if no moves remain
        ├── getLevelFromScore.js  # Calculates level from current score
        └── getTileColor.js       # Maps tile value → CSS color class
```

---

##  Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

bash
# 1. Extract the zip
unzip DivideGame_Updated.zip
cd DivideGame_Updated

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

Open your browser at http://localhost:5173

### Build for Production

bash
npm run build
npm run preview

##  Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^19.2.5 | UI framework |
| Vite | ^8.0.10 | Build tool & dev server |
| CSS (vanilla) | — | All styling, no UI library |
| Google Fonts | Fredoka One, Nunito | Game typography |


##  Tile Color System

Each tile value maps to a color class defined in `getTileColor.js`:

| Value | Color |
|---|---|
| 2 |    Blue |
| 3 |   Green |
| 4 / 6 |  Yellow |
| 8 |  Orange |
| 9 |  Pink |
| 12 |  Green |
| 32 |  Red |
| 35 |  Purple |
| Others | Cycles through all colors |


##  Scoring & Levels

- Score increases by the quotient of each division, or the tile value when two equal tiles cancel.
- Level is calculated from total score:

| Score Range | Level |
|---|---|
| 0 – 49 | Level 1 |
| 50 – 149 | Level 2 |
| 150 – 299 | Level 3 |
| 300 – 499 | Level 4 |
| 500 – 749 | Level 5 |
| 750+ | Level 6+ |


##  Changes from Original DivideGame

This project was upgraded from the original DivideGame to match the Eklavya Just Divide reference design:

| What changed | Original | Updated |
|---|---|---|
| Background | White card | Peach gradient + bubbles |
| Tile style | Plain grey | Teal/color-coded 3D tiles |
| Level system |  None |  Dynamic levels |
| Timer |  None |  3-min countdown |
| Cat mascot |  None |  On top of board |
| Controls layout | Horizontal top | Vertical right panel |
| Tile queue | 1 tile | 2 tiles (current + next) |
| Trash | Unlimited | Limited to ×10 |
| Title | "Divide Game " | "JUST DIVIDE" styled |
| Help / Pause |  None |  Modal overlays |
| Score/Level UI | Plain text | Red badge buttons |



##  Credits

- Game concept & design assets — Eklavya (making learning accessible)
- Development — Eklavya Game Dev Task submission
