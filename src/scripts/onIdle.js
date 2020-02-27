export default {
  methods: {
    // Generate computer's choice, also used in onAction()
    computerIcon: function() {
      this.rgn = Math.floor(Math.random() * 5 + 1);

      if (this.rgn == 1) {
        this.computerChoice = "hand-paper";
      }

      if (this.rgn == 2) {
        this.computerChoice = "hand-rock";
      }

      if (this.rgn == 3) {
        this.computerChoice = "hand-scissors";
      }

      if (this.rgn == 4) {
        this.computerChoice = "hand-lizard";
      }

      if (this.rgn == 5) {
        this.computerChoice = "hand-spock";
      }
    },

    // Idle screen icon generator
    idleAnimations: function() {
      this.computerIcon();

      this.rgn = Math.floor(Math.random() * 5 + 1);

      if (this.rgn == 1) {
        this.humanChoice = "hand-paper";
      }

      if (this.rgn == 2) {
        this.humanChoice = "hand-rock";
      }

      if (this.rgn == 3) {
        this.humanChoice = "hand-scissors";
      }

      if (this.rgn == 4) {
        this.humanChoice = "hand-lizard";
      }

      if (this.rgn == 5) {
        this.humanChoice = "hand-spock";
      }
    }
  }
};
