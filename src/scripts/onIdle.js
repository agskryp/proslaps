export default {
  methods: {
    // Generate computer's choice, also used in onAction()
    computerIcon: function() {
      this.rng = Math.floor(Math.random() * 5 + 1);

      if (this.rng == 1) {
        this.computerChoice = "hand-paper";
        this.computerHand = "Computer plays paper.";
      }

      if (this.rng == 2) {
        this.computerChoice = "hand-rock";
        this.computerHand = "Computer plays rock.";
      }

      if (this.rng == 3) {
        this.computerChoice = "hand-scissors";
        this.computerHand = "Computer plays scissors.";
      }

      if (this.rng == 4) {
        this.computerChoice = "hand-lizard";
        this.computerHand = "Computer plays lizard.";
      }

      if (this.rng == 5) {
        this.computerChoice = "hand-spock";
        this.computerHand = "Computer plays spock.";
      }
    },

    // Idle screen icon generator
    idleAnimations: function() {
      this.computerIcon();

      this.rng = Math.floor(Math.random() * 5 + 1);

      if (this.rng == 1) {
        this.humanChoice = "hand-paper";
      }

      if (this.rng == 2) {
        this.humanChoice = "hand-rock";
      }

      if (this.rng == 3) {
        this.humanChoice = "hand-scissors";
      }

      if (this.rng == 4) {
        this.humanChoice = "hand-lizard";
      }

      if (this.rng == 5) {
        this.humanChoice = "hand-spock";
      }
    }
  }
};
