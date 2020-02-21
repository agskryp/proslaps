export default {

  mounted() {
    this.t = setInterval(() => {
      this.onIdleScreen();
    }, 1000);
  },

  methods: {
    onAction(hand) {
      clearInterval(this.t);
      this.actionResults = true;
      this.computerIconGenerator = Math.floor(Math.random() * 5 + 1);

      if (this.computerIconGenerator == 1) {
        this.computerChoice = "hand-paper";
      }

      if (this.computerIconGenerator == 2) {
        this.computerChoice = "hand-rock";
      }

      if (this.computerIconGenerator == 3) {
        this.computerChoice = "hand-scissors";
      }

      if (this.computerIconGenerator == 4) {
        this.computerChoice = "hand-lizard";
      }

      if (this.computerIconGenerator == 5) {
        this.computerChoice = "hand-spock";
      }

      this.humanChoice = hand;

      if (
        (hand == "hand-rock" && this.computerChoice == "hand-scissors") ||
        (hand == "hand-rock" && this.computerChoice == "hand-lizard") ||
        (hand == "hand-paper" && this.computerChoice == "hand-rock") ||
        (hand == "hand-paper" && this.computerChoice == "hand-spock") ||
        (hand == "hand-scissors" && this.computerChoice == "hand-paper") ||
        (hand == "hand-scissors" && this.computerChoice == "hand-lizard") ||
        (hand == "hand-lizard" && this.computerChoice == "hand-spock") ||
        (hand == "hand-lizard" && this.computerChoice == "hand-paper") ||
        (hand == "hand-spock" && this.computerChoice == "hand-scissors") ||
        (hand == "hand-spock" && this.computerChoice == "hand-rock")
      ) {
        this.counterWins++;
        this.results = "User wins!";
      } else if (
        (hand == "hand-rock" && this.computerChoice == "hand-rock") ||
        (hand == "hand-paper" && this.computerChoice == "hand-paper") ||
        (hand == "hand-scissors" && this.computerChoice == "hand-scissors") ||
        (hand == "hand-lizard" && this.computerChoice == "hand-lizard") ||
        (hand == "hand-spock" && this.computerChoice == "hand-spock")
      ) {
        this.counterDraws++;
        this.results = "It's a draw!";

        if (hand == "hand-scissors" && this.computerChoice == "hand-scissors") {
          this.message = "En Garde!";
        }

        if (hand == "hand-spock" && this.computerChoice == "hand-spock") {
          this.message = "Great Spocks think alike";
        }
      } else if (
        (hand == "hand-rock" && this.computerChoice == "hand-spock") ||
        (hand == "hand-rock" && this.computerChoice == "hand-paper") ||
        (hand == "hand-paper" && this.computerChoice == "hand-scissors") ||
        (hand == "hand-paper" && this.computerChoice == "hand-lizard") ||
        (hand == "hand-scissors" && this.computerChoice == "hand-spock") ||
        (hand == "hand-scissors" && this.computerChoice == "hand-rock") ||
        (hand == "hand-lizard" && this.computerChoice == "hand-scissors") ||
        (hand == "hand-lizard" && this.computerChoice == "hand-rock") ||
        (hand == "hand-spock" && this.computerChoice == "hand-lizard") ||
        (hand == "hand-spock" && this.computerChoice == "hand-paper")
      ) {
        this.counterLoses++;
        this.results = "Computer Wins";

        if (hand == "hand-paper" && this.computerChoice == "hand-scissors") {
          this.message = "Snip Snip!";
        }
      }

      setTimeout(() => {
        this.t = setInterval(() => {
          this.onIdleScreen();
        }, 1000);

        this.actionResults = false;
        this.results = "Play again?";
        this.message = "Computer is thinking...";
      }, 3000);
    }
  },
};
