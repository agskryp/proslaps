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
        localStorage.counterWins = this.counterWins++;
        this.results = "User wins";

        if (hand == "hand-rock" && this.computerChoice == "hand-scissors") {
          this.message = "Those scissors couldn't cut through butter";
        }

        if (hand == "hand-rock" && this.computerChoice == "hand-lizard") {
          this.message = "The making of lizard soup";
        }

        if (hand == "hand-paper" && this.computerChoice == "hand-rock") {
          this.message = "Covered and smothered like peanut butter";
        }

        if (hand == "hand-paper" && this.computerChoice == "hand-spock") {
          this.message = "Flooding the inbox with spam";
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

        if (hand == "hand-lizard" && this.computerChoice == "hand-spock") {
          this.message = "Lick licky lick";
        }

        if (hand == "hand-spock" && this.computerChoice == "hand-scissors") {
          this.message = "Four fingers are better than two";
        }

        if (hand == "hand-spock" && this.computerChoice == "hand-rock") {
          this.message = "Set your phasers to sand";
        }
      }
    }
  }
};
