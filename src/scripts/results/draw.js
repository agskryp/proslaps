export default {
  methods: {
    draw(hand) {
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
      }
    }
  }
}