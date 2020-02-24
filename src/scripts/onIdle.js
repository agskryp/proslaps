export default {
  methods: {
    computerIcon: function() {
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
    },

    onIdleScreen: function() {
      this.computerIcon();

      this.humanIconGenerator = Math.floor(Math.random() * 5 + 1);

      if (this.humanIconGenerator == 1) {
        this.humanChoice = "hand-paper";
      }

      if (this.humanIconGenerator == 2) {
        this.humanChoice = "hand-rock";
      }

      if (this.humanIconGenerator == 3) {
        this.humanChoice = "hand-scissors";
      }

      if (this.humanIconGenerator == 4) {
        this.humanChoice = "hand-lizard";
      }

      if (this.humanIconGenerator == 5) {
        this.humanChoice = "hand-spock";
      }
    },
  }
}
