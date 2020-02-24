import victory from "@/scripts/results/victory.js";
import draw from "@/scripts/results/draw.js";

export default {
  mixins: [victory, draw],

  methods: {
    invocation() {
      this.createPause;

      this.createPause = setTimeout(() => {
        this.t = setInterval(() => {
          this.onIdleScreen();
        }, 1000);

        this.actionResults = false;
        this.results = "Play again?";
        this.message = "Computer is thinking...";
      }, 3000);
    },

    onAction(hand) {
      clearInterval(this.t);
      this.actionResults = true;

      this.computerIcon();

      this.humanChoice = hand;

      this.victory(hand);
      this.draw(hand);

      if (
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
          this.message = "Snip snip sinp!";
        }

        if (hand == "hand-paper" && this.computerChoice == "hand-lizard") {
          this.message = "Gonna have to take a shower after this";
        }
      }

      clearTimeout(this.createPause);
      this.invocation();
    }
  }
};
