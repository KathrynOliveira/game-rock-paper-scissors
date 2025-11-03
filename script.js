let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ["pedra", "papel", "tesoura"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "😐 Empate!";
  } else if (
    (playerChoice === "pedra" && computerChoice === "tesoura") ||
    (playerChoice === "papel" && computerChoice === "pedra") ||
    (playerChoice === "tesoura" && computerChoice === "papel")
  ) {
    result = `🎉 Você venceu! ${playerChoice.toUpperCase()} vence ${computerChoice.toUpperCase()}`;
    playerScore++;
  } else {
    result = `💀 Você perdeu! ${computerChoice.toUpperCase()} vence ${playerChoice.toUpperCase()}`;
    computerScore++;
  }

  document.getElementById("result").innerText = result;
  document.getElementById("score").innerText = `Você: ${playerScore} | Computador: ${computerScore}`;
}
