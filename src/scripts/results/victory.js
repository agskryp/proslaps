export default {
  methods: {
    victory(hand) {
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
        this.message = "U A WINNA HA HA HA!";

        if (hand == "hand-rock" && this.computerChoice == "hand-scissors") {
          this.message = "Those scissors couldn't cut through butter";
        }

        if (hand == "hand-scissors" && this.computerChoice == "hand-paper") {
          this.message = "Sliding through like skates on ice";
        }

        if (hand == "hand-scissors" && this.computerChoice == "hand-lizard") {
          this.message = "Like a hunter on the prowl";
        }

        if (hand == "hand-lizard" && this.computerChoice == "hand-paper") {
          this.message = "Getting a good source of fiber";
        }
      }
    }
  }
};
