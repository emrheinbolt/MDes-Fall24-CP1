// script.js

// Array of riddles with answers and hints
const riddles = [
    {
      question: "What has roots as nobody sees, is taller than trees, up, up it goes, and yet never grows?",
      answer: "mountain",
      hint: "It's a natural formation, reaching high."
    },
    {
      question: "This thing all things devours: Birds, beasts, trees, flowers; Gnaws iron, bites steel; Grinds hard stones to meal.",
      answer: "time",
      hint: "It affects everything and everyone."
    },
    {
      question: "Alive without breath, as cold as death; never thirsty, ever drinking, all in mail never clinking.",
      answer: "fish",
      hint: "Think of something that lives in water."
    },
    {
      question: "A box without hinges, key, or lid, yet golden treasure inside is hid.",
      answer: "egg",
      hint: "A common breakfast food with a surprise inside."
    }
  ];
  
  let currentRiddle = 0;
  let isGameActive = false;
  
  // Display the current riddle
  function displayRiddle() {
    const riddleText = document.getElementById('riddle-text');
    const answerInput = document.getElementById('answer-input');
    const hintText = document.getElementById('hint-text');
  
    // Display the riddle question
    riddleText.textContent = riddles[currentRiddle].question;
    answerInput.value = ''; // Clear any previous answer
    answerInput.disabled = false; // Enable input
    hintText.textContent = ''; // Clear previous hint
  }
  
  // Start or restart the game
  function startGame() {
    currentRiddle = 0;
    isGameActive = true;
    document.getElementById('answer-input').disabled = false;
    displayRiddle();
  }
  
  // Check the answer and provide feedback
  function checkAnswer() {
    const answerInput = document.getElementById('answer-input');
    const hintText = document.getElementById('hint-text');
  
    if (!isGameActive) {
      alert("Click 'Start' to begin!");
      return;
    }
  
    // Check if the answer is correct
    if (answerInput.value.toLowerCase() === riddles[currentRiddle].answer.toLowerCase()) {
      currentRiddle++;
      if (currentRiddle < riddles.length) {
        alert("Correct! On to the next riddle...");
        displayRiddle();
      } else {
        alert("You solved all the riddles! Your journey is complete.");
        isGameActive = false;
        document.getElementById('riddle-text').textContent = "Congratulations, hero!";
        document.getElementById('answer-input').disabled = true;
      }
    } else {
      hintText.textContent = `Hint: ${riddles[currentRiddle].hint}`;
    }
  }
  