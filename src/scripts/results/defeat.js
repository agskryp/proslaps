export default {
  methods: {
    defeat(hand) {
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
        localStorage.counterLoses = this.counterLoses++;
        this.results = "Computer wins";

        if (hand == "hand-paper" && this.computerChoice == "hand-scissors") {
          this.message = "Snip snip sinp!";
        }

        if (hand == "hand-paper" && this.computerChoice == "hand-lizard") {
          this.message = "Eew, lizard slobber!";
        }

        if (hand == "hand-rock" && this.computerChoice == "hand-spock") {
          this.message = "Mind over matter";
        }

        if (hand == "hand-rock" && this.computerChoice == "hand-paper") {
          this.message = "Hmmmmmm";
        }

        if (hand == "hand-scissors" && this.computerChoice == "hand-spock") {
          this.message = "Away with your shears!";
        }

        if (hand == "hand-scissors" && this.computerChoice == "hand-rock") {
          this.message = "This isn't going to work";
        }

        if (hand == "hand-lizard" && this.computerChoice == "hand-scissors") {
          this.message = "Lizards are not starfish";
        }

        if (hand == "hand-lizard" && this.computerChoice == "hand-rock") {
          this.message = "Oh the humanity!";
        }

        if (hand == "hand-spock" && this.computerChoice == "hand-lizard") {
          this.message = "Lizard uses poison.  It's super effective!";
        }

        if (hand == "hand-spock" && this.computerChoice == "hand-paper") {
          this.message = "Subpoena date is two weeks from today";
        }
      }
    }
  }
};
