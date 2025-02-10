# Quiz Application

A dynamic web-based quiz application built with React. This project allows users to select quiz difficulty levels, answer questions rendered with mathematical expressions using **better-react-mathjax**, navigate seamlessly between questions, and view detailed results upon submission.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Difficulty Selection**: Users choose from Easy, Medium, Hard, or Any.
- **Single-Question Display**: Each question is shown individually with four options.
- **MathJax Integration**: Mathematical expressions are rendered using [better-react-mathjax](https://www.npmjs.com/package/better-react-mathjax).
- **Navigation**: 'Previous' and 'Next' buttons allow users to navigate and change answers.
- **Result Overview**: Upon submission, users see their final score, correct answers, question difficulties, and percentage of correct responses.
- **Excel into Json**: Ensures consistency in quiz data (converted from Excel to JSON).

---

## Tech Stack

- **React** – Front-end framework for building the user interface.
- **better-react-mathjax** – For rendering LaTeX and mathematical expressions.
- **XLSX (SheetJS)** – *(Optional)* For converting Excel files to JSON.
- **CSS/SCSS** – For styling the application.
- **Netlify/Heroku** – For deployment (choose based on your preference).

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Priyanka-is-on-github/LearnQ.ai_Sample_Quiz.git
   cd LearnQ.ai_Sample_Quiz
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **(Optional) Convert Excel Data to JSON:**
   ```bash
   node script.js
   ```
## Usage
1. **Start the Development server:**
  ```bash
   npm start
  ```
2. **Open your Browser:**
   Navigate to : http://localhost:5173  
 
3. Interact with the quiz:
    - Select a quiz difficulty.
    - Answer questions one at a time (math expressions are rendered with MathJax).
    - Use the 'Previous' and 'Next' buttons to navigate.
    - Submit the quiz to view detailed results.

## Project Structure
```pgsql
quiz-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── DifficultySelection.js
│   │   ├── Quiz.js
│   │   ├── Question.js
│   │   └── Results.js
│   ├── data/
│   │   └── questions.json
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```
