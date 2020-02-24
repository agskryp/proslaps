import victory from "@/scripts/results/victory.js";

export default {

  mixins: [victory],

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

      if (
        (hand == "hand-rock" && this.computerChoice == "hand-rock") ||
        (hand == "hand-paper" && this.computerChoice == "hand-paper") ||
        (hand == "hand-scissors" && this.computerChoice == "hand-scissors") ||
        (hand == "hand-lizard" && this.computerChoice == "hand-lizard") ||
        (hand == "hand-spock" && this.computerChoice == "hand-spock")
      ) {
        this.counterDraws++;
        this.results = "It's a draw!";

        if (hand == "hand-rock" && this.computerChoice == "hand-rock") {
          this.message = "Between a rock and a hard place";
        }

        if (hand == "hand-paper" && this.computerChoice == "hand-paper") {
          this.message = "Extra Extra!";
        }

        if (hand == "hand-scissors" && this.computerChoice == "hand-scissors") {
          this.message = "En Garde!";
        }

        if (hand == "hand-lizard" && this.computerChoice == "hand-lizard") {
          this.message = "Two lizards walk into a bar";
        }

        if (hand == "hand-spock" && this.computerChoice == "hand-spock") {
          this.message = "Great Spocks think alike!";
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
          this.message = "Snip snip sinp!";
        }

        if (hand == "hand-paper" && this.computerChoice == "hand-lizard") {
          this.message = "Gonna have to take a shower after this";
        }
      }

      clearTimeout( this.createPause );
      this.invocation();
    }
  }
};
